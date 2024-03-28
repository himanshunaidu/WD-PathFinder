package com.rdfpath.graph.main.experiments;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;

import com.rdfpath.graph.model.GraphComp;
import com.rdfpath.graph.model.IGraph;
import com.rdfpath.graph.wrapper.GraphWrapperTimeTestOptMem;

public class GetPaths {
	public static void main (String[] args) throws IOException {
		System.setOut(outputFile("output.txt"));
		String paths = GetPaths.getPaths();
	}
	
	public static String getPaths() throws IOException {
		String path = "subsets/subset100000000_compressed.gz";
		int maxNodeId = 100000000; //
		int maxSecondsSearch = 99;
		IGraph graph = new GraphComp(path,true,maxNodeId); // filepath,isGz,maxNodeID
		GraphWrapperTimeTestOptMem nGW = new GraphWrapperTimeTestOptMem(graph,maxSecondsSearch);
		
		int[] a = {2,405}; // Earth, Moon
		nGW.search(a, 3, 10); // array of nodeIDs, maxSize of paths, max quantity of neighbors for intermediate nodes
		return "This worked";
	}
	
	public static PrintStream outputFile(String name) throws FileNotFoundException {
       return new PrintStream(new BufferedOutputStream(new FileOutputStream(name)), true);
   }
}
