/**
 * 
 */
/**
 * @author zhengkaiming
 *
 */
package model;

import java.io.File;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import smile.Network;

public class InfluenceDiagram {

	 private Network net;
	 private static final int VALUE_NODE_TYPE = 8;
	 
	 
	 public InfluenceDiagram(){
		
	     net = new Network();
	     
		 String xdslFileIn = (new File("/Users/zhengkaiming/Documents/workspace/countrySelector/", "CountrySelect.xdsl")).toString();
	     net.readFile(xdslFileIn);
		 
	 }
	 
	 /**
	  * calculate the expectedUtility of each country and help the user decide which country they should go
	  * @param paraMap
	  * @return the country 
	  */
	 public String[][] selector(Map<String,String[]> paraMap) {       
        // initial all the value nodes
        Map<String, double[]> valueOfNodes = initValueOfNode();
        
        // initial all the value of weight of each value 
        Map<String, Double> valueOfNodeWeights = initValueOfNodeWeights();
        
        
        /*
         * Update the definitions hashmap with the value from the user
         * the key like "v-Security_value-0" 0 means safe, v means value
         * for example, paraMap.put(v-Security_value-1, 73.2)
         * the value in valueOfNodes needs to set to 73.2
         * 
         * if the key like "w-Security_value", w means weight
         * for example, paraMap.put(w-Security_value, 17)
         * the weight is 17
         */
        Set<String> keys=paraMap.keySet(); 
        for (String key : keys) {
        		String[] info = key.split("-");
            	
            	String title=info[1];
            	if(info[0].equals("v")){
    	            int indexOfValue=Integer.parseInt(info[2]);
    	            double posibilityValue= Double.parseDouble(paraMap.get(key)[0]);
    	            valueOfNodes.get(title)[indexOfValue] = posibilityValue;
            	}else if(info[0].equals("w")){
            		 double curWeight = Double.parseDouble(paraMap.get(key)[0]);
            		 valueOfNodeWeights.remove(title);
            		 valueOfNodeWeights.put(title,curWeight);
            	}
        	
        	
        	
            
        }
        
        //put these updated values in the network
        for (String key : valueOfNodes.keySet()) {
            net.setNodeDefinition(key, valueOfNodes.get(key));
        }
        
        //update the weight of each node in result
        updateWeight(net.getParentIds("Result"), valueOfNodeWeights);
        String[][] result=getCountry(3);
        return result;
	    }
	 
	 /*
	     *  17 means decision node, 18 means chance node, 8 means value node, 520 means ALU node
	     *  Type of Node        Name
      *  17              Country Select
			18               Tuition Fee
			18             Development Degree
			18               Cost of Living
			18                 Climate
			18                  Major
			18             Career prospects 
			18                Immigration
			18                 Security
			8                Living_value
			8              Development_value
			8                Climate_value
			8                Security_value
			8                Tuition_value
			8              Immigration_value
			8                Major_value
			8                Career_value
			520                 Result
      */
	 
	 
	 //initial all the value nodes and initial their definitions as 0 
	 private Map<String, double[]> initValueOfNode(){ 
		 Map<String, double[]> valueOfNodes = new HashMap<String, double[]>(); 
	        for (int i = 0; i < net.getNodeCount(); i++) {
	            int curNodeType = net.getNodeType(i);
	            String curNodeName = net.getNodeName(i);
	            if (curNodeType == VALUE_NODE_TYPE) {
	            	double[] curNodeDefinition = net.getNodeDefinition(curNodeName);
	                valueOfNodes.put(curNodeName, curNodeDefinition);
	            }
	        }
	     //net.updateBeliefs();
		 return valueOfNodes;
	 }
	 
	 //initial all the value of weight of each value as 1
     // like the weight of Security_Value as 1.0
	 private Map<String, Double> initValueOfNodeWeights(){
		 Map<String, Double> valueOfNodeWeights = new HashMap<String, Double>();
	        String[] networkValueNodes = net.getParentIds("Result");
	        for (int i = 0; i < networkValueNodes.length; i++) {
	        	valueOfNodeWeights.put(networkValueNodes[i], 50.0);
	        }
		 return valueOfNodeWeights;
	 }
	 //Set total_value with right weights
	 private void updateWeight(String[] networkValueNodes, Map<String, Double> valueOfNodeWeights){
		    double[] total_value_definition = new double[networkValueNodes.length];
	        for (int i = 0; i < networkValueNodes.length; i++) {
	            String curNetworkValueNode = networkValueNodes[i];
	            total_value_definition[i] = valueOfNodeWeights.get(curNetworkValueNode);
	            
	        }
	        net.setNodeDefinition("Result", total_value_definition);
	        
	        net.updateBeliefs();
	        
	 }
	 
	 //get the first num results of country
	 private String[][] getCountry(int num){
		    //0 means the Country_Select
	        //output each country and its expectedUtility
	        List<Decision> decisions = new ArrayList<Decision>();
	        for(int i=0;i<net.getOutcomeCount(0);i++){
		    	String country = net.getOutcomeId(0, i); 
	            double expectedUtility = net.getNodeValue("Result")[i];
	            Decision decision = new Decision(country,expectedUtility);
	            decisions.add(decision);
		    }
	        
	        //output the most suitable country which expectedUtility is the biggest
	        Collections.sort(decisions);
	        //double s=decisions.get(0).utility;
	        String[][] result=new String[num][2];
	        DecimalFormat df=new DecimalFormat("#.00");
	        for(int i=0;i<num;i++){
	        	result[i][0]=decisions.get(i).country;
	        	result[i][1]=df.format(decisions.get(i).expectedUtility);
	        	
	        }
			return result;
	 }
	 
	 //build a data structure decision used to save the country and its utility
	 public class Decision implements Comparable<Decision> {
	        public String country;
	        public double expectedUtility;
	        public Decision(String country, double expectedUtility) {
	            this.country = country;
	            this.expectedUtility = expectedUtility;
	        }
	        // Sort Descending
	        public int compareTo(Decision d) {
	            if (this.expectedUtility > d.expectedUtility) {
	                return -1;
	            } else if (this.expectedUtility == d.expectedUtility) {
	                return 0;
	            } else {
	                return 1;
	            }
	        }
	    }	
}