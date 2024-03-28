import jpype
import jpype.imports
from jpype import JClass, JString, java
from jpype.types import *
import os
import sys

# Start the JVM
# class_path = "C:/E Drive/AI DRG Code Base/WD-PathFinder/rdf-entity-path/src/main/java"
# class_path = "C:/E Drive/AI DRG Code Base/WD-PathFinder/rdf-entity-path/target/classes/com/rdfpath/graph/main/experiments"
class_path = "C:/E Drive/AI DRG Code Base/WD-PathFinder/rdf-entity-path/target/classes"
jpype.startJVM("C:/Program Files/Java/jdk-11/bin/server/jvm.dll", '-ea', f"-Djava.class.path={class_path}")
# jpype.startJVM()


# Access your Java class 
curr_path = os.getcwd()
os.chdir("C:/E Drive/AI DRG Code Base/WD-PathFinder/rdf-entity-path")
JavaClass = JClass("com.rdfpath.graph.main.experiments.GetPaths")
# JavaClass = JClass("GetPaths")
os.chdir(curr_path)

# Use the class
java_instance = JavaClass()
result = java_instance.getPaths()
print(result)

# Shutdown the JVM
jpype.shutdownJVM()