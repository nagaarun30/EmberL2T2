import com.adventnet.ds.query.*;
import com.adventnet.mfw.bean.BeanUtil;
import com.adventnet.persistence.*;
import org.json.*;

import java.io.*;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.servlet.*;
import javax.servlet.http.*;

public class getcharacterbyid extends HttpServlet {
    public void getcharacter(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html");
        try {
            PrintWriter out = response.getWriter();
            Criteria criteria = new Criteria(new Column("Characters", "CID"), request.getParameter("cid"), QueryConstants.EQUAL);
            DataObject data = DataAccess.get("Characters", criteria);
            Iterator it = data.getRows("Characters");
            JSONArray ja = new JSONArray();

            while (it.hasNext()) {
                Row r = (Row) it.next();
                String cid = r.get("CID").toString();
                String name = (String) r.get("NAME");
                String alias = (String) r.get("ALIAS");
                String tagline = (String) r.get("TAGLINE");
                int height = (int) r.get("HEIGHT");
                int weight = (int) r.get("WEIGHT");
                String image = null;
                String fullimage = null;
                Criteria c = new Criteria(new Column("CharactersImage", "CID"), cid, QueryConstants.EQUAL);
                DataObject dataObject1 = DataAccess.get("CharactersImage", c);
                Row r1 = dataObject1.getFirstRow("CharactersImage");
                if (r1 != null) {
                    image = (String) r1.get("IMAGE");
                    fullimage = (String) r1.get("FULLIMAGE");
                }



                JSONObject jo = new JSONObject();
                jo.put("cid", cid);
                jo.put("name", name);
                jo.put("alias", alias);
                jo.put("tagline", tagline);
                jo.put("height", height);
                jo.put("weight", weight);
                jo.put("image", image);
                jo.put("fullimage", fullimage);

                ja.put(jo);
            }
            out.println(ja);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        getcharacter(request, response);
    }
}