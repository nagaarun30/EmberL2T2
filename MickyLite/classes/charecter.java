import java.io.*;
import java.sql.Date;
import java.time.LocalDate;
import javax.servlet.*;
import javax.servlet.http.*;
import com.adventnet.mfw.bean.BeanUtil;
import com.adventnet.persistence.*;

public class charecter extends HttpServlet {
    String Name[] = {"IRON MAN","CAPTAIN AMERICA","THOR","HULK","BLACK WIDOW"};
    String Alias[] = {"TONY STARK","STEVE ROGERS","THOR ODINSON","BRUCE BANNER","NATASHA ROMANOFF"};
    String Tagline[] = {
            "Genius, Billionaire, Playboy, Philanthropist",
            "Super Soldier",
            "God of Thunder",
            "Big Green Rage Machine",
            "Guns Blazing"};
    int Height[] = {6, 6, 6, 8, 5};
    int weight[] = {200, 200, 1000, 1000, 100};
    String image[] = {
            "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_cut_mob_01.jpg",
            "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_com_cut_mob_01.jpg",
            "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_cut_mob_01.jpg",
            "https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_cut_mob_01.jpg",
            "https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_cut_mob_01.jpg"
    };

    public void Add(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        for (int i = 0; i<5; i++){
            try{
                Row row = new Row("Characters");
                row.set("NAME", Name[i]);
                row.set("ALIAS", Alias[i]);
                row.set("TAGLINE", Tagline[i]);
                row.set("HEIGHT", Height[i]);
                row.set("WEIGHT", weight[i]);
                row.set("IMAGE", image[i]);

                DataObject data = new WritableDataObject();
                data.addRow(row);
                DataAccess.add(data);
            }catch(Exception e){
                e.printStackTrace();
            }
            out.println("<html><body>");
            out.println("<h1>Character Added</h1>");
            out.println("<p>Name: " + Name[i] + "</p>");
            out.println("<p>Alias: " + Alias[i] + "</p>");
            out.println("<p>Tagline: " + Tagline[i] + "</p>");
            out.println("<p>Height: " + Height[i] + "</p>");
            out.println("<p>Weight: " + weight[i] + "</p>");
            out.println("<p>Image: " + image[i] + "</p>");
            out.println("<br><br>");
            out.println("</body></html>");
        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        Add(request, response);
    }
}