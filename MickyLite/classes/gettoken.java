
import com.adventnet.authentication.AAAACCOUNT;
import com.adventnet.authentication.PasswordException;
import com.adventnet.authentication.util.AuthUtil;
import com.adventnet.mfw.bean.BeanUtil;
import com.adventnet.persistence.*;
import com.adventnet.ds.query.*;
import org.json.*;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


public class gettoken extends HttpServlet {

    String Email = "";
    String Token = "";
    public void Add(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
            Email = request.getParameter("email");
            Token = request.getParameter("token");
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            Criteria criteria = new Criteria(new Column("LoginDetails", "EMAIL"), Email, QueryConstants.EQUAL);
            DataObject dobj = DataAccess.get("LoginDetails", criteria);
            Row row = dobj.getFirstRow("LoginDetails");
            String token = row.get("TOKEN").toString();
            JSONObject jo = new JSONObject();
            jo.put("token", token);
            out.println(jo);
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