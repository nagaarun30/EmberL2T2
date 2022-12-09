
import com.adventnet.authentication.AAAACCOUNT;
import com.adventnet.authentication.PasswordException;
import com.adventnet.authentication.util.AuthUtil;
import com.adventnet.mfw.bean.BeanUtil;
import com.adventnet.persistence.*;

import java.io.*;
import java.sql.Date;
import java.time.LocalDate;
import javax.servlet.*;
import javax.servlet.http.*;


public class add extends HttpServlet {

    String Name = "";
    String FName = "";
    String LName = "";
    String Email = "";
    String Roll = "";
    String Password = "";
    String Type = "Student";
    String Gender = "";
    Date DOB = null;
    Date DOJ = null;
    Date DOG = null;
    LocalDate date = null;
    String Address = "";
    String Phone = "";
    String Department = "";
    String Year = "";
    String Semester = "";
    String Section = "";

    public void Add(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try{
            FName = request.getParameter("fname");
            LName = request.getParameter("lname");
            Name = FName + " " + LName;
            Roll = request.getParameter("roll");
            Email = request.getParameter("email");
            Password = request.getParameter("password");

            Gender = request.getParameter("gender");
            DOB = Date.valueOf(request.getParameter("dob"));
            DOJ = new Date(System.currentTimeMillis());
            DOG = new Date(System.currentTimeMillis());
            date = DOG.toLocalDate().plusYears(4);
            DOG = Date.valueOf(date);

            Address = request.getParameter("address");
            Phone = request.getParameter("phone");
            Department = request.getParameter("department");
            Year = request.getParameter("year");
            Semester = request.getParameter("semester");
            Section = request.getParameter("section");




            response.setContentType("text/html");
            Row r = new Row ("Login");
            r.set("NAME", Name);
            r.set("ROLL", Roll);
            r.set("EMAILID", Email);
            r.set("TYPE", Type);
            r.set("PASS", Password);
            DataObject dataObject = new WritableDataObject();
            dataObject.addRow(r);
            DataAccess.add(dataObject);
            Row r1 = new Row ("StudentDetails");
            r1.set("STU_FNAME", FName);
            r1.set("STU_LNAME", LName);
            r1.set("STU_ROLL", Roll);
            r1.set("GENDER", Gender);
            r1.set("DOB", DOB);
            r1.set("DOJ", DOJ);
            r1.set("DOG", DOG);
            r1.set("ADDRESS", Address);
            r1.set("PHONE", Phone);
            r1.set("DEPARTMENT", Department);
            r1.set("YEAR", Year);
            r1.set("SEMESTER", Semester);
            r1.set("SECTION", Section);
            DataObject dataObject1 = new WritableDataObject();
            dataObject1.addRow(r1);
            DataAccess.add(dataObject1);

            String file = "C:\\AdventNetMickeyLite\\AdventNet\\MickeyLite\\webapps\\StudentMarks\\src\\students.csv";
            FileWriter fw = new FileWriter(file, true);
            BufferedWriter bw = new BufferedWriter(fw);
            PrintWriter pw = new PrintWriter(bw);
            pw.println(" "+ "," +Roll + "," + FName + "," + LName + "," + Email + "," + Password + "," + DOB + "," + Gender + "," + DOJ + "," + DOG + "," + Department + "," + Year + "," + Semester + "," + Section + "," + Address + "," + Phone);
            pw.flush();
            pw.close();
            bw.close();
            fw.close();

            Row r2 = new Row ("SemesterMarks");
            r2.set("STU_ROLL", Roll);
            r2.set("SemesterNo", "1");
            Row r11 = new Row ("SemesterMarks");
            r11.set("STU_ROLL", Roll);
            r11.set("SemesterNo", "2");
            Row r12 = new Row ("SemesterMarks");
            r12.set("STU_ROLL", Roll);
            r12.set("SemesterNo", "3");
            Row r13 = new Row ("SemesterMarks");
            r13.set("STU_ROLL", Roll);
            r13.set("SemesterNo", "4");
            Row r14 = new Row ("SemesterMarks");
            r14.set("STU_ROLL", Roll);
            r14.set("SemesterNo", "5");
            Row r15 = new Row ("SemesterMarks");
            r15.set("STU_ROLL", Roll);
            r15.set("SemesterNo", "6");
            Row r16 = new Row ("SemesterMarks");
            r16.set("STU_ROLL", Roll);
            r16.set("SemesterNo", "7");
            Row r17 = new Row ("SemesterMarks");
            r17.set("STU_ROLL", Roll);
            r17.set("SemesterNo", "8");
            DataObject dataObject2 = new WritableDataObject();
            dataObject2.addRow(r2);
            dataObject2.addRow(r11);
            dataObject2.addRow(r12);
            dataObject2.addRow(r13);
            dataObject2.addRow(r14);
            dataObject2.addRow(r15);
            dataObject2.addRow(r16);
            dataObject2.addRow(r17);
            DataAccess.add(dataObject2);

            String file1 = "C:\\AdventNetMickeyLite\\AdventNet\\MickeyLite\\webapps\\StudentMarks\\src\\StudentMarks.csv";
            FileWriter fw1 = new FileWriter(file1, true);
            BufferedWriter bw1 = new BufferedWriter(fw1);
            PrintWriter pw1 = new PrintWriter(bw1);
            String line = Roll + "," + "1" + "," + "0.0" + "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0";
            String line1 = Roll + "," + "2" + "," + "0.0" + "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0";
            String line2 = Roll + "," + "3" + "," + "0.0" + "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0";
            String line3 = Roll + "," + "4" + "," + "0.0" + "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0";
            String line4 = Roll + "," + "5" + "," + "0.0" + "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0"+ "," + "0.0";

            pw1.println(line);
            pw1.println(line1);
            pw1.println(line2);
            pw1.println(line3);
            pw1.println(line4);
            pw1.flush();
            pw1.close();
            bw1.close();
            fw1.close();



            Row r3 = new Row ("SemesterCourses");
            r3.set("STU_ROLL", Roll);
            r3.set("SemesterNo", "1");
            Row r4 = new Row ("SemesterCourses");
            r4.set("STU_ROLL", Roll);
            r4.set("SemesterNo", "2");
            Row r5 = new Row ("SemesterCourses");
            r5.set("STU_ROLL", Roll);
            r5.set("SemesterNo", "3");
            Row r6 = new Row ("SemesterCourses");
            r6.set("STU_ROLL", Roll);
            r6.set("SemesterNo", "4");
            Row r7 = new Row ("SemesterCourses");
            r7.set("STU_ROLL", Roll);
            r7.set("SemesterNo", "5");
            Row r8 = new Row ("SemesterCourses");
            r8.set("STU_ROLL", Roll);
            r8.set("SemesterNo", "6");
            Row r9 = new Row ("SemesterCourses");
            r9.set("STU_ROLL", Roll);
            r9.set("SemesterNo", "7");
            Row r10 = new Row ("SemesterCourses");
            r10.set("STU_ROLL", Roll);
            r10.set("SemesterNo", "8");
            DataObject dataObject3 = new WritableDataObject();
            dataObject3.addRow(r3);
            dataObject3.addRow(r4);
            dataObject3.addRow(r5);
            dataObject3.addRow(r6);
            dataObject3.addRow(r7);
            dataObject3.addRow(r8);
            dataObject3.addRow(r9);
            dataObject3.addRow(r10);
            DataAccess.add(dataObject3);


            String file2 = "C:\\AdventNetMickeyLite\\AdventNet\\MickeyLite\\webapps\\StudentMarks\\src\\StudentsCourses.csv";
            FileWriter fw2 = new FileWriter(file2, true);
            BufferedWriter bw2 = new BufferedWriter(fw2);
            PrintWriter pw2 = new PrintWriter(bw2);
            String line5 = Roll + "," + "1" + "," + "" + "," + ""+ "," + ""+ "," + ""+ "," + ""+ "," + "";
            String line6 = Roll + "," + "2" + "," + "" + "," + ""+ "," + ""+ "," + ""+ "," + ""+ "," + "";
            String line7 = Roll + "," + "3" + "," + "" + "," + ""+ "," + ""+ "," + ""+ "," + ""+ "," + "";
            String line8 = Roll + "," + "4" + "," + "" + "," + ""+ "," + ""+ "," + ""+ "," + ""+ "," + "";
            String line9 = Roll + "," + "5" + "," + "" + "," + ""+ "," + ""+ "," + ""+ "," + ""+ "," + "";

            pw2.println(line5);
            pw2.println(line6);
            pw2.println(line7);
            pw2.println(line8);
            pw2.println(line9);
            pw2.flush();
            pw2.close();
            bw2.close();
            fw2.close();

            PrintWriter out = response.getWriter();


            try {

                String loginName = Email;
                String firstName = FName;
                String middleName = "";
                String lastName = LName;
                String serviceName = "System";
                String accAdminProfile = "Profile 1";
                String password = Password;
                String passwordProfile = "Profile 1";

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
                authRoleRow1.set("ROLE_ID", AuthUtil.getRoleId("Student"));
                dobj.addRow(authRoleRow1);

                AuthUtil.createUserAccount(dobj);

                out.println("User Created Sucessfully!!!");
            }
            catch(PasswordException pe)
            {
                out.println("User creation failed!!!");
                pe.printStackTrace();
            }
            catch(DataAccessException dae)
            {
                out.println("User creation failed!!!");
                dae.printStackTrace();
            }
            catch(Exception e)
            {
                out.println("User creation failed!!!");
                e.printStackTrace();
            }


            out.println("Record Added Successfully");
            response.sendRedirect("stahome.html");
            out.println(dataObject);
            out.println(dataObject1);

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