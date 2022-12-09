
import com.adventnet.authentication.AAAACCOUNT;
import com.adventnet.authentication.PasswordException;
import com.adventnet.authentication.util.AuthUtil;
import com.adventnet.mfw.bean.BeanUtil;
import com.adventnet.persistence.*;
import org.json.*;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


public class register extends HttpServlet {

    String FName = "";
    String LName = "";
    String Name = "";
    String Email = "";
    String Username = "";
    String Password = "";
    String Type = "Staff";
    public void Add(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
            FName = request.getParameter("fname");
            LName = request.getParameter("lname");
            Name = FName + " " + LName;
            Username = request.getParameter("uname");
            Email = request.getParameter("email");
            Password = request.getParameter("password");
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();
            JSONObject jo = new JSONObject();

            try {

                String loginName = Email;
                String firstName = FName;
                String middleName = "";
                String lastName = LName;
                String serviceName = "System";
                String accAdminProfile = "Profile 1";
                String password = Password;
                String passwordProfile = "Profile 1";

                Row r = new Row ("LoginDetails");
                r.set("EMAIL", Email);
                DataObject dataObject = new WritableDataObject();
                dataObject.addRow(r);
                DataAccess.add(dataObject);

                Persistence persistence = (Persistence) BeanUtil.lookup("Persistence");
                DataObject dobj = persistence.constructDataObject();
                Row userRow = new Row("AaaUser");
                userRow.set("FIRST_NAME", firstName);
                userRow.set("MIDDLE_NAME", middleName); // optional
                userRow.set("LAST_NAME", lastName); // optional
                dobj.addRow(userRow);

                Row loginRow = new Row("AaaLogin");
                loginRow.set("NAME", loginName);
                dobj.addRow(loginRow);

                Row accRow = new Row("AaaAccount");
                accRow.set(AAAACCOUNT.SERVICE_ID, AuthUtil.getServiceId(serviceName));
                accRow.set(AAAACCOUNT.ACCOUNTPROFILE_ID, AuthUtil.getAccountProfileId(accAdminProfile));
                dobj.addRow(accRow);

                Row passwordRow = new Row("AaaPassword");
                passwordRow.set("PASSWORD", password);
                passwordRow.set("PASSWDPROFILE_ID", AuthUtil.getPasswordProfileId(passwordProfile));
                dobj.addRow(passwordRow);

                Row accPassRow = new Row("AaaAccPassword");
                accPassRow.set("ACCOUNT_ID", accRow.get("ACCOUNT_ID"));
                accPassRow.set("PASSWORD_ID", passwordRow.get("PASSWORD_ID"));
                dobj.addRow(accPassRow);

                Row authRoleRow1 = new Row("AaaAuthorizedRole");
                authRoleRow1.set("ACCOUNT_ID", accRow.get("ACCOUNT_ID"));
                authRoleRow1.set("ROLE_ID", AuthUtil.getRoleId("Staff"));
                dobj.addRow(authRoleRow1);

                AuthUtil.createUserAccount(dobj);

                jo.put("status", "Success");
                out.println(jo);
            }
            catch(PasswordException pe)
            {
                jo.put("status", "Failed");
                out.println(jo);
                pe.printStackTrace();
            }
            catch(DataAccessException dae)
            {
                jo.put("status", "Failed");
                out.println(jo);
                dae.printStackTrace();
            }
            catch(Exception e)
            {
                jo.put("status", "Failed");
                out.println(jo);
                e.printStackTrace();
            }

        }
        catch(Exception e){
            PrintWriter out = response.getWriter();
            out.println(e);
        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        Add(request, response);
    }
}