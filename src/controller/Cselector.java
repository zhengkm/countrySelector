package controller;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.InfluenceDiagram;

/**
 * Servlet implementation class Cselector
 */
@WebServlet("/Cselector")
public class Cselector extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map<String, String[]> paraMap = request.getParameterMap();
		paraMap=request.getParameterMap();
		InfluenceDiagram id=new InfluenceDiagram();
		HttpSession session = request.getSession();
		String[][] de=id.selector(paraMap);
		session.setAttribute("decision", de);
		request.getRequestDispatcher("/static/result.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
			Map<String, String[]> paraMap = request.getParameterMap();
			paraMap=request.getParameterMap();
			InfluenceDiagram id=new InfluenceDiagram();
			HttpSession session = request.getSession();
			String[][] de=id.selector(paraMap);
			session.setAttribute("decision", de);
			request.getRequestDispatcher("/static/result.jsp").forward(request, response);
		
		
		
	}

}
