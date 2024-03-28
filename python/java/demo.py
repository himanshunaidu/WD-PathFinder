import jpype
import jpype.imports
from jpype.types import *

class_path = "C:/E Drive/AI DRG Code Base/WD-PathFinder/rdf-entity-path/target/classes"
jpype.startJVM("C:/Program Files/Java/jdk-11/bin/server/jvm.dll", '-ea', f"-Djava.class.path={class_path}", convertStrings=False)

from java.lang import System
from java.io import PrintStream, File

original = System.out
System.out.println("Hello")
System.setOut(PrintStream(File("NUL"))) # NUL for windows, /dev/null for unix
System.out.println("Big")
System.setOut(original)
System.out.println("Boy")

# Shutdown the JVM
jpype.shutdownJVM()