var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "About this Book",
  "body": " About this Book  Engineering Statics: Open and Interactive is a free, open-source textbook for anyone who wishes to learn more about vectors, forces, moments, static equilibrium, and the properties of shapes. Specifically, it is appropriate as a textbook for Engineering Mechanics: Statics, the first course in the Engineering Mechanics series offered in most university-level engineering programs.  This book's content should prepare you for subsequent classes covering Engineering Mechanics: Dynamics and Mechanics of Materials. At its core, Engineering Statics provides the tools to solve static equilibrium problems for rigid bodies. The additional topics of resolving internal loads in rigid bodies and computing area moments of inertia are also included as stepping stones for later courses. We have endeavored to write in an approachable style and provide many questions, examples, and interactives for you to engage with and learn from.   Feedback  Feedback and suggestions can be provided directly to the lead author Dan Baker via email at dan.baker@colostate.edu , by clicking the feedback button in the html footer. When reporting errors, please include a bit of the surrounding text to help locate the problem area in the source. The is a good place to ask the authors and users questions about the book. Please join the group and say Hi if you are using the book for teaching purposes.    Access  The entire book is available for free as an interactive online ebook at . While the interactive version works best on larger screens, it will also work smartphones but with some limitations due to limited screen width. A non-interactive PDF version, suitable for printing or offline reading on a tablet or computer, is available at . The PDF is searchable and easy to navigate using embedded links.  The source files for this book are available on GitHub at .    License  Engineering Statics: Open and Interactive is licensed under a Creative Commons Attribution-Non Commercial-Share Alike 4.0 International License . You are free to download, use, and print this work as you wish as long as your use is not primarily intended for or directed toward commercial advantage or monetary compensation. You can also modify the text as much as you like (for example to create a custom edition for your students), as long as you attribute the parts of the book you use to the authors. Please share your improvements with the authors!  All the GeoGebra content found in the book is licensed under a Creative Commons Attribution-Non Commercial-Share Alike 3.0 International License with more detailed information found at    End of Chapter exercises  The randomized end-of-chapter exercises were made using the open-source assessment system and for the dynamic diagrams. Exercises in the can be freely remixed into your own homework sets or online exams using the . You can also use the editor to write new questions or modify existing ones.  The exercises can be integrated into your institution's Virtual Learning Environment to set deadlines and automatically record grades. See the for more information. To fully take advantage of all the features, you may need the support of your institution's IT department to install the .  Please ask questions about Numbas integration and share any good problems you write with the Engineering Statics Group.    On the Cover  Photo of the San Francisco Oakland Bay Bridge and city skyline, taken from Yerba Buena Island by Artur Westergren.  Image source:   "
},
{
  "id": "acknowledgement",
  "level": "1",
  "url": "acknowledgement.html",
  "type": "Preface",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  This book is the vision of a handful of instructors who wanted to create a free and open Engineering Statics textbook filled with dynamic, interactive diagrams to encourage visualization and engineering intuition.  Dr. Baker brought together a team of volunteers from large public universities, small private colleges, and community colleges across the United States to write the text and create the interactive elements. Some content was adapted with permission from Jacob Moore's Mechanics Map - Open Textbook Project . . After two years of development the book was released to the public in 2020.  The book continues to evolve thanks to the contributions, suggestions, and corrections made by users of the text, both professors and students. The original authors are listed below, and others who have contributed are acknowledged in the source code on GitHub.     Daniel W. Baker  Colorado State University  Project lead, chapter author, and interactive developer    Devin Berg  University of Wisconsin - Stout  Chapter author    Andy Guyader  Cal Poly, San Luis Obispo  Chapter author    William Haynes  Massachusetts Maritime Academy  Chapter author, interactive developer, and PreTeXt lead    Erin Henslee  Wake Forest University  Chapter author    Anna Howard  North Carolina State University  Chapter author    James Lord  Virginia Tech  Chapter author    Randy Mondragon  Colorado State University  Interactive developer    Jacob Moore  Penn State University Mont Alto  Chapter author    Scott Bevill  Colorado Mesa University  Chapter reviewer    Eric Davishahl  Whatcom Community College  Chapter reviewer    Joel Lanning  University of California, Irvine  Chapter reviewer    Richard Pugsley  Tidewater Community College  Chapter reviewer    The book was supported by funding from the Colorado Department of Higher Education, the Colorado State University Digital Learning Initiative, and the Colorado State University Libraries.  "
},
{
  "id": "newtons-laws",
  "level": "1",
  "url": "newtons-laws.html",
  "type": "Section",
  "number": "1.1",
  "title": "Newton’s Laws of Motion",
  "body": " Newton's Laws of Motion    What are the two types of motion?  What three relationships do Newton's laws of motion define?  What are physical examples for each of Newton's three laws of motion?     The English scientist Sir Issac Newton established the foundation of mechanics in 1687 with his three laws of motion, which describe the relation between forces, objects and motion. Motion can be separated into two types:   Translation where a body changes position without changing its orientation in space, and    Rotation where a body spins about an axis fixed in space, without changing its average position.     Some moving bodies are purely translating, others are purely rotating, and many are doing both. Conveniently, we can usually separate translation and rotation and analyze them individually with independent equations.  Newton's three laws and their implications with respect to translation and rotation are described below.    Newton's 1st Law  Newton's first law states that   an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force .   This law, also sometimes called the law of inertia, tells us that bodies maintain their current velocity unless a net force is applied to change it. In other words, an object at rest it will remain at rest and a moving object will hold its current speed and direction unless an unbalanced force causes a velocity change. Remember that velocity is a vector quantity that includes both speed and direction, so an unbalanced force may cause an object to speed up, slow down, or change direction.    This rock is at rest with zero velocity and will remain at rest until a unbalanced force causes it to move.   A large rock in a field. This rock is at rest with zero velocity and will remain at rest until a unbalanced force causes it to move.   CC-BY-SA 2.0.  Liz Gray       In deep space, where friction and gravitational forces are negligible, an object moves with constant velocity; near a celestial body gravitational attraction continuously changes its velocity.   An artist rendering of a spacecraft near the lunar surface. In the absence of forces in space, this space capsule will maintain its current velocity.   CC-0  NASA      Newton's first law also applies to angular velocities, however instead of force, the relevant quantity which causes an object to rotate is called a torque by physicists, but usually called a moment by engineers. A moment, as you will learn in , is the rotational tendency of a force. Just as a force will cause a change in linear velocity, a moment will cause a change in angular velocity. This can be seen in things like tops, flywheels, stationary bikes, and other objects that spin on an axis when a moment is applied, but eventually stop because of the opposite moment produced by friction.     A spinning top demonstrates rotary motion.   In image of a spinning top demonstrates rotary motion.   Carrotmadman6 from Mauritius (DSCN8281)  CC-BY-2.0  Wikimedia Commons     In the absence of friction this top would spin forever, but the small frictional moment exerted at the point of contact with the table will eventually bring it to a stop.     Newton's 2nd Law  Newton's second law is usually succinctly stated with the familiar equation  where is net force, is mass, and is acceleration.  You will notice that the force and the acceleration are in bold face. This means these are vector quantities, having both a magnitude and a direction. Mass on the other hand is a scalar quantity, which has only a magnitude. This equation indicates that a force will cause an object to accelerate in the direction of the net force, and the magnitude of the acceleration will be proportional to the net force but inversely proportional to the mass of the object.  When studying Statics we are only concerned with bodies which are not accelerating which simplifies things considerably. When an object is not accelerating , which implies that it is either at rest or moving with a constant velocity. With this restriction Newton's Second Law for translation simplifies to  where is read as the sum of the forces and used to indicate the net force acting on the object.  Newton's second law for rotational motions is similar  . This equation states that a net moment acting on an object will cause an angular acceleration proportional to the net moment and inversely proportional to , a quantity known as the mass moment of inertia. Mass moment of inertia for rotational acceleration is analogous to ordinary mass for linear acceleration. We will have more to say about the moment of inertia in .  Again, we see that the net moment and angular acceleration are vectors, quantities with magnitude and direction. The mass moment of inertia, on the other hand, is a scalar quantity and has only a magnitude. Also, since Statics deals only with objects which are not accelerating , they will always be at rest or rotating with constant angular velocity. With this restriction Newton's second law implies that the net moment on all static objects is zero.     Newton's 3rd Law  Newton's Third Law states   For every action, there is an equal and opposite reaction.   The actions and reactions Newton is referring to are forces . Forces occur whenever one object interacts with another, either directly like a push or pull, or indirectly like magnetic or gravitational attraction. Any force acting on one body is always paired with another equal-and-opposite force acting on some other body.   The earth exerts a gravitational force on the moon, and the moon exerts an equal and opposite force on the earth.   An image of the earth and the moon. Red arrows are drawn from the center of each sphere towards the center of the other sphere. The earth exerts a gravitational force on the moon, and the moon exerts an equal and opposite force on the earth.   BY-SA-3.0      These equal-and-opposite pairs can be confusing, particularly when there are multiple interacting bodies. To clarify, we always begin solving statics problems by drawing a free-body diagram a sketch where we isolate a body or system of interest and identify the forces acting on it, while ignoring any forces exerted by it on interacting bodies.  Consider the situation in . Diagram (a) shows a book resting on a table supported by the floor. The weights of the book and table are placed at their centers of gravity. To solve for the forces on the legs of the table, we use the free-body diagram in (b) which treats the book and the table as a single system and replaces the floor with the forces of the floor on the table. In diagram (c) the book and table are treated as independent objects. By separating them, the equal-and-opposite interaction forces of the book on the table and the table on the book are exposed.   Free-body diagrams are used to isolate objects and identify relevant forces and moments.      A Statics book rests on a table.   Dan Baker         The floor is \"removed\" so the system is the Statics book on the table. The weight of the Statics book is shown as W_statics going down, the weight of table is shown as W_table going down, the reaction force of the floor on the table is shown as F_floor going up on each table leg.   Dan Baker         The book is \"separated\" or \"isolated\" from the table. Now we see the force of the table on the book is F_table going up, and the force of the book on the table is F_book going down.   Dan Baker         This will be discussed further in and .   "
},
{
  "id": "newtons-laws-2",
  "level": "2",
  "url": "newtons-laws.html#newtons-laws-2",
  "type": "Key Questions",
  "number": "1.1",
  "title": "",
  "body": "  What are the two types of motion?  What three relationships do Newton's laws of motion define?  What are physical examples for each of Newton's three laws of motion?   "
},
{
  "id": "newtons-laws-3-1",
  "level": "2",
  "url": "newtons-laws.html#newtons-laws-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Translation Rotation "
},
{
  "id": "newtons-first-law-5-1",
  "level": "2",
  "url": "newtons-laws.html#newtons-first-law-5-1",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " This rock is at rest with zero velocity and will remain at rest until a unbalanced force causes it to move.   A large rock in a field. This rock is at rest with zero velocity and will remain at rest until a unbalanced force causes it to move.   CC-BY-SA 2.0.  Liz Gray     "
},
{
  "id": "newtons-first-law-5-2",
  "level": "2",
  "url": "newtons-laws.html#newtons-first-law-5-2",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " In deep space, where friction and gravitational forces are negligible, an object moves with constant velocity; near a celestial body gravitational attraction continuously changes its velocity.   An artist rendering of a spacecraft near the lunar surface. In the absence of forces in space, this space capsule will maintain its current velocity.   CC-0  NASA    "
},
{
  "id": "newtons-first-law-6",
  "level": "2",
  "url": "newtons-laws.html#newtons-first-law-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "torque moment "
},
{
  "id": "newtons-first-law-8-1",
  "level": "2",
  "url": "newtons-laws.html#newtons-first-law-8-1",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " A spinning top demonstrates rotary motion.   In image of a spinning top demonstrates rotary motion.   Carrotmadman6 from Mauritius (DSCN8281)  CC-BY-2.0  Wikimedia Commons    "
},
{
  "id": "newtons-second-law-8",
  "level": "2",
  "url": "newtons-laws.html#newtons-second-law-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mass moment of inertia. "
},
{
  "id": "newtons-third-law-4",
  "level": "2",
  "url": "newtons-laws.html#newtons-third-law-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forces "
},
{
  "id": "newtons-third-law-5",
  "level": "2",
  "url": "newtons-laws.html#newtons-third-law-5",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " The earth exerts a gravitational force on the moon, and the moon exerts an equal and opposite force on the earth.   An image of the earth and the moon. Red arrows are drawn from the center of each sphere towards the center of the other sphere. The earth exerts a gravitational force on the moon, and the moon exerts an equal and opposite force on the earth.   BY-SA-3.0     "
},
{
  "id": "newtons-third-law-6",
  "level": "2",
  "url": "newtons-laws.html#newtons-third-law-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "free-body diagram "
},
{
  "id": "table_book",
  "level": "2",
  "url": "newtons-laws.html#table_book",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " Free-body diagrams are used to isolate objects and identify relevant forces and moments.      A Statics book rests on a table.   Dan Baker         The floor is \"removed\" so the system is the Statics book on the table. The weight of the Statics book is shown as W_statics going down, the weight of table is shown as W_table going down, the reaction force of the floor on the table is shown as F_floor going up on each table leg.   Dan Baker         The book is \"separated\" or \"isolated\" from the table. Now we see the force of the table on the book is F_table going up, and the force of the book on the table is F_book going down.   Dan Baker       "
},
{
  "id": "Chapter_01-units",
  "level": "1",
  "url": "Chapter_01-units.html",
  "type": "Section",
  "number": "1.2",
  "title": "Units",
  "body": " Units    What are the similarities and differences between the commonly used unit systems?  How do you convert a value into different units?  When a problem mentions the pounds, does this mean pounds-force [lbf] or pounds-mass [lbm]?    Quantities used in engineering usually consist of a numeric value and an associated unit. The value by itself is meaningless. When discussing a quantity you must always include the associated unit, except when the correct unit is no units. The units themselves are established by a coherent unit system .  All unit system are based around seven base units, the important ones for Statics being mass, length, and time. All other units of measurement are formed by combinations of the base units. So, for example, acceleration is defined as length divided by time squared, so has units . Force is related to mass and acceleration by Newton's second law , so the units of force are .  In the United States several different unit systems are commonly used including the SI system, the British Gravitational system, and the English Engineering system.  The SI system, abbreviated from the French Système International (d'unités) is the modern form of the metric system. The SI system is the most widely used system of measurement worldwide.  In the SI system, the unit of force is the newton , abbreviated N, and the unit of mass is the kilogram , abbreviated kg. The base unit of time, used by all systems, is the second . Prefixes are added to unit names are used to specify the base-10 multiple of the original unit. One newton is equal to because of force applied to of mass causes the mass to accelerate at a rate of .  The British Gravitational system uses the foot as the base unit of distance, the second for time, and the slug for mass. Force is a derived unit called the pound-force , abbreviated or pound for short. One pound-force will accelerate a mass of one slug at , so . On earth, a 1 slug mass weighs .  The English Engineering system uses the pound-mass as the base unit of mass, where .  The acceleration of gravity remains the same as in the British Gravitational system, but a conversion factor is required to maintain unit consistency. The advantage of this system is that (on earth) weighs . It is important to understand that mass and weight are not the same thing, however. Mass describes how much matter an object contains, while weight is a force the effect of gravity on a mass.  You find the weight of an object from its mass by applying Newton's Second Law with the local acceleration of gravity . .   The gravitational constant varies up to about 0.5% across the earth's surface due to factors including latitude and elevation. On the moon, is about , and it's nearly zero in outer space.  Don't assume that always equals ! Always use the correct value of based on your location and unit system. However, in this course, unless otherwise stated, all objects are located on earth and the values in are applicable.   You can show that mass weighs on earth by first finding the weight with with , then applying the conversion factor .   shows the standard units of weight, mass, length, time, and gravitational acceleration in three unit systems.   Fundamental Units    Unit System  Force  Mass  Length  Time  (Earth)    SI  N  kg  m  s     British Gravitational  lbf  slug  ft  s     English Engineering  lbf  lbm  ft  s        How much does a bag of flour weigh?    A value in kg is a mass. Weight is a force.              How much does a bag of sugar weigh?    When someone says pounds they probably mean pounds-force .       The weight was given: . On earth, the mass is , or using the conversion fractor in .     Does 1 pound-mass equal 1 pound-force?  Of course not; they have completely different units!  Although a mass weighs on earth, pounds-mass and pounds-force are not equal . If you take a mass to the moon, its mass doesn't change, but it weighs significantly less than it does on earth. The same mass in deep space is weightless!   Awareness of units will help you prevent errors in your engineering calculations. You should always:  Pay attention to the units of every quantity in the problem. Forces should have force units, distances should have distance units,   Use the unit system given in the problem statement.  Avoid unit conversions when possible. If you must, convert given values to a consistent set of units and stick with them.  Check your work for unit consistency. You can only add or subtract quantities which have the same units. When multiplying or dividing quantities with units, multiply or divide the units as well. The units of quantities on both sides of the equals sign must be the same.  Develop a sense of the magnitudes of the units and consider your answers for reasonableness. A kilogram is about 2.2 times as massive as a pound-mass and a newton weighs about a quarter pound.  Be sure to include units with every answer.    "
},
{
  "id": "Chapter_01-units-2",
  "level": "2",
  "url": "Chapter_01-units.html#Chapter_01-units-2",
  "type": "Key Questions",
  "number": "1.2",
  "title": "",
  "body": "  What are the similarities and differences between the commonly used unit systems?  How do you convert a value into different units?  When a problem mentions the pounds, does this mean pounds-force [lbf] or pounds-mass [lbm]?   "
},
{
  "id": "Chapter_01-units-3",
  "level": "2",
  "url": "Chapter_01-units.html#Chapter_01-units-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit system "
},
{
  "id": "Chapter_01-units-12",
  "level": "2",
  "url": "Chapter_01-units.html#Chapter_01-units-12",
  "type": "Warning",
  "number": "1.2.1",
  "title": "",
  "body": " The gravitational constant varies up to about 0.5% across the earth's surface due to factors including latitude and elevation. On the moon, is about , and it's nearly zero in outer space.  Don't assume that always equals ! Always use the correct value of based on your location and unit system. However, in this course, unless otherwise stated, all objects are located on earth and the values in are applicable.  "
},
{
  "id": "units_table",
  "level": "2",
  "url": "Chapter_01-units.html#units_table",
  "type": "Table",
  "number": "1.2.2",
  "title": "Fundamental Units",
  "body": " Fundamental Units    Unit System  Force  Mass  Length  Time  (Earth)    SI  N  kg  m  s     British Gravitational  lbf  slug  ft  s     English Engineering  lbf  lbm  ft  s     "
},
{
  "id": "Chapter_01-units-16",
  "level": "2",
  "url": "Chapter_01-units.html#Chapter_01-units-16",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  How much does a bag of flour weigh?    A value in kg is a mass. Weight is a force.           "
},
{
  "id": "Chapter_01-units-17",
  "level": "2",
  "url": "Chapter_01-units.html#Chapter_01-units-17",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  How much does a bag of sugar weigh?    When someone says pounds they probably mean pounds-force .       The weight was given: . On earth, the mass is , or using the conversion fractor in .   "
},
{
  "id": "Chapter_01-units-18",
  "level": "2",
  "url": "Chapter_01-units.html#Chapter_01-units-18",
  "type": "Thinking Deeper",
  "number": "1.2.5",
  "title": "Does 1 pound-mass equal 1 pound-force?",
  "body": " Does 1 pound-mass equal 1 pound-force?  Of course not; they have completely different units!  Although a mass weighs on earth, pounds-mass and pounds-force are not equal . If you take a mass to the moon, its mass doesn't change, but it weighs significantly less than it does on earth. The same mass in deep space is weightless!  "
},
{
  "id": "Chapter_01-forces",
  "level": "1",
  "url": "Chapter_01-forces.html",
  "type": "Section",
  "number": "1.3",
  "title": "Forces",
  "body": " Forces    What are some of the fundamental types of forces used in statics?  Why do we often simplify distributed forces with equivalent forces?    Statics is a course about forces and we will have a lot to say about them. At its simplest, a force is a push or pull, but forces come from a variety of sources and occur in many different situations. As such we need a specialized vocabulary to talk about them. We are also interested in forces that cause rotation, and we have special terms to describe these too.  Some terms used to describe forces are given below; others will be defined as needed later in the book.  Point Forces , also called concentrated forces , are forces that act at a single point. Examples are the push you give to open a door, the thrust of a rocket engine, or the pull a the chain suspending a wrecking ball. Point forces are actually an idealization, because real forces always act over an area and not at a mathematical point. However, point forces are the easiest type to deal with computationally so we will usually represent other types of forces as equivalent concentrated forces.  Distributed forces are forces that are spread out over a line, area or volume. Steam pressure in a boiler and the weight of snow on a roof are examples of forces distributed over an area. Distributed forces are represented graphically by an array of force vectors.  Body forces are distributed forces acting over the volume of a body. The most common body force is the body's weight, but there are others including buoyancy and forces caused by electric and magnetic fields. Weight and buoyancy will be the only body forces we consider in this book.  In many situations, body forces are small in comparison to the other forces acting on the object, and as such may be neglected. In practice, the decision to neglect forces must be made on the basis of sound engineering judgment; however, in this course you should consider the weight in your analysis if the problem statement provides enough information to determine it, otherwise you may ignore it.  Loads are the forces which an object must support in order to perform its function. Loads can be either static or dynamic, however only static loads will be considered here. Forces which hold a loaded object in equilibrium or hold parts of an object together are not considered loads.  Reaction forces or simply reactions are the forces and moments which hold or constrain an object or mechanical system in equilibrium. They are called the reactions because they react when other forces on the system change. If the load on a system increases, the reaction forces will automatically increase in response to maintain equilibrium. Reaction forces are introduced in and reaction moments are introduced in .  Internal forces are forces which hold the parts an object or system together. Internal forces will be discussed in .  As an example of the various types of forces, consider a heavy crate being pulled by a rope across a rough surface.   Forces on a crate being pulled across a rough surface.     Pull - Concentrated force   A crate is shown with a point force pulling it toward the reader. It is on a rough surface.     Weight - Body force   The crate is shown with its weight represented as an array of downward force vectors distributed throughout.       Friction - Distributed force   The crate is shown with an array of horizontal force vectors acting on its lower surface to oppose the pull.     Normal Force - Distributed force   The crate is shown with an array of upward pointing force vectors acting on its lower surface to oppose the weight.       The pull of the rope and the weight of the crate are loads . The rope applies a force at a single point, so is a concentrated force . The force of the ground holding the crate in equilibrium is a reaction force . This force can be divided into two components: a tangential friction component which acts parallel to the ground and resists the pull of the cable, and a normal component which acts perpendicular to the bottom surface and supports the crate's weight. The normal and tangential components are distributed forces since they act over the bottom surface area. The weight is also a distributed force, but one that acts over the entire crate so it's considered a body force . For computational simplicity we usually model all these distributed forces as equivalent concentrated forces. This process is discussed in .  "
},
{
  "id": "Chapter_01-forces-2",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-2",
  "type": "Key Questions",
  "number": "1.3",
  "title": "",
  "body": "  What are some of the fundamental types of forces used in statics?  Why do we often simplify distributed forces with equivalent forces?   "
},
{
  "id": "Chapter_01-forces-5",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Point Forces concentrated forces "
},
{
  "id": "Chapter_01-forces-6",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Distributed forces "
},
{
  "id": "Chapter_01-forces-7",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Body forces "
},
{
  "id": "Chapter_01-forces-9",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Loads "
},
{
  "id": "Chapter_01-forces-10",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reaction forces reactions "
},
{
  "id": "Chapter_01-forces-11",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Internal forces "
},
{
  "id": "Chapter_01-forces-13",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-13",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Forces on a crate being pulled across a rough surface.     Pull - Concentrated force   A crate is shown with a point force pulling it toward the reader. It is on a rough surface.     Weight - Body force   The crate is shown with its weight represented as an array of downward force vectors distributed throughout.       Friction - Distributed force   The crate is shown with an array of horizontal force vectors acting on its lower surface to oppose the pull.     Normal Force - Distributed force   The crate is shown with an array of upward pointing force vectors acting on its lower surface to oppose the weight.      "
},
{
  "id": "Chapter_01-forces-14",
  "level": "2",
  "url": "Chapter_01-forces.html#Chapter_01-forces-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangential normal "
},
{
  "id": "Chapter_01-problem-solving",
  "level": "1",
  "url": "Chapter_01-problem-solving.html",
  "type": "Section",
  "number": "1.4",
  "title": "Problem Solving",
  "body": " Problem Solving    What are some strategies to practice selecting a tool from your problem-solving toolbox?  What is the basic problem-solving process for equilibrium?    Statics may be the first course you take where you are required to decide on your own how to approach a problem. Unlike your previous physics courses, you can't just memorize a formula and plug-and-chug to get an answer; there are often multiple ways to solve a problem, not all of them equally easy, so before you begin you need a plan or strategy. This seems to cause a lot of students difficulty.  The ways to think about forces, moments and equilibrium, and the mathematics used to manipulate them are like tools in your toolbox. Solving statics problems requires acquiring, choosing, and using these tools. Some problems can be solved with a single tool, while others require multiple tools. Sometimes one tool is a better choice, sometimes another. You need familiarity and practice to get skilled using your tools. As your skills and understanding improve, it gets easier to recognize the most efficient way to get a job done.  Struggling statics students often say things like:   I don't know where to start the problem.  It looks so easy when you do it.  If I only knew which equation to apply, I could solve the problem.   These statements indicate that the students think they know how to use their tools, but are skipping the planning step. They jump right to writing equations and solving for things without making much progress towards the answer, or they start solving the problem using a reasonable approach but abandon it in mid-stream to try something else. They get lost, confused and give up.  Choosing a strategy gets easier with experience. Unfortunately, the way you get that experience is to solve problems. It seems like a chicken and egg problem and it is, but there are ways around it. Here are some suggestions which will help you become a better problem-solver.  Get fluent with the math skills from algebra and trigonometry.  Do lots of problems, starting with simple ones to build your skills.  Study worked out solutions, however don't assume that just because you understand how someone else solved a problem that you can do it yourself without help.  Solve problems using multiple approaches. Confirm that alternate approaches produce the same results, and try to understand why one method was easier than the other.  Draw neat, clear, labeled diagrams.  Familiarize yourself with the application, assumptions, and terminology of the methods covered in class and the textbook.  When confused, identify what is confusing you and ask questions.    The majority of the topics in this book focus on equilibrium. The remaining topics are either preparing you for solving equilibrium problems or setting you up with skills that you will use in later classes. For equilibrium problems, the problem-solving steps are:  Read and understand the problem.  Identify what you are asked to find and what is given.  Stop, think, and decide on an strategy.  Draw a free-body diagram and define variables.  Apply the strategy to solve for unknowns and check solutions.     Write equations of equilibrium based on the free-body diagram.  Check if the number of equations equals the number of unknowns. If it doesn't, you are missing something. You may need additional free-body diagrams or other relationships.  Solve for unknowns.     Conceptually check solutions.    Using these steps does not guarantee that you will get the right solution, but it will help you be critical and conscious of your chosen strategies. This reflection will help you learn more quickly and increase the odds that you choose the right tool for the job.  "
},
{
  "id": "Chapter_01-problem-solving-2",
  "level": "2",
  "url": "Chapter_01-problem-solving.html#Chapter_01-problem-solving-2",
  "type": "Key Questions",
  "number": "1.4",
  "title": "",
  "body": "  What are some strategies to practice selecting a tool from your problem-solving toolbox?  What is the basic problem-solving process for equilibrium?   "
},
{
  "id": "Chapter_02-vectors",
  "level": "1",
  "url": "Chapter_02-vectors.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vectors",
  "body": " Vectors    How is a vector different than a scalar?  How do you identify the tip, tail, line of action, direction, and magnitude of any drawn vector?  What are the standard notations for vectors and scalars in this textbook?  What is the difference between the sense and orientation of a vector?     You can visualize a vector as an arrow pointing in a particular direction. The tip is the pointed end and the tail the trailing end. The tip and tail of a vector define a line of action . A line of action can be thought of as an invisible string along which a vector can slide. Sliding a vector along its line of action does not change its magnitude or its direction. Sliding a vector can be a handy way to simplify vector problems.   Vector Definitions     The standard notation for a vector uses the vector's name in bold font, or an arrow or bar above the vector's name. All three of these notations mean the same thing. Most printed works including this book will use the bold symbol to indicate vectors, but for handwritten work, you and your instructor will use the bar or arrow notation.  Force vectors acting on physical objects have a point of application , which is the point where the force is applied. Other vectors, such as moment vectors, are free vectors , which means that the point of application is not significant. Free vectors can be moved freely to any location as long as the magnitude and direction are maintained.  The vector's magnitude is a positive real number including units which describes the strength or intensity of the vector. Graphically a vector's magnitude is represented by the length of its vector arrow, and symbolically by enclosing the vector's symbol with vertical bars. This is the same notation as for the absolute value of a number. The absolute value of a number and the magnitude of a vector can both be thought of as a distance from the origin, so the notation is appropriate. By convention the magnitude of a vector is also indicated by the same letter as the vector, but in non-bold font.  By itself, a vector's magnitude is a scalar quantity, but it makes no sense to speak of a vector with a negative magnitude so vector magnitudes are always positive or zero. Multiplying a vector by -1 produces a vector with the same magnitude but pointing in the opposite direction.  Vector directions are described with respect to a coordinate system . A coordinate system is an arbitrary reference system used to establish the origin and the primary directions. Distances are usually measured from the origin, and directions from a primary or reference direction . You are probably familiar with the Cartesian coordinate system with mutually perpendicular , and axes and the origin at their intersection point.  Another way of describing a vector's direction is to specify its orientation and sense . Orientation is the angle the vector's line of action makes with a specified reference direction, and sense defines the direction the vector points along its line of action. A vector with a positive sense points towards the positive end of the reference axis and vice-versa. A vector representing an object's weight has a vertical reference direction and a downward sense or negative sense, for example.  A third way to represent a vector is with a unit vector multiplied by a scalar component . Unit vectors are vectors with a magnitude of one (unitless), and scalar components are signed values with units. Together, they fully define a vector quantity; the unit vector specifies the direction of its line of action, and the scalar component specifies its magnitude and sense. The scalar component scales the unit vector.  Be careful not to confuse scalar components, which can be positive or negative, with vector magnitudes, which are always positive.  Vectors are either constant or vary as a function of time, position, or something else. For example, if a force varies with time according to the function , where is the time in seconds, then the force will be at and increase by each second thereafter.  "
},
{
  "id": "Chapter_02-vectors-2",
  "level": "2",
  "url": "Chapter_02-vectors.html#Chapter_02-vectors-2",
  "type": "Key Questions",
  "number": "2.1",
  "title": "",
  "body": "  How is a vector different than a scalar?  How do you identify the tip, tail, line of action, direction, and magnitude of any drawn vector?  What are the standard notations for vectors and scalars in this textbook?  What is the difference between the sense and orientation of a vector?   "
},
{
  "id": "Chapter_02-vectors-3-1",
  "level": "2",
  "url": "Chapter_02-vectors.html#Chapter_02-vectors-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arrow tip tail line of action "
},
{
  "id": "fig-ggb-1d-definitions",
  "level": "2",
  "url": "Chapter_02-vectors.html#fig-ggb-1d-definitions",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Vector Definitions   "
},
{
  "id": "Chapter_02-vectors-5",
  "level": "2",
  "url": "Chapter_02-vectors.html#Chapter_02-vectors-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "point of application free vectors "
},
{
  "id": "Chapter_02-vectors-6",
  "level": "2",
  "url": "Chapter_02-vectors.html#Chapter_02-vectors-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude "
},
{
  "id": "Chapter_02-vectors-8",
  "level": "2",
  "url": "Chapter_02-vectors.html#Chapter_02-vectors-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate system origin reference direction "
},
{
  "id": "Chapter_02-vectors-9",
  "level": "2",
  "url": "Chapter_02-vectors.html#Chapter_02-vectors-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orientation sense "
},
{
  "id": "Chapter_02-vectors-10",
  "level": "2",
  "url": "Chapter_02-vectors.html#Chapter_02-vectors-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit vector scalar component "
},
{
  "id": "Chapter_02-one-dimensional-vectors",
  "level": "1",
  "url": "Chapter_02-one-dimensional-vectors.html",
  "type": "Section",
  "number": "2.2",
  "title": "One-Dimensional Vectors",
  "body": " One-Dimensional Vectors    Given two one-dimensional vectors, how do you compute and then draw the resultant?  What happens when you multiply a vector by a scalar?     The simplest vector calculations involve one-dimensional vectors. You can learn some important terminology here without much mathematical difficulty. In one-dimensional situations, all vectors share the same line of action, but may point towards either end. If the line of action has a positive end like a coordinate axis does, then a vector pointing towards that end will have a positive scalar component.    Vector Addition  Adding multiple vectors together finds the resultant vector. Resultant vectors can be thought of as the sum of or combination of two or more vectors.  To find the resultant vector of two one-dimensional vectors and you can use the tip-to-tail technique in below. In the tip-to-tail technique, you slide vector until its tail is at the tip of , and the vector from the tail of to the tip of is the resultant . Note that vector addition is commutative: the resultant is the same whether you add to or to .     One Dimensional Vector Addition       Vector Subtraction  The easiest way to handle vector subtraction is to add the negative of the vector you are subtracting to the other vector. In this way, you can still use the tip-to-tail technique after flipping the vector you are subtracting.   Vector subtraction   Find where and .    .    You can simulate this in .  Set to a value of and to a value of , the negative of its actual value.  Move the vectors until they are tip-to-tail. The order does not matter because vector addition is commutative.    .      Vector Multiplication by a Scalar  Multiplying or dividing a vector by a scalar changes the vector's magnitude but maintains its original line of action. One common transformation is to find the negative of a vector. To find the negative of vector , we multiply it by -1; in equation form  Spatially, the effect of negating a vector this way is to rotate it by 180 . The magnitude, line of action, and orientation stay the same, but the sense reverses so now the arrowhead points in the opposite direction.   "
},
{
  "id": "Chapter_02-one-dimensional-vectors-2",
  "level": "2",
  "url": "Chapter_02-one-dimensional-vectors.html#Chapter_02-one-dimensional-vectors-2",
  "type": "Key Questions",
  "number": "2.2",
  "title": "",
  "body": "  Given two one-dimensional vectors, how do you compute and then draw the resultant?  What happens when you multiply a vector by a scalar?   "
},
{
  "id": "one-dimensional-vector-addition-2",
  "level": "2",
  "url": "Chapter_02-one-dimensional-vectors.html#one-dimensional-vector-addition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "resultant "
},
{
  "id": "fig-ggb-1d-addition",
  "level": "2",
  "url": "Chapter_02-one-dimensional-vectors.html#fig-ggb-1d-addition",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " One Dimensional Vector Addition   "
},
{
  "id": "Chapter_02-example-vector-subtraction",
  "level": "2",
  "url": "Chapter_02-one-dimensional-vectors.html#Chapter_02-example-vector-subtraction",
  "type": "Example",
  "number": "2.2.2",
  "title": "Vector subtraction.",
  "body": " Vector subtraction   Find where and .    .    You can simulate this in .  Set to a value of and to a value of , the negative of its actual value.  Move the vectors until they are tip-to-tail. The order does not matter because vector addition is commutative.    .   "
},
{
  "id": "cartesian-coords-2d",
  "level": "1",
  "url": "cartesian-coords-2d.html",
  "type": "Section",
  "number": "2.3",
  "title": "2D Coordinate Systems &amp; Vectors",
  "body": " 2D Coordinate Systems & Vectors    Why are orthogonal coordinate systems useful?  How do you transform between polar and Cartesian coordinates?     A coordinate system gives us a frame of reference to describe a system that we would like to analyze. In statics we normally use orthogonal coordinate systems, where orthogonal means perpendicular. In an orthogonal coordinate system the coordinate direction are perpendicular to each other and thereby independent. The intersection of the coordinate axes is called the origin , and measurements are made from there. Both points and vectors are described with a set of numbers called the coordinates . For points in space, the coordinates specify the distance you must travel in each of the coordinate directions to get from the origin to the point in question. Together, the coordinates can be thought of as specifying a position vector , a vector from the origin directly to the point. The position vector gives the magnitude and direction needed to travel directly from the origin to the point.  In the case of force vectors, the coordinates are the scalar components of the force in each of the coordinate directions. These components locate the tip of the vector and they can be interpreted as the fraction of the total force which acts in each of the coordinate directions.  Three coordinate directions are needed to map our real three-dimensional world but in this section we will start with two, simpler, two-dimensional orthogonal systems: rectangular and polar coordinates , and the tools to convert from one to the other.    Rectangular Coordinates  The most important coordinate system is the Cartesian system, which was named after the French mathematician René Descartes. In two dimensions the coordinate axes are straight lines rotated 90 apart named , and .  In most cases, the axis is horizontal and points to the right, and the axis points vertically upward, however, we are free to rotate or translate this entire coordinate system if we like. It is usually mathematically advantageous to establish the origin at a convenient point to make measurements from, and to align one of the coordinate axes with a major feature of the problem.  Points are specified as an ordered pair of coordinate values separated by a comma and enclosed in parentheses, .   Cartesian Coordinate System    Similarly, forces and other vectors will be specified with an ordered pair of scalar components enclosed by angle brackets, .    Polar Coordinates  The polar coordinate system is an alternate orthogonal system which is useful in some situations. In this system, a point is specified by giving its distance from the origin , and , an angle measured counter-clockwise from a reference direction usually the positive axis.  In this text, points in polar coordinates will be specified as an ordered pair of values separated by a semicolon and enclosed in parentheses .  Angles can be measured in either radians or degrees, so be sure to include a degree sign on angle if that is what you intend.   Polar Coordinate System      Coordinate Transformation  You should be able to translate points from one coordinate system to the other whenever necessary. The relation between ) coordinates and coordinates are illustrated in the diagram and right-triangle trigonometry is all that is needed to convert from one representation to the other.   Coordinate Transformation     Rectangular To Polar for points (Given: and, )      Take care when using the inverse tangent function on your calculator. Calculator angles are always in the first or fourth quadrant, and you may need to add or subtract 180 to the calculator angle to locate the point in the correct quadrant.     Polar to Rectangular for points (Given: and, )       Rectangular To Polar for forces (Given: rectangular components)  If you are working with forces rather than distances, the process is exactly the same but triangle is labeled differently. The hypotenuse of the triangle is the magnitude of the vector, and sides of the right triangle are the scalar components of the force, so for vector      Polar to Rectangular for forces (Given: magnitude and direction)       Rectangular to Polar Representation    Express point in polar coordinates.   A graph that shows the point P = (-8.66, 5) on an x-y plane.   William Haynes  CC-BY-SA          Given: ,     You must be careful here and use some common sense. The angle your calculator gives you in this problem is incorrect because point is in the second quadrant, but your calculator doesn't know this. It can't tell whether the argument of is negative because the was negative or because the was negative, so it must make an assumption and in this case it is wrong.  The arctan function on calculators will always return values in the first and fourth quadrant. If, by inspection of the and the coordinates, you see that the point is in the second or third quadrant, you must add or subtract to the calculator's answer.  So in this problem, is really . After making this adjustment, the location of in polar coordinates is:       Most scientific calculators include handy polar-to-rectangular and rectangular-to-polar functions that can save you time and help you avoid errors. Perhaps you should google your calculator model to find out if yours does and learn how to use it?     Polar to Rectangular Representation    Express force as a pair of scalar components.   The Force vector F has a magnitude of 200 N. It is shown on a circle that is evenly divided into 12 segments (slices) radially (i.e., each segment is 30 degrees, where the positive x-axis is the beginning of the first segment and +30 degrees is the end of the first segment). The Force falls at the end of the 7th segment (i.e. in quadrant III).   William Haynes  CC-BY-SA            Given: The magnitude of force , and from the diagram we see that the direction of is counter-clockwise from the negative axis.  Letting we can find the components of with right triangle trigonometry.     Since the force points down and to the left into the third quadrant, these values are actually negative, and the signs must be applied manually.  After making this adjustment, the location of expressed in rectangular coordinates is:    If you would prefer not to apply the negative signs by hand, you can convert the to an angle measured from the positive axis and let your calculator takes care of the signs. You may use either .  For     Although this approach is mathematically correct, experience has shown that it can lead to errors and we recommend that when you work with right triangles, use angles between zero and , and apply signs manually as required by the physical situation.     "
},
{
  "id": "cartesian-coords-2d-2",
  "level": "2",
  "url": "cartesian-coords-2d.html#cartesian-coords-2d-2",
  "type": "Key Questions",
  "number": "2.3",
  "title": "",
  "body": "  Why are orthogonal coordinate systems useful?  How do you transform between polar and Cartesian coordinates?   "
},
{
  "id": "cartesian-coords-2d-3-1",
  "level": "2",
  "url": "cartesian-coords-2d.html#cartesian-coords-2d-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal origin coordinates position vector "
},
{
  "id": "cartesian-coords-2d-3-2",
  "level": "2",
  "url": "cartesian-coords-2d.html#cartesian-coords-2d-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar components "
},
{
  "id": "cartesian-coords-2d-3-3",
  "level": "2",
  "url": "cartesian-coords-2d.html#cartesian-coords-2d-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rectangular polar , "
},
{
  "id": "rectangular-coords-2",
  "level": "2",
  "url": "cartesian-coords-2d.html#rectangular-coords-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian "
},
{
  "id": "rectangular-coords-5",
  "level": "2",
  "url": "cartesian-coords-2d.html#rectangular-coords-5",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " Cartesian Coordinate System   "
},
{
  "id": "polar-coords-2",
  "level": "2",
  "url": "cartesian-coords-2d.html#polar-coords-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar "
},
{
  "id": "polar-coords-5",
  "level": "2",
  "url": "cartesian-coords-2d.html#polar-coords-5",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " Polar Coordinate System   "
},
{
  "id": "coord-transformation-3",
  "level": "2",
  "url": "cartesian-coords-2d.html#coord-transformation-3",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": " Coordinate Transformation   "
},
{
  "id": "coord-transformation-4-3",
  "level": "2",
  "url": "cartesian-coords-2d.html#coord-transformation-4-3",
  "type": "Note",
  "number": "2.3.4",
  "title": "",
  "body": " Take care when using the inverse tangent function on your calculator. Calculator angles are always in the first or fourth quadrant, and you may need to add or subtract 180 to the calculator angle to locate the point in the correct quadrant.  "
},
{
  "id": "ex-coord-transform-1",
  "level": "2",
  "url": "cartesian-coords-2d.html#ex-coord-transform-1",
  "type": "Example",
  "number": "2.3.5",
  "title": "Rectangular to Polar Representation.",
  "body": " Rectangular to Polar Representation    Express point in polar coordinates.   A graph that shows the point P = (-8.66, 5) on an x-y plane.   William Haynes  CC-BY-SA          Given: ,     You must be careful here and use some common sense. The angle your calculator gives you in this problem is incorrect because point is in the second quadrant, but your calculator doesn't know this. It can't tell whether the argument of is negative because the was negative or because the was negative, so it must make an assumption and in this case it is wrong.  The arctan function on calculators will always return values in the first and fourth quadrant. If, by inspection of the and the coordinates, you see that the point is in the second or third quadrant, you must add or subtract to the calculator's answer.  So in this problem, is really . After making this adjustment, the location of in polar coordinates is:       Most scientific calculators include handy polar-to-rectangular and rectangular-to-polar functions that can save you time and help you avoid errors. Perhaps you should google your calculator model to find out if yours does and learn how to use it?   "
},
{
  "id": "ex-coord-transform-2",
  "level": "2",
  "url": "cartesian-coords-2d.html#ex-coord-transform-2",
  "type": "Example",
  "number": "2.3.6",
  "title": "Polar to Rectangular Representation.",
  "body": " Polar to Rectangular Representation    Express force as a pair of scalar components.   The Force vector F has a magnitude of 200 N. It is shown on a circle that is evenly divided into 12 segments (slices) radially (i.e., each segment is 30 degrees, where the positive x-axis is the beginning of the first segment and +30 degrees is the end of the first segment). The Force falls at the end of the 7th segment (i.e. in quadrant III).   William Haynes  CC-BY-SA            Given: The magnitude of force , and from the diagram we see that the direction of is counter-clockwise from the negative axis.  Letting we can find the components of with right triangle trigonometry.     Since the force points down and to the left into the third quadrant, these values are actually negative, and the signs must be applied manually.  After making this adjustment, the location of expressed in rectangular coordinates is:    If you would prefer not to apply the negative signs by hand, you can convert the to an angle measured from the positive axis and let your calculator takes care of the signs. You may use either .  For     Although this approach is mathematically correct, experience has shown that it can lead to errors and we recommend that when you work with right triangles, use angles between zero and , and apply signs manually as required by the physical situation.   "
},
{
  "id": "coordinates-3d",
  "level": "1",
  "url": "coordinates-3d.html",
  "type": "Section",
  "number": "2.4",
  "title": "3D Coordinate Systems &amp; Vectors",
  "body": " 3D Coordinate Systems & Vectors    What is a right-hand Cartesian coordinate system?  What are direction cosine angles and why are they always less than 180 ?  How are spherical coordinates different than cylindrical coordinates?     In this section we will discuss four methods to specify points and vectors in three-dimensional space.  The most commonly used method is an extension of two-dimensional rectangular coordinates to three-dimensions. Alternately, points and vectors in three dimensions can be specified in terms of direction cosines , or using spherical or cylindrical coordinate systems. These will be discussed in the following sections.  You will often need to convert from one representation to another. Good visualization skills are helpful here.    Rectangular Coordinates  We can extend the two-dimensional Cartesian coordinate system into three dimensions easily by adding a axis perpendicular to the two-dimensional Cartesian plane. The notation is similar to the notation used for two-dimensional vectors. Points and forces are expressed as ordered triples of rectangular coordinates following the same notation used previously.     For nearly all three-dimensional problems, you will need the rectangular , , and locations of points in space and components of vectors before proceeding with the computations. If you are given the components upfront, then you are set to move forward, but otherwise, you will need to transform one coordinate system into rectangular coordinates.   Three-Dimensional Rectangular Coordinates     Right Handed Coordinate Systems  Does it matter which way the axes are oriented? Is it OK to make the axis point left or the axis point down?     In one sense, it doesn't matter at all. The positive directions of the coordinate axes are arbitrary. On the other hand, it's convenient for everyone if we agree on a standard orientation. In mathematics and engineering the default is a right-handed coordinate system , where the coordinate axes are oriented according to the right hand rule shown in the figure.  To apply the right-hand rule, orient your thumb and first two fingers at right angles to each other and align them with three coordinate axes. Starting with your thumb, name your the axes in alphabetical order - - .    Right-handed coordinate system.   The image depicts three right-angled triangles. The vector is the hypotenuse and the adjacent sides are the, x, y, and z rectangular components. The rectangular components have corresponding coordinate direction angles (theta_x, theta_y, and theta_z).     CC-BY-SA-3.0      These are the labels for the three axes and your fingers point in their positive directions. If it is more convenient, you may name your thumb or , as long as you name the other two fingers in the same sequence - - or - - .     Direction Cosine Angles  The direction of a vector in two-dimensional systems could be expressed clearly with a single angle measured from a reference axis, but adding an additional dimension means that one angle is no longer enough.  One way to define the direction of a three-dimensional vector is by using direction cosine angles , also commonly known as coordinate direction angles . The direction cosine angles are the angles between the positive , , and axes to a given vector and are traditionally named , , and . Three-dimensional vectors, components, and angles are often difficult to visualize because they do not commonly lie in the Cartesian planes.   Direction Cosine Angles    We can relate the components of a vector to its direction cosine angles using the following equations.   Note the component in the numerator of each direction cosine equation is positive or negative as defined by the coordinate system, and the vector magnitude in the denominator is always positive. From these equations, we can conclude that:  Direction cosines are signed value between -1 and 1.  Direction cosine angles must always be between and or .  Any direction cosine angle greater than indicates a negative component along that respective axis. Spatially this is because all direction cosine angles are measured from the positive side of each axis. Mathematically this is because the cosine of any angle between 90 and 180 degrees is numerically negative.      Direction Cosine Angles     A cable force pulls on an anchor ring centered on the x, y, and z axis origin.    A rope pulls on an anchor ring centered at the origin with force .  Find the magnitude of and the direction cosine angles, , , and components.           Since the three components of are perpendicular, we can apply the Pythagorean Theorem to find the magnitude of .     Direction cosine angles are equal to the inverse cosine of each Cartesian force component divided by the force magnitude.    Direction cosine angles for vector F, measured from the postive axes.   Since the direction cosine angles are measured from the positive , , and axes, the negative component of means that , while both and are less than as their components are positive.      Spherical Coordinates  In spherical coordinates, points are specified with these three coordinates  , the radial distance from the origin to the tip of the vector,  , the azimuthal angle , measured counter-clockwise from the positive axis to the projection of the vector onto the plane, and  , the polar angle from the axis to the vector.     Spherical Coordinate System      What are the differences between polar coordinates and terrestrial latitude\/longitude locations?    In terrestrial measurements  Coordinate is not needed since all points are on the surface of the globe.  Longitude is measured to East or West of the prime meridian, rather than to counter-clockwise from the axis.  Latitude is measured to North or South of the equator, whereas polar angle is to measured from the North Pole .      When vectors are specified using cylindrical coordinates the magnitude of the vector is used instead of distance from the origin to the point.  When the two given spherical angles are defined in the manner shown here, the rectangular components of the vector are found thus:   Reflect on the equations above. Can you think through the process of how they were derived? The generalized steps are as follows. First, draw an accurate sketch of the given information and define the right triangles related to both and . Then use trig identities on the right triangle involving the vector, the axis and angle to find , and , the projection of onto the plane. Finally, use trig identities on the right triangle involving vector and to find the remaining components of .   Spherical Coordinates     A cable force pulls on an anchor ring centered on the x, y, and z axis origin.    A rope pulls on an anchor ring centered at the origin with force .  Find the spherical coordinates of .           To represent in spherical coordinates, we must find the radial distance , the azimuthal angle , and the polar angle .  Coordinate is simply the magnitude of force Since the three components of are perpendicular, we can apply the Pythagorean Theorem to find it.     Azimuthal angle measures the angle between the axis and the projection of onto the plane, .  Using a right triangle with sides , , and , we can find using the inverse tangent of the ratio of the opposite to adjacent sides.   Right triangle to find the angle theta θ in the xy plane.   This angle is negative because it is measured clockwise from the positive axis, opposite the standard CCW direction.  The polar angle is measured down from the axis to the vector . We can find it using a right triangle with sides , , and . Note that is the same as the direction cosine angle .  Also notice that the azimuthal angle is smaller than the direction cosine angle , since is in the plane, but is a 3D angle from the axis to the vector   Spherical components for vector F.       Cylindrical Coordinates  The cylindrical coordinate system is seldom used in statics, however, it is useful in certain geometries. Cylindrical coordinates extend two-dimensional polar coordinates by adding a coordinate indicating the distance above or below the plane.  Points are specified with these three cylindrical coordinates.  , the radius of the cylinder. This is the distance from the origin to the projection of the tip of the vector onto the plane,  , the azimuthal angle, measured counter-clockwise from the positive axis to the projection of the vector onto the plane  , the vertical height of the vector tip.     Cylindrical Coordinate System    Unfortunately, not all problems give the angles and as defined here; so you will need to find them from the given angles in other situations.  You can use the interactive diagram in this section to practice visualizing and finding the components of a vector in all of these coordinate systems. You should be able to find the , , and coordinates given direction angles, spherical or cylindrical coordinates, and vice-versa.   Cylindrical Coordinates     A cable force pulls on an anchor ring centered on the x, y and z axis origin.    A rope pulls on an anchor ring centered at the origin with force .  Find the cylindrical coordinates of .           To represent in cylindrical coordinates, we must find the radial distance, , the azimuthal angle, , and the axial coordinate, .  In cylindrical coordinates, is the radius of the cylinder rather than the radius of the enclosing sphere. is the projection of onto the plane, , and can be found by applying the Pythagorean Theorem to the and components of .     The azimuthal angle is the same in both cylindrical and spherical coordinates. It measures the angle between the axis and the projection of onto the plane. can be found using a right triangle in the plane with sides and .   Right triangle to find the angle theta θ in the xy plane.    Finally, the component is the vertical component of the force, , which was given.     "
},
{
  "id": "coordinates-3d-2",
  "level": "2",
  "url": "coordinates-3d.html#coordinates-3d-2",
  "type": "Key Questions",
  "number": "2.4",
  "title": "",
  "body": "  What is a right-hand Cartesian coordinate system?  What are direction cosine angles and why are they always less than 180 ?  How are spherical coordinates different than cylindrical coordinates?   "
},
{
  "id": "coordinates-3d-3-2",
  "level": "2",
  "url": "coordinates-3d.html#coordinates-3d-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rectangular coordinates direction cosines spherical cylindrical "
},
{
  "id": "Chapter_02-rectangular-coordinates-5",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-rectangular-coordinates-5",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " Three-Dimensional Rectangular Coordinates   "
},
{
  "id": "Chapter_02-right-hand-axes",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-right-hand-axes",
  "type": "Thinking Deeper",
  "number": "2.4.2",
  "title": "Right Handed Coordinate Systems.",
  "body": " Right Handed Coordinate Systems  Does it matter which way the axes are oriented? Is it OK to make the axis point left or the axis point down?     In one sense, it doesn't matter at all. The positive directions of the coordinate axes are arbitrary. On the other hand, it's convenient for everyone if we agree on a standard orientation. In mathematics and engineering the default is a right-handed coordinate system , where the coordinate axes are oriented according to the right hand rule shown in the figure.  To apply the right-hand rule, orient your thumb and first two fingers at right angles to each other and align them with three coordinate axes. Starting with your thumb, name your the axes in alphabetical order - - .    Right-handed coordinate system.   The image depicts three right-angled triangles. The vector is the hypotenuse and the adjacent sides are the, x, y, and z rectangular components. The rectangular components have corresponding coordinate direction angles (theta_x, theta_y, and theta_z).     CC-BY-SA-3.0      These are the labels for the three axes and your fingers point in their positive directions. If it is more convenient, you may name your thumb or , as long as you name the other two fingers in the same sequence - - or - - .  "
},
{
  "id": "Chapter_02-direction-cosine-angles-3",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-direction-cosine-angles-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direction cosine angles coordinate direction angles "
},
{
  "id": "Chapter_02-direction-cosine-angles-4",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-direction-cosine-angles-4",
  "type": "Figure",
  "number": "2.4.4",
  "title": "",
  "body": " Direction Cosine Angles   "
},
{
  "id": "Chapter_02-3d-components-direction-cosine",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-3d-components-direction-cosine",
  "type": "Example",
  "number": "2.4.5",
  "title": "Direction Cosine Angles.",
  "body": "  Direction Cosine Angles     A cable force pulls on an anchor ring centered on the x, y, and z axis origin.    A rope pulls on an anchor ring centered at the origin with force .  Find the magnitude of and the direction cosine angles, , , and components.           Since the three components of are perpendicular, we can apply the Pythagorean Theorem to find the magnitude of .     Direction cosine angles are equal to the inverse cosine of each Cartesian force component divided by the force magnitude.    Direction cosine angles for vector F, measured from the postive axes.   Since the direction cosine angles are measured from the positive , , and axes, the negative component of means that , while both and are less than as their components are positive.   "
},
{
  "id": "Chapter_02-spherical-coordinates-2",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-spherical-coordinates-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "radial distance azimuthal angle polar angle "
},
{
  "id": "Chapter_02-spherical-coordinates-3",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-spherical-coordinates-3",
  "type": "Figure",
  "number": "2.4.6",
  "title": "",
  "body": " Spherical Coordinate System   "
},
{
  "id": "Chapter_02-spherical-coordinates-4",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-spherical-coordinates-4",
  "type": "Question",
  "number": "2.4.7",
  "title": "",
  "body": "  What are the differences between polar coordinates and terrestrial latitude\/longitude locations?    In terrestrial measurements  Coordinate is not needed since all points are on the surface of the globe.  Longitude is measured to East or West of the prime meridian, rather than to counter-clockwise from the axis.  Latitude is measured to North or South of the equator, whereas polar angle is to measured from the North Pole .     "
},
{
  "id": "Chapter_02-3d-components-spherical",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-3d-components-spherical",
  "type": "Example",
  "number": "2.4.8",
  "title": "Spherical Coordinates.",
  "body": " Spherical Coordinates     A cable force pulls on an anchor ring centered on the x, y, and z axis origin.    A rope pulls on an anchor ring centered at the origin with force .  Find the spherical coordinates of .           To represent in spherical coordinates, we must find the radial distance , the azimuthal angle , and the polar angle .  Coordinate is simply the magnitude of force Since the three components of are perpendicular, we can apply the Pythagorean Theorem to find it.     Azimuthal angle measures the angle between the axis and the projection of onto the plane, .  Using a right triangle with sides , , and , we can find using the inverse tangent of the ratio of the opposite to adjacent sides.   Right triangle to find the angle theta θ in the xy plane.   This angle is negative because it is measured clockwise from the positive axis, opposite the standard CCW direction.  The polar angle is measured down from the axis to the vector . We can find it using a right triangle with sides , , and . Note that is the same as the direction cosine angle .  Also notice that the azimuthal angle is smaller than the direction cosine angle , since is in the plane, but is a 3D angle from the axis to the vector   Spherical components for vector F.    "
},
{
  "id": "Chapter_02-cylindrical-coordinates-4",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-cylindrical-coordinates-4",
  "type": "Figure",
  "number": "2.4.9",
  "title": "",
  "body": " Cylindrical Coordinate System   "
},
{
  "id": "Chapter_02-3d-components-cylindrical",
  "level": "2",
  "url": "coordinates-3d.html#Chapter_02-3d-components-cylindrical",
  "type": "Example",
  "number": "2.4.10",
  "title": "Cylindrical Coordinates.",
  "body": " Cylindrical Coordinates     A cable force pulls on an anchor ring centered on the x, y and z axis origin.    A rope pulls on an anchor ring centered at the origin with force .  Find the cylindrical coordinates of .           To represent in cylindrical coordinates, we must find the radial distance, , the azimuthal angle, , and the axial coordinate, .  In cylindrical coordinates, is the radius of the cylinder rather than the radius of the enclosing sphere. is the projection of onto the plane, , and can be found by applying the Pythagorean Theorem to the and components of .     The azimuthal angle is the same in both cylindrical and spherical coordinates. It measures the angle between the axis and the projection of onto the plane. can be found using a right triangle in the plane with sides and .   Right triangle to find the angle theta θ in the xy plane.    Finally, the component is the vertical component of the force, , which was given.   "
},
{
  "id": "Chapter_02-unit-vectors",
  "level": "1",
  "url": "Chapter_02-unit-vectors.html",
  "type": "Section",
  "number": "2.5",
  "title": "Unit Vectors",
  "body": "  Unit Vectors    Why are unit vectors useful?  What are the unit vectors along the Cartesian x, y, and z axes?  How do you find the force vector components of known force magnitude along a geometric line?  How can you find unit vector components from direction cosine angles?     A unit vector is a vector with a magnitude of one and no units. As such, a unit vector represents a pure direction. By convention, a unit vector is indicated by a hat over a vector symbol. This may sound like a new concept, but it's a simple one, directly related to the unit circle, the Pythagorean Theorem, and the definitions of sine and cosine.    Cartesian Unit Vectors  A unit vector can point in any direction, but because they occur so frequently the unit vectors in each of the three Cartesian coordinate directions are given their own symbols, which are:  , for the unit vector pointing in the direction,  , for the unit vector pointing in the direction, and  , for the unit vector pointing in the direction..      Unit Vector Interactive     Applying the Pythagorean Theorem to the triangle gives the equation for a unit circle   No matter what angle a unit vector makes with the axis, and are its scalar components. This relation assumes that the angle is measured from the axis, if it is measured from the axis the sine and cosine functions reverse, with defining the horizontal component and the defining the vertical component.  The and components of a point on the unit circle are also the scalar components of , so .    Relation between Vectors and Unit Vectors  When a purely-directional unit vector is multiplied by a scalar value it is scaled by that amount. For example, when a unit vector pointing to the right is multiplied by the result is a vector pointing to the right. When a unit vector pointing up is multiplied by , the negative magnitude flips the direction of the unit vector and the result is a vector pointing down.  In general, , where is the magnitude of vector , and is the unit vector pointing in the direction of .  Solving equation for gives the approach to find the unit vector of known vector .  The process is straightforward divide the vector by its magnitude.  To emphasize that unit vectors are pure direction, recall that vectors consist of both a magnitude and direction, so when we divide a vector by its own magnitude we are just left with direction.   This interactive shows vector , its associated unit vector , and expressions for in terms of its unit vector .    Unit Vectors     Find unit vector of a force   Find the unit vector corresponding to a force at 60 above the positive -axis.       In polar coordinates, the unit vector is a vector of magnitude 1, pointing in the same direction as the force, so, by inspection   In rectangular coordinates, first express in terms of its and components. .      Force Vectors from Position Vectors  Unit vectors are generally the best approach when working with forces and distances in three dimensions.  For example, when the locations of two points on the line of action of a force are known, the unit vector of the line of action can be found and used to determine the components of the force acting along that line. This can be accomplished as follows, where and are points on the line of action.   Use the problem geometry to find , the displacement vector from point to point .  You can either subtract the coordinates of the starting point from the coordinates of the destination point , or, write the displacements directly by noting the change in the , , and coordinates when moving from to .   The result is the same with either method.    Find the distance between point and point using the Pythagorean Theorem. This distance is also the magnitude of or .     Find , the unit vector from to , by dividing vector by its magnitude. This is a unitless vector with a magnitude of 1 which points from to .     Finally, multiply the magnitude of the force by the unit vector to get force        The interactive below can be used to visualize the displacement vector and its unit vector, and practice this procedure.   Unit Vectors in Space     Component in a Specified Direction   Determine the components of a force acting at point , in the direction of a line from to . Given: and  We will take the solution one step at a time.    Draw a good diagram.   The interactive in may be useful for this problem.    Find the displacement vector from to .            Find the magnitude of the displacement vector.            Find the unit vector pointing from to .            Find the force vector.            Given the properties of unit vectors, there are some conceptual checks you can make after computing unit vector components which can prevent subsequent errors.  The signs of unit vector components need to match the signs of the original position vector. A unit vector has the same line of action and sense as the position vector but is scaled down to one unit in magnitude.  Components of a unit vector must be between -1 and 1. If the magnitude of a unit vector is one, then it is impossible for it to have rectangular components larger than one.      Unit Vectors and Direction Cosines  If you look closely at the right side of equation , you will see that each equation consists of a component divided by the total vector magnitude. These are the same equations just used to find unit vectors. Thus, the cosine of each direction cosine angle collectively also computes the components of the unit vector; hence we can write an equation for , , the unit vector along .  Combining the Pythagorean Theorem with our knowledge of unit vectors and direction cosine angles gives this result: if you know two of the three direction cosine angles you can manipulate the following equation to find the third.   "
},
{
  "id": "Chapter_02-unit-vectors-2",
  "level": "2",
  "url": "Chapter_02-unit-vectors.html#Chapter_02-unit-vectors-2",
  "type": "Key Questions",
  "number": "2.5",
  "title": "",
  "body": "  Why are unit vectors useful?  What are the unit vectors along the Cartesian x, y, and z axes?  How do you find the force vector components of known force magnitude along a geometric line?  How can you find unit vector components from direction cosine angles?   "
},
{
  "id": "unit-vectors-3-1",
  "level": "2",
  "url": "Chapter_02-unit-vectors.html#unit-vectors-3-1",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": " Unit Vector Interactive   "
},
{
  "id": "ggb_unit_vector",
  "level": "2",
  "url": "Chapter_02-unit-vectors.html#ggb_unit_vector",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": " Unit Vectors   "
},
{
  "id": "Chapter_02-example-find-unit-vector-of-a-force",
  "level": "2",
  "url": "Chapter_02-unit-vectors.html#Chapter_02-example-find-unit-vector-of-a-force",
  "type": "Example",
  "number": "2.5.3",
  "title": "Find unit vector of a force.",
  "body": " Find unit vector of a force   Find the unit vector corresponding to a force at 60 above the positive -axis.       In polar coordinates, the unit vector is a vector of magnitude 1, pointing in the same direction as the force, so, by inspection   In rectangular coordinates, first express in terms of its and components. .   "
},
{
  "id": "unit_vectors_3d",
  "level": "2",
  "url": "Chapter_02-unit-vectors.html#unit_vectors_3d",
  "type": "Figure",
  "number": "2.5.4",
  "title": "",
  "body": " Unit Vectors in Space   "
},
{
  "id": "Chapter_02-example-component-in-a-specified-direction",
  "level": "2",
  "url": "Chapter_02-unit-vectors.html#Chapter_02-example-component-in-a-specified-direction",
  "type": "Example",
  "number": "2.5.5",
  "title": "Component in a Specified Direction.",
  "body": " Component in a Specified Direction   Determine the components of a force acting at point , in the direction of a line from to . Given: and  We will take the solution one step at a time.    Draw a good diagram.   The interactive in may be useful for this problem.    Find the displacement vector from to .            Find the magnitude of the displacement vector.            Find the unit vector pointing from to .            Find the force vector.           "
},
{
  "id": "vector_algebra_2D",
  "level": "1",
  "url": "vector_algebra_2D.html",
  "type": "Section",
  "number": "2.6",
  "title": "Vector Addition",
  "body": " Vector Addition    How do you set up vectors for graphical addition using the Triangle Rule?  Does it matter which vector you start with when using the Triangle Rule?  Why can you separate a two-dimensional vector equation into two independent equations to solve for up to two unknowns?  If you and another student define vectors using different direction coordinate systems, will you end up with the same resultant vector?  What is the preferred technique to add vectors in three-dimensional systems?     In this section we will look at several different methods of vector addition. Vectors being added together are called the components , and the sum of the components is called the resultant vector .  These different methods are tools for your statics toolbox. They give you multiple different ways to think about vector addition and to approach a problem. Your goal should be to learn to use them all and to identify which approach will be the easiest to use in a given situation.    Triangle Rule of Vector Addition  All methods of vector addition are ultimately based on the tip-to-tail method discussed in a one-dimensional context in . There are two ways to draw or visualize adding vectors in two or three dimensions, the Triangle Rule and Parallelogram Rule . Both are equivalent.   Triangle Rule  Place the tail of one vector at the tip of the other vector, then draw the resultant from the first vector's tail to the final vector's tip.    Parallelogram Rule  Place both vectors' tails at the origin, then complete a parallelogram with lines parallel to each vector through the tip of the other. The resultant is equal to the diagonal from the tails to the opposite corner.     The interactive below shows two forces and pulling on a particle at the origin, and the appropriate diagram for the triangle or parallelogram rule. Both approaches produce the same resultant force as expected.    Vector Addition Methods      Graphical Vector Addition  Graphical vector addition involves drawing a scaled diagram using either the parallelogram or triangle rule, and then measuring the magnitudes and directions from the diagram. Graphical solutions work well enough for two-dimensional problems where all the vectors live in the same plane and can be drawn on a sheet of paper, but are not very useful for three-dimensional problems unless you use technology.  If you carefully draw the triangle accurately to scale and use a protractor and ruler you can measure the magnitude and direction of the resultant. However, your answer will only be as precise as your diagram and your ability to read your tools. If you use technology such as GeoGebra or a CAD program to make the diagram, your answer will be precise. The interactive in may be useful for this.  Even though the graphical approach has limitations, it is worth your attention because it provides a good way to visualize the effects of multiple forces, to quickly estimate ballpark answers, and to visualize the diagrams you need to use alternate methods to follow.    Trigonometric Vector Addition  You can get a precise answer from the triangle or parallelogram rule by  drawing a quick diagram using either rule,  identifying three known sides or angles,  using trigonometry to solve for the unknown sides and angles.    The trigonometric tools you will need are found in .  Using triangle-based geometry to solve vector problems is a quick and powerful tool, but includes the following limitations:  There are only three sides in a triangle; thus vectors can only be added two at a time. If you need to add three or more vectors using this method, you must add the first two, then add the third to that sum and so on.  If you fail to draw the correct vector triangle or identify the known sides and angles, you will not find the correct answer.  The trigonometric functions produce scalar values. You can use them to find the magnitudes the angles between vectors, but the results are not, by themselves, vectors.    When you need to find the resultant of more than two vectors, it is generally best to use the algebraic methods described below.    Orthogonal Components  Any arbitrary two-dimensional vector can be broken into two component vectors which are the sides of a parallelogram having as its diagonal. The process of finding components of a vector in particular directions is called vector resolution . While a vector can be resolved into components in any two directions, it's generally most useful to resolve them into rectangular or orthogonal components, where the parallelogram is a rectangle and the components are perpendicular.  There are an infinite number of possible rectangles to choose from, so each vector has an infinite number of sets of orthogonal components. However, the most important set occurs when the sides of the rectangle are parallel to the and axes. These orthogonal components are given and subscripts indicate that they're aligned with the coordinate axes. For vector , , where and are the scalar components of . The advantage of this choice of components is that vector calculations can be replaced with ordinary algebric calculation on scalar values for each orthogonal direction.  Alternately, you may rotate the coordinate system to any other convenient angle, and find the components in the directions of the rotated coordinate axes and . In either case, the vector is the sum of the rectangular components .  The interactive below can help you visualize the relationship between a vector and its components in both the - and - directions.   Orthogonal Components       Algebraic Addition of Components  While the parallelogram rule and the graphical and trigonometric methods are useful tools for visualizing and finding the sum of two vectors, they are not particularly suited for adding more than two vectors or working in three dimensions.  Consider vector which is the sum of several vectors , , and perhaps more. Vectors , and are the components of , and the is the resultant of , and .  It is easy enough to say that , but how can we calculate ? You could draw the vectors arranged tip-to-tail and then use the triangle rule to add the first two components, then use it again to add the third component to that sum, and so forth until all the components have been added. The final sum is the resultant, . The process gets progressively more tedious the more components there are to sum.  This section introduces an alternate method to add multiple vectors which is straightforward, efficient and robust. This is called algebraic method , because the vector addition is replaced with a process of algebraic addition of scalar components. The algebraic technique works equally well for two and three-dimensional vectors, and for summing any number of vectors.  To find the sum of multiple vectors using the algebraic method:  Find the scalar components of each component vector in the and directions using the P to R procedure described in .  Algebraically sum the scalar components in each coordinate direction. The scalar components will be positive if they point right or up, negative if they point left or down. These sums are the scalar components of the resultant.  Resolve the resultant's components to find the magnitude and direction of the resultant vector using the R to P procedure described in .    The resultant is the simply the algebraic sum of the components in each coordinate direction. or in bracket notation .  This process is illustrated in the following interactive diagram and in the next example.   Vector addition by summing rectangular components.     Vector Addition    Vector counter-clockwise from the axis, and vector counter-clockwise from the axis.  Find the resultant by addition of scalar components.    .     Use the given information to draw a sketch of the situation. By imagining or sketching the parallelogram rule, it should be apparent that the resultant vector points up and to the left.       This answer indicates that the resultant points down and to the left, which is odd because the parallelogram rule shows that the resultant should point up and to the left.  This occurs because the calculator always returns angles in the first or fourth quadrant for . To get the actual direction of the resultant, add to the calculator result.  The final answer for the magnitude and direction of the resultant is  measured counter-clockwise from the axis.    The process for adding three-dimensional vectors is exactly the same, except that the component is included as well. This interactive allows you to input the three-dimensional vector components of forces and and view the resultant force which is the sum of and .   Vector Addition in Three Dimensions       Vector Subtraction  Like one-dimensional vector subtraction, the easiest way to handle two-dimensional vector subtraction is by taking the negative of a vector followed by vector addition. Multiplying a vector by -1 preserves its magnitude but flips its direction, which has the effect of changing the sign of the scalar components.  After negating the second vector you can choose any technique you prefer for vector addition.   "
},
{
  "id": "vector_algebra_2D-2",
  "level": "2",
  "url": "vector_algebra_2D.html#vector_algebra_2D-2",
  "type": "Key Questions",
  "number": "2.6",
  "title": "",
  "body": "  How do you set up vectors for graphical addition using the Triangle Rule?  Does it matter which vector you start with when using the Triangle Rule?  Why can you separate a two-dimensional vector equation into two independent equations to solve for up to two unknowns?  If you and another student define vectors using different direction coordinate systems, will you end up with the same resultant vector?  What is the preferred technique to add vectors in three-dimensional systems?   "
},
{
  "id": "vector_algebra_2D-3-1",
  "level": "2",
  "url": "vector_algebra_2D.html#vector_algebra_2D-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "components resultant vector "
},
{
  "id": "Chapter_02-triangle-rule-of-vector-addition-2",
  "level": "2",
  "url": "vector_algebra_2D.html#Chapter_02-triangle-rule-of-vector-addition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Triangle Rule Parallelogram Rule "
},
{
  "id": "addition-2d-views",
  "level": "2",
  "url": "vector_algebra_2D.html#addition-2d-views",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": " Vector Addition Methods   "
},
{
  "id": "Chapter_02-orthogonal-components-2",
  "level": "2",
  "url": "vector_algebra_2D.html#Chapter_02-orthogonal-components-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector resolution rectangular orthogonal "
},
{
  "id": "Chapter_02-orthogonal-components-6",
  "level": "2",
  "url": "vector_algebra_2D.html#Chapter_02-orthogonal-components-6",
  "type": "Figure",
  "number": "2.6.2",
  "title": "",
  "body": " Orthogonal Components   "
},
{
  "id": "Chapter_02-algebraic-addition-of-components-9",
  "level": "2",
  "url": "vector_algebra_2D.html#Chapter_02-algebraic-addition-of-components-9",
  "type": "Figure",
  "number": "2.6.3",
  "title": "",
  "body": " Vector addition by summing rectangular components.   "
},
{
  "id": "Chapter_02-example-vector-addition-",
  "level": "2",
  "url": "vector_algebra_2D.html#Chapter_02-example-vector-addition-",
  "type": "Example",
  "number": "2.6.4",
  "title": "Vector Addition.",
  "body": " Vector Addition    Vector counter-clockwise from the axis, and vector counter-clockwise from the axis.  Find the resultant by addition of scalar components.    .     Use the given information to draw a sketch of the situation. By imagining or sketching the parallelogram rule, it should be apparent that the resultant vector points up and to the left.       This answer indicates that the resultant points down and to the left, which is odd because the parallelogram rule shows that the resultant should point up and to the left.  This occurs because the calculator always returns angles in the first or fourth quadrant for . To get the actual direction of the resultant, add to the calculator result.  The final answer for the magnitude and direction of the resultant is  measured counter-clockwise from the axis.   "
},
{
  "id": "vectors_resultant_3d",
  "level": "2",
  "url": "vector_algebra_2D.html#vectors_resultant_3d",
  "type": "Figure",
  "number": "2.6.5",
  "title": "",
  "body": " Vector Addition in Three Dimensions   "
},
{
  "id": "dot_products_2D",
  "level": "1",
  "url": "dot_products_2D.html",
  "type": "Section",
  "number": "2.7",
  "title": "Dot Products",
  "body": " Dot Products    What are dot products used for?  What does it mean when the dot product of two vectors is zero?  How do you use a dot product to find the angle between two vectors?  What does it mean when the scalar component of the projection is negative?     Unlike ordinary algebra where there is only one way to multiply numbers, there are two distinct vector multiplication operations: dot product and the cross product . Alternately, the first is referred to as the scalar product because its result is a scalar, and the second as the vector product because its result is a vector. The dot product and its applications will be discussed in this section and the cross product in the next.    Calculation of the Dot product  For two vectors and the dot product multiplication is computed by summing the products of the components.  It can be shown that an alternate, equivalent method to compute the dot product is where in the equation is the angle between the two vectors and and are the magnitudes of and .  We can conclude from the second equation that the dot product of two perpendicular vectors is zero, because , and that the dot product of two parallel vectors equals the product of their magnitudes.   When dotting unit vectors that have a magnitude of one, the dot products of a unit vector with itself is one and the dot product two perpendicular unit vectors is zero, so for , , and we have   Dot products are commutative, associative and distributive:   Commutative. The order does not matter.    Associative. It does not matter whether you multiply a scalar value by the final dot product, or either of the individual vectors, you will still get the same answer.  Distributive. If you are dotting one vector with the sum of two more , you can either add first, or dot by both and add the final value.    Dot products can be used to compute the magnitude of a vector, determine the angle between two vectors, and find the rectangular component or projection of a vector in a specified direction. These applications will be discussed in the following sections.    Magnitude of a Vector  Dot products can be used to find vector magnitudes. When a vector is dotted with itself using , the result is the square of the magnitude of the vector. (Recall that and are alternate notations for the magnitude of vector .  The proof is trivial. By the definition of the dot product and the Pythagorean theorem: Taking the square root of each side gives the magnitude of   The result is similar for three-dimensional vectors.   Find Vector Magnitude using the Dot Product   Find the magnitude of vector with components , and              Angle between Two Vectors  A second application of the dot product is to find the angle between two vectors. Equation provides the procedure.     Angle between Orthogonal Unit Vectors   Find the angle between and .        This shows that and are perpendicular to each other.     Angle between Two Vectors   Find the angle between and .              Vector Projection  The dot product is used to find the projection of one vector onto another. You can think of a projection of on as a vector the length of the shadow of on the line of action of when the sun is directly above . More precisely, the projection of onto produces the rectangular component of in the direction parallel to . This is one side of a rectangle aligned with , having as its diagonal.  This is illustrated in , where is the projection of onto , or alternately is the rectangular component of in the direction of .  In this text we will use the symbols  to mean the vector projection of on  to mean the magnitude of the vector projection, a positive or zero-valued scalar, and  to mean the scalar projection . This value represents the component of in the direction, and can have a positive, zero, or negative value.    As we have mentioned before, the magnitude of a vector is its length and is always positive or zero, while a scalar component is a signed value that can be positive or negative. When a scalar component is multiplied by a unit vector the result is a vector in that direction when the scalar component is positive, or opposite when the scalar component is negative.   Vector projection in two dimensions.    The interactive shows that the projection is the adjacent side of a right triangle with as the hypotenuse. From the definition of the dot product we find that , where is the scalar component of the projection. So, the dot product of and gives us the projection of onto times the magnitude of . This value will be positive when , negative when , and zero when the vectors are perpendicular because of the properties of the cosine function.  So, to find the scalar value of the projection of onto we divide by the magnitude of . where is the unit vector in the dirction of .  If you want the vector projection of onto , as opposed to the scalar projection we just found, multiply the scalar projection by the unit vector .  Similarly, the vector projection of onto is  The spatial interpretation of the results the scalar projection is   Positive values mean that and are generally in the same direction.    Negative values mean that and are generally in opposite directions.    Zero means that and are perpendicular.    Magnitude smaller than  This is the most common answer. This means that the vectors are neither parallel nor perpendicular.    Magnitude equal to  means that the vectors point in the same direction, and all of acts in the direction of .    Magnitude larger than  This answer is impossible. Check your algebra; you might have forgotten to divide by the magnitude of .       Vector projections in three dimensions.      Perpendicular Components  The final application of dot products is to find the component of one vector perpendicular to another.   To find the component of perpendicular to , first find the vector projection of on , then subtract that from . What remains is the perpendicular component.   Perpendicular and parallel components of .    To find the component of vector B perpendicular to vector A, first find the vector projection of B on A, then subtract that from B. What remains is the perpendicular component.      Dot Products   A cable pulls with tension on a long anchor embedded in a concrete wall. The anchor lies in the plane at an angle from the axis.   A cable force pulls on an anchor ring centered on xyz axis origin.   For the system above, compute the following:    Find the dot product of the cable tension and the anchor     When you know the magnitudes and angle between two vectors, it is easiest to use the second dot product equation , but in this case it will be easier to find the components of and use .     The units of a dot product are the product of the units of the two vectors.    Find the angle between the cable tension and the anchor .     With the dot product known from the previous step, we can use the to find the angle between force and anchor.  The magnitude of was given but we need to calculate the magnitude of ,     Note that correctly corresponds to the negative dot product and indicates that the two vectors generally oppose each other.    Find the scalar projection of the the cable tension onto the anchor .     Recall from that the scalar projection is the scalar component of one vector in the direction of another, in other words, how much of one vector is parallel to another. This is one of the most direct and practical applications of the dot product.  The dot product of with gives the product of the length of the anchor and the scalar projection of the tension in the direction of the anchor. and has units of N-m.  To find the projection, divide the dot product by the magnitude of     Alternately, you can apply and calculate the calculate the dot product of force vector with the unit vector .  First, find the unit vector Or, since is in the plane with its direction defined by the , the unit vector is found . Then find the projection     Find the vector projection of the cable tension onto the anchor .     The vector projection is the scalar projection value multiplied by a unit direction vector to turn it a vector. So we multiply the scalar projection with the unit vector of to compute the vector projection of onto .       Find the vector portion of cable tension perpendicular to the anchor .     Recall that a two-dimensional vector can be represented by the sum of two perpendicular components. In the same way, a right triangle can be represented by a vector along the hypotenuse equal to the sum of the two right-triangle sides.  Thus, any vector can be divided into two vectors parallel and perpendicular to another line. The vector projection , from Part (d), is the portion of parallel to . So the sum of can be expressed as the parallel and perpendicular terms:  We want to find the part of perpendicular to , so we can rearrange the equation to find:     Nice effort if you worked through all the parts of this example. Graphically the results for parts (b), (d), and (e) are shown in this diagram.   The portion of vector F which is parallel and perpendicular to anchor AB is shown, in addition to the angle θ between the vectors F and AB.      "
},
{
  "id": "dot_products_2D-2",
  "level": "2",
  "url": "dot_products_2D.html#dot_products_2D-2",
  "type": "Key Questions",
  "number": "2.7",
  "title": "",
  "body": "  What are dot products used for?  What does it mean when the dot product of two vectors is zero?  How do you use a dot product to find the angle between two vectors?  What does it mean when the scalar component of the projection is negative?   "
},
{
  "id": "dot_products_2D-3-1",
  "level": "2",
  "url": "dot_products_2D.html#dot_products_2D-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product cross product scalar product vector product "
},
{
  "id": "Chapter_02_calculation-of-dot-product-6",
  "level": "2",
  "url": "dot_products_2D.html#Chapter_02_calculation-of-dot-product-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Commutative. Associative. Distributive. "
},
{
  "id": "intro_2D_dot_products",
  "level": "2",
  "url": "dot_products_2D.html#intro_2D_dot_products",
  "type": "Example",
  "number": "2.7.1",
  "title": "Find Vector Magnitude using the Dot Product.",
  "body": " Find Vector Magnitude using the Dot Product   Find the magnitude of vector with components , and           "
},
{
  "id": "Chapter_02-example-angle-between-orthogonal-unit-vectors",
  "level": "2",
  "url": "dot_products_2D.html#Chapter_02-example-angle-between-orthogonal-unit-vectors",
  "type": "Example",
  "number": "2.7.2",
  "title": "Angle between Orthogonal Unit Vectors.",
  "body": " Angle between Orthogonal Unit Vectors   Find the angle between and .        This shows that and are perpendicular to each other.   "
},
{
  "id": "Chapter_02-example-angle-between-two-vectors",
  "level": "2",
  "url": "dot_products_2D.html#Chapter_02-example-angle-between-two-vectors",
  "type": "Example",
  "number": "2.7.3",
  "title": "Angle between Two Vectors.",
  "body": " Angle between Two Vectors   Find the angle between and .           "
},
{
  "id": "vector-projections-2",
  "level": "2",
  "url": "dot_products_2D.html#vector-projections-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection "
},
{
  "id": "vector-projections-4",
  "level": "2",
  "url": "dot_products_2D.html#vector-projections-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector projection scalar projection "
},
{
  "id": "ggb_dot_product",
  "level": "2",
  "url": "dot_products_2D.html#ggb_dot_product",
  "type": "Figure",
  "number": "2.7.4",
  "title": "",
  "body": " Vector projection in two dimensions.   "
},
{
  "id": "vector_dot_product_3d",
  "level": "2",
  "url": "dot_products_2D.html#vector_dot_product_3d",
  "type": "Figure",
  "number": "2.7.5",
  "title": "",
  "body": " Vector projections in three dimensions.   "
},
{
  "id": "dot-product-math-3-2",
  "level": "2",
  "url": "dot_products_2D.html#dot-product-math-3-2",
  "type": "Figure",
  "number": "2.7.6",
  "title": "",
  "body": " Perpendicular and parallel components of .    To find the component of vector B perpendicular to vector A, first find the vector projection of B on A, then subtract that from B. What remains is the perpendicular component.   "
},
{
  "id": "Chapter_02-Dot-products",
  "level": "2",
  "url": "dot_products_2D.html#Chapter_02-Dot-products",
  "type": "Example",
  "number": "2.7.7",
  "title": "Dot Products.",
  "body": " Dot Products   A cable pulls with tension on a long anchor embedded in a concrete wall. The anchor lies in the plane at an angle from the axis.   A cable force pulls on an anchor ring centered on xyz axis origin.   For the system above, compute the following:    Find the dot product of the cable tension and the anchor     When you know the magnitudes and angle between two vectors, it is easiest to use the second dot product equation , but in this case it will be easier to find the components of and use .     The units of a dot product are the product of the units of the two vectors.    Find the angle between the cable tension and the anchor .     With the dot product known from the previous step, we can use the to find the angle between force and anchor.  The magnitude of was given but we need to calculate the magnitude of ,     Note that correctly corresponds to the negative dot product and indicates that the two vectors generally oppose each other.    Find the scalar projection of the the cable tension onto the anchor .     Recall from that the scalar projection is the scalar component of one vector in the direction of another, in other words, how much of one vector is parallel to another. This is one of the most direct and practical applications of the dot product.  The dot product of with gives the product of the length of the anchor and the scalar projection of the tension in the direction of the anchor. and has units of N-m.  To find the projection, divide the dot product by the magnitude of     Alternately, you can apply and calculate the calculate the dot product of force vector with the unit vector .  First, find the unit vector Or, since is in the plane with its direction defined by the , the unit vector is found . Then find the projection     Find the vector projection of the cable tension onto the anchor .     The vector projection is the scalar projection value multiplied by a unit direction vector to turn it a vector. So we multiply the scalar projection with the unit vector of to compute the vector projection of onto .       Find the vector portion of cable tension perpendicular to the anchor .     Recall that a two-dimensional vector can be represented by the sum of two perpendicular components. In the same way, a right triangle can be represented by a vector along the hypotenuse equal to the sum of the two right-triangle sides.  Thus, any vector can be divided into two vectors parallel and perpendicular to another line. The vector projection , from Part (d), is the portion of parallel to . So the sum of can be expressed as the parallel and perpendicular terms:  We want to find the part of perpendicular to , so we can rearrange the equation to find:     Nice effort if you worked through all the parts of this example. Graphically the results for parts (b), (d), and (e) are shown in this diagram.   The portion of vector F which is parallel and perpendicular to anchor AB is shown, in addition to the angle θ between the vectors F and AB.    "
},
{
  "id": "cross-product-math",
  "level": "1",
  "url": "cross-product-math.html",
  "type": "Section",
  "number": "2.8",
  "title": "Cross Products",
  "body": " Cross Products    How is a cross product different than a dot product?  What is a determinant?  What defines a right-handed Cartesian coordinate system?  How do you use the cross-product circle to find the cross product of two unit vectors?     The vector cross product is a multipliation operation applied to two vectors which produces a third mutually perpendicular vector as a result. It's sometimes called the vector product to emphasize this and to distinguish it from the dot product which produces a scalar result. The symbol is used to indicate this operation.  Cross products are used in mechanics to find the moment of a force about a point.   Direction of a cross product.    The cross product is a vector multiplication process defined by . The result is a vector mutually perpendicular to both with a sense determined by the right-hand rule. If and are in the plane, this is . The operation is not commutative, in fact reversing the order introduces a negative sign. .  The magnitude of the cross product is the product of the perpendicular component of with the magnitude of . This is the area of the parallelogram formed by vectors and . The magnitude of the cross product is zero if and are parallel, and it is maximum when they are perpendicular. The magnitude of the cross product of two perpendicular unit vectors is one.  Notice that the cross product equation are similar to the dot product, except that is used rather than and the product includes a unit vector making the result a vector. This unit vector is simple to find in a two-dimensional problem as it will always be perpendicular to the page, but for three-dimensional cross products a vector determinant is used, as discussed in .    Direction of the Vector Cross Product  The direction of a cross product is determined by the right-hand rule. There are two ways to apply the right-hand rule, the three-finger method, and the point-and-curl method. You don't need both, but you will need to master at least one to find the direction of cross products.  The three-finger method uses the fact that your extended index finger, middle finger, and thumb are all roughly mutually perpendicular. If you align your index finger with the first vector and your middle finger with the second, then your thumb will point in the direction of the cross product. Alternately, if you align your thumb with the first vector and your index finger with the second, your middle finger will point in the direction of the cross-product.    Right-hand rule using three fingers.    Technique 1   Using the right hand, point your index finger straight out, the thumb up (like giving a thumbs-up), and the middle finger pointed perpendicular to the pointer finger and thumb. The index represents the first vector you are crossing, the middle finger represents the second vector you are crossing, and the thumb represents the cross product of the two vectors.         Technique 2   Alternatively, the first vector can be your thumb, the second your index finger, and the middle finger is the direction of the cross product.          The point-and-curl method involves placing your right hand flat with your fingertips pointing in the direction of the the first vector. Then rotate your hand until the second vector is can curl your fingers around your thumb. In this position, your thumb defines the direction of the cross product.   Right-hand rule using the point-and-curl technique.    Step one   Image of a right hand held out flat, where the first vector you are crossing is in the direction of the fingers held out flat.   Dan Baker  CC-BY-SA      Step one   Image of a right hand held out flat, where the first vector you are crossing is in the direction of the fingers held out flat. If the fingers were curled in, and the thumb pointed up, then the curled fingers are in the direction of the second vector you are crossing and the thumb in the direction of cross product.   Dan Baker  CC-BY-SA         Cross Product of Unit Vectors  The demonstrates how you apply these techniques to find the cross product of . Assuming the axis points right and the axis points up, the cross product points in the positive direction. Recalling that the magnitude of the cross product of two peperpedicular unit vectors is one, we conclude that .   Crossing into to get .    Using the three-finger method.   Image crossing i-hat into j-hat resulting in k-hat using both the three-finger technique and point-and-curl methods.   Dan Baker  CC-BY-SA      Using the point-and-curl method.   Image crossing i-hat into j-hat resulting in k-hat using both the three-finger technique and point-and-curl methods.   Dan Baker  CC-BY-SA       Similarly, the cross products of the other pairs of vectors are:    An alternate way to remember this is to use the cross-product circle shown. For example when you cross with you are going in the positive (counter-clockwise) direction around the blue inner circle and thus the answer is . But when you cross into you go in the negative (clockwise) direction around the circle and thus get a . Remember that the order of cross products matter. If you put the vectors in the wrong order you will introduce a sign error.   Unit vector cross product circle.   An alternate way to remember this is to use the cross-product circle in this image. i is shown at the top of the circle, j is shown at the bottom left of the circle (120 degrees from i), and k is shown at the bottom right of the circle (120 degrees from j). Curved blue arrows are drawn from i to j to k (counter-clockwise) and indicated as the positive (+) direction). An outer circle is formed by red curved arrows that are drawn from k to j to i (clockwise) and indicated with the negative direction. For example when you cross i with j you are going in the positive (counter-clockwise) direction around the blue inner circle and thus the answer is +k. But when you cross j into i you go in the negative (clockwise) direction around the circle and thus get a −k. Remember that the order of cross products matters. If you put the vectors in the wrong order, you will introduce a sign error.   Dan Baker  CC-0      If you have any negative unit vectors it is easiest to pull out the negative signs before you take the cross product, like the following.    Cross Product of Arbitrary Vectors  The cross product of two arbitrary three-dimensional vectors can be calculated by evaluating the determinant of this matrix.  Here, the first row contains the unit vectors, the second row contains the components of , and the third row, the components of . The determinant of this matrix is evaluated using the method of cofactors, as follows . Each term contains a determinant which is evaluated with the formula .  After simplifying, the resulting formula for a three-dimensional cross product is .  In practice, the easiest way to remember this equation is to use the augmented determinant below, where the first two columns have been copied and placed after the determinant. The cross product is then calculated by adding the product of the red diagonals and subtracting the product of blue diagonals. The result is identical to .   Augmented determinant   The image illustrates what is stated in the equation (2.8.6) which defines the cross product.   William Haynes  CC-BY-SA     In two dimensions, vectors and have no components, so reduces to . This equation produces the same result as equation and you may use it if it is more convenient.   2D Cross Product   The two vectors and shown lie in the plane. Determine the cross product .   A force of A acts from the origin with a magnitude of 60 N along the +x axis (0 degrees). A vector B acts from the origin with a magnitude of 40 N at an angle of -45 degrees from the positive x-axis.   William Haynes  CC-BY-SA           In this solution we will apply equation .     The direction of the cross product is determined by applying the right-hand rule. With the right hand, rotating towards we find that our thumb points into the plane, so the direction of is .       In this solution we will use .  First, establish a coordinate system with the origin and with the axis aligned with , then find the rectangular components and apply the cross product equation.      3D Cross Product   Find the cross product of and .  Here, we are crossing a distance and with a force This calculation is equivalent to finding the moment about a point caused by force acting distance from . You will learn about moments in .         To solve, set up the augmented determinant and evaluate it by adding the left-to-right diagonals and subtracting the right-to-left diagonals using equation .     Thus, the force creates a three-dimensional rotational moment equal to    Calculating three-dimensional cross products by hand is tedious and error-prone. Whenever you can, you should use technology to do the grunt work for you and focus on the meaning of the results. In this solution, we will use an embedded Sage calculator to calculate the cross product. This same calculator can be used to do other problems.  Given: .  and are defined in the first two lines, and A.cross_product(B) is the expression to be evaluated. Click Evaluate to see the result. You'll have to work out the correct units for yourself.   Try changing the third line to B.cross_product(A) . What changes?     "
},
{
  "id": "cross-product-math-2",
  "level": "2",
  "url": "cross-product-math.html#cross-product-math-2",
  "type": "Key Questions",
  "number": "2.8",
  "title": "",
  "body": "  How is a cross product different than a dot product?  What is a determinant?  What defines a right-handed Cartesian coordinate system?  How do you use the cross-product circle to find the cross product of two unit vectors?   "
},
{
  "id": "cross-product-math-3-1",
  "level": "2",
  "url": "cross-product-math.html#cross-product-math-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cross product vector product "
},
{
  "id": "cross-product-math-3-3",
  "level": "2",
  "url": "cross-product-math.html#cross-product-math-3-3",
  "type": "Figure",
  "number": "2.8.1",
  "title": "",
  "body": " Direction of a cross product.   "
},
{
  "id": "Chapter_02-direction-of-unit-vectors-2",
  "level": "2",
  "url": "cross-product-math.html#Chapter_02-direction-of-unit-vectors-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule. "
},
{
  "id": "rhr_cross3",
  "level": "2",
  "url": "cross-product-math.html#rhr_cross3",
  "type": "Figure",
  "number": "2.8.2",
  "title": "",
  "body": " Right-hand rule using three fingers.    Technique 1   Using the right hand, point your index finger straight out, the thumb up (like giving a thumbs-up), and the middle finger pointed perpendicular to the pointer finger and thumb. The index represents the first vector you are crossing, the middle finger represents the second vector you are crossing, and the thumb represents the cross product of the two vectors.         Technique 2   Alternatively, the first vector can be your thumb, the second your index finger, and the middle finger is the direction of the cross product.         "
},
{
  "id": "rhr_cross2",
  "level": "2",
  "url": "cross-product-math.html#rhr_cross2",
  "type": "Figure",
  "number": "2.8.3",
  "title": "",
  "body": " Right-hand rule using the point-and-curl technique.    Step one   Image of a right hand held out flat, where the first vector you are crossing is in the direction of the fingers held out flat.   Dan Baker  CC-BY-SA      Step one   Image of a right hand held out flat, where the first vector you are crossing is in the direction of the fingers held out flat. If the fingers were curled in, and the thumb pointed up, then the curled fingers are in the direction of the second vector you are crossing and the thumb in the direction of cross product.   Dan Baker  CC-BY-SA      "
},
{
  "id": "Chapter_02-cross-product-of-unit-vectors-3",
  "level": "2",
  "url": "cross-product-math.html#Chapter_02-cross-product-of-unit-vectors-3",
  "type": "Figure",
  "number": "2.8.4",
  "title": "",
  "body": " Crossing into to get .    Using the three-finger method.   Image crossing i-hat into j-hat resulting in k-hat using both the three-finger technique and point-and-curl methods.   Dan Baker  CC-BY-SA      Using the point-and-curl method.   Image crossing i-hat into j-hat resulting in k-hat using both the three-finger technique and point-and-curl methods.   Dan Baker  CC-BY-SA      "
},
{
  "id": "cross_product_circle_EE",
  "level": "2",
  "url": "cross-product-math.html#cross_product_circle_EE",
  "type": "Figure",
  "number": "2.8.5",
  "title": "",
  "body": " Unit vector cross product circle.   An alternate way to remember this is to use the cross-product circle in this image. i is shown at the top of the circle, j is shown at the bottom left of the circle (120 degrees from i), and k is shown at the bottom right of the circle (120 degrees from j). Curved blue arrows are drawn from i to j to k (counter-clockwise) and indicated as the positive (+) direction). An outer circle is formed by red curved arrows that are drawn from k to j to i (clockwise) and indicated with the negative direction. For example when you cross i with j you are going in the positive (counter-clockwise) direction around the blue inner circle and thus the answer is +k. But when you cross j into i you go in the negative (clockwise) direction around the circle and thus get a −k. Remember that the order of cross products matters. If you put the vectors in the wrong order, you will introduce a sign error.   Dan Baker  CC-0    "
},
{
  "id": "vector-cross-products-2",
  "level": "2",
  "url": "cross-product-math.html#vector-cross-products-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "determinant "
},
{
  "id": "augmented-determinant",
  "level": "2",
  "url": "cross-product-math.html#augmented-determinant",
  "type": "Figure",
  "number": "2.8.6",
  "title": "",
  "body": " Augmented determinant   The image illustrates what is stated in the equation (2.8.6) which defines the cross product.   William Haynes  CC-BY-SA    "
},
{
  "id": "Chapter_02-example-2-d-cross-product",
  "level": "2",
  "url": "cross-product-math.html#Chapter_02-example-2-d-cross-product",
  "type": "Example",
  "number": "2.8.7",
  "title": "2D Cross Product.",
  "body": " 2D Cross Product   The two vectors and shown lie in the plane. Determine the cross product .   A force of A acts from the origin with a magnitude of 60 N along the +x axis (0 degrees). A vector B acts from the origin with a magnitude of 40 N at an angle of -45 degrees from the positive x-axis.   William Haynes  CC-BY-SA           In this solution we will apply equation .     The direction of the cross product is determined by applying the right-hand rule. With the right hand, rotating towards we find that our thumb points into the plane, so the direction of is .       In this solution we will use .  First, establish a coordinate system with the origin and with the axis aligned with , then find the rectangular components and apply the cross product equation.    "
},
{
  "id": "Chapter_02-example-3-d-cross-product",
  "level": "2",
  "url": "cross-product-math.html#Chapter_02-example-3-d-cross-product",
  "type": "Example",
  "number": "2.8.8",
  "title": "3D Cross Product.",
  "body": " 3D Cross Product   Find the cross product of and .  Here, we are crossing a distance and with a force This calculation is equivalent to finding the moment about a point caused by force acting distance from . You will learn about moments in .         To solve, set up the augmented determinant and evaluate it by adding the left-to-right diagonals and subtracting the right-to-left diagonals using equation .     Thus, the force creates a three-dimensional rotational moment equal to    Calculating three-dimensional cross products by hand is tedious and error-prone. Whenever you can, you should use technology to do the grunt work for you and focus on the meaning of the results. In this solution, we will use an embedded Sage calculator to calculate the cross product. This same calculator can be used to do other problems.  Given: .  and are defined in the first two lines, and A.cross_product(B) is the expression to be evaluated. Click Evaluate to see the result. You'll have to work out the correct units for yourself.   Try changing the third line to B.cross_product(A) . What changes?   "
},
{
  "id": "Chapter_02-11",
  "level": "1",
  "url": "Chapter_02-11.html",
  "type": "Exercises",
  "number": "2.9",
  "title": "Exercises (Ch. 2)",
  "body": " Exercises (Ch. 2)   "
},
{
  "id": "ch3-intro",
  "level": "1",
  "url": "ch3-intro.html",
  "type": "Section",
  "number": "3.1",
  "title": "Equilibrium",
  "body": " Equilibrium  Engineering statics is the study of rigid bodies in equilibrium so it's appropriate to begin by defining what we mean by rigid bodies and what we mean by equilibrium .  A body is an object, possibly made up of many parts, which may be examined as a unit. In statics, we consider the forces acting on the object as a whole and also examine it in greater detail by studying each of its parts, which are bodies in their own right. The choice of the body is an engineering decision based on what we are interested in finding out. We might, for example, consider an entire high-rise building as a body for the purpose of designing the building's foundation, and later consider each column and beam of the structure to ensure that they are strong enough to perform their individual roles.  A rigid body is a body that doesn't deform under load, that is to say, an object which doesn't bend, stretch, or twist when forces are applied to it. It is an idealization or approximation because no objects in the real world behave this way; however, this simplification still produces valuable information. You will drop the rigid body assumption and study deformation, stress, and strain in a later course called Strength of Materials or Mechanics of Materials. In that course, you will perform analysis of non-rigid bodies, but each problem you do there will begin with the rigid body analysis you will learn to do here .  A body in equilibrium is not accelerating. As you learned in physics, acceleration is velocity's time rate of change and is a vector quantity. For linear motion, .  For an object in equilibrium which implies that the body is either stationary or moving with a constant velocity .  The acceleration of an object is related to the net force acting on it by Newton's Second Law .  So for the special case of static equilibrium Newton's Law becomes .  This simple equation is one of the two foundations of engineering statics.  There are several ways to think about this equation. Reading it from left to right it says that if all the forces acting on a body sum to zero, then the body will be in equilibrium . If you read it from right to left it says that if a body is in equilibrium, then all the forces acting on the body must sum to zero . Both interpretations are equally valid but we will be using the second one more often. In a typical problem equilibrium of a body implies that the forces sum to zero, and we use that fact to find the unknown forces which make it so. Remember that we are talking about vector addition here, so the sums of the forces must be calculated using the rules of vector addition; you won't get correct answers if you can't add vectors!  We'll be using all of the different vector addition techniques introduced in , which may lead to some confusion. It doesn't matter, mathematically, which technique you use but part of the challenge and reward of statics is learning to select the best tool for the job at hand; to select the simplest, easiest, fastest, or clearest way to get to the solution. You'll do best in this course if can use multiple approaches to solve the same problem.  In we will add another requirement for equilibrium, namely equilibrium equation which says the forces which cause rotational motion and angular acceleration also must sum to zero, but for the problems of this chapter the only condition we'll need for equilibrium is .  "
},
{
  "id": "ch3-intro-3",
  "level": "2",
  "url": "ch3-intro.html#ch3-intro-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "body "
},
{
  "id": "ch3-intro-4",
  "level": "2",
  "url": "ch3-intro.html#ch3-intro-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rigid body "
},
{
  "id": "ch3-intro-5",
  "level": "2",
  "url": "ch3-intro.html#ch3-intro-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium "
},
{
  "id": "ch3-intro-7",
  "level": "2",
  "url": "ch3-intro.html#ch3-intro-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's Second Law "
},
{
  "id": "ch3-1d-particles",
  "level": "1",
  "url": "ch3-1d-particles.html",
  "type": "Section",
  "number": "3.2",
  "title": "Particles",
  "body": " Particles  We'll begin our study of Equilibrium with the simplest possible object in the simplest possible situation a particle in a one-dimensional coordinate system . Also, in this chapter and the next all forces will be represented as concentrated forces . In later sections, we will address more complicated situations, higher dimensions, and distributed forces, but beginning with very simple situations will help you to develop engineering sense and problem-solving skills which will be useful later.  The defining characteristic of a particle is that all forces that act on it are coincident Two lines are coincident when one lies on top of the other. or concurrent Two or more lines are concurrent if they intersect at a single point. , not that it is small. Forces are coincident if they have the same line of action, and concurrent if they intersect at a point. The moon, earth and sun can all be treated as particles, but we probably won't encounter them in statics since they're not in equilibrium. Forces are coincident\/concurrent if their lines of action all intersect at a single, common point. Two or more forces are also considered concurrent if they share the same line of action. One practical consequence of this is that particles are never subjected to forces that cause rotation. So a see-saw, for example, is not a particle because the weights of the children tend We say tend to cause rotation because in a static's context, all objects are static so no actual rotation occurs. to cause rotation.  Another consequence of concurrent forces is that Equation is the only equilibrium equation that applies. This vector equation can be used to solve for a maximum of one unknown per dimension. If you find yourself trying to solve a two-dimensional particle equilibrium problem and you are seeking more than two unknowns, it's likely that you have missed something and need to re-read the question.  Another simplification we will be making is to treat all forces as concentrated . Concentrated forces act at a single point, have a well-defined line of action, and can be represented with an arrow in other words, they are vectors. Real forces don't actually act at a single mathematical point but concentrating them is intuitive and will be justified in a later chapter . You're already familiar with the concept if you have ever placed all the weight of an object at its center of gravity.  "
},
{
  "id": "ch3-1d-particles-2",
  "level": "2",
  "url": "ch3-1d-particles.html#ch3-1d-particles-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "particle one-dimensional coordinate system concentrated forces "
},
{
  "id": "ch3-1d-particles-5",
  "level": "2",
  "url": "ch3-1d-particles.html#ch3-1d-particles-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "concentrated "
},
{
  "id": "CH03-1d-particles",
  "level": "1",
  "url": "CH03-1d-particles.html",
  "type": "Section",
  "number": "3.3",
  "title": "1D Particle Equilibrium",
  "body": " 1D Particle Equilibrium   A simple case  Consider the weight suspended by a rope shown in . Diagrams of this type are called space diagrams ; they show the objects as they exist in space.  In mechanics we are interested in studying the forces acting on objects and in this course, the objects will be in equilibrium. The best way to do this is to draw a diagram that focuses on the forces acting on the object, not the mechanisms that hold it in place. We call this type of diagram a free-body diagram because it shows the object disconnected or freed from its supporting mechanisms. You can see the free-body diagram for this situation by moving the slider in the interactive to position two. This shows that there are two forces acting on the object; the force of the rope holding it up, and the weight of the object which is trying to pull it to earth, which we treat as acting at its center of gravity.   The actual shape of the weight is not important to us, so it can simply be represented with a dot, as shown when the view control is in position three. The forces have been slid along their common line of action until they both act on the dot, which is an example of an equivalent transformation called the Principle of Transmissibility. This diagram in view three is completely sufficient for this situation.   A suspended weight     Drawing free-body diagrams can be surprisingly tricky. The reason for this is that you must identify all the forces acting on the object and correctly represent them on the free-body diagram. If you fail to account for all the forces, include additional ones, or represent them incorrectly, your analysis will surely be wrong.  So what kind of analysis can we do here? Admittedly not much. We can find the tension in the rope caused by a particular weight and use it to select an appropriately strong rope, or we can determine the maximum weight a particular rope can safely support.  The actual analysis is so trivial that you've probably already done it in your head, nevertheless several ways to approach it will be shown next.  In the vector approach we will use the equation of equilibrium .   1D Vector Addition   Find the relationship between the tension in the rope and the suspended weight for the system of .       We learn that the tension equals the weight.     The free-body diagram shows two forces acting on the particle, and since the particle is in equilibrium they must add to zero.     We conclude that force is equal and opposite to , that is, since the weight is acting down, the rope acts with the same magnitude but up.  Tension is the magnitude of the rope's force. Recall that the magnitude of a vector is always a positive scalar. We use normal (non-bold) typefaces or absolute value bars surrounding a vector to indicate its magnitude. For any force , .  To find how the tension is related to , take the absolute value of both sides       We can also formulate this example in terms of unit vectors. Recall that is the unit vector that points up. It has a magnitude of one with no units associated. So in terms of unit vector , and .   1D Vector Addition using unit vectors   Find the relation between the tension and weight for the system of using unit vectors.          Express the forces in terms of their magnitudes and the unit vector then proceed as before,       In the previous example, the unit vector completely dropped out of the equation leaving only the coefficients of . This will be the case whenever you add vectors which all act along the same line of action.  The coefficients of , , and are known as the scalar components . A scalar component times the associated unit vector is a force vector.  When you use scalar components, the forces are represented by scalar values and the equilibrium equations are solved using normal algebraic addition rather than vector addition. This leads to a slight simplification of the solution as shown in the next example.   1D Vector Addition using scalar components   Find the relation between the tension and weight for the system of using scalar components.       Unsurprisingly, we get the same result.      The forces in this problem are and , so the corresponding scalar components are .  Adding scalar components gives,      Unsurprisingly, we get the same result.      Scalar Components  The scalar component of a vector is a signed number which indicates the vector's magnitude and sense , and is usually identified by a symbol with a subscript which indicates the line of action of the vector.  So for example, is a scalar component. We can tell it's not a vector because it is not bold. is the magnitude of the associated vector; the subscript indicates that the force acts in the direction, in other words it acts on a line of action which is parallel to the axis; and the (implied) positive sign means that the vector points towards the positive end of the axis towards positive infinity. So a scalar component, while not a vector, contains all the information necessary to completely describe and draw the corresponding vector. Be careful not to confuse scalar components with vector magnitudes. A force with a magnitude of can point in any direction, but can never have a negative magnitude.  Scalar components can be added together algebraically, but only if they act in the same direction. It makes no sense to add to . If that's what you want to do, first you must convert the scalar components to vectors, then add them according to the rules of vector addition.   1D Scalar Addition   If and = , find the magnitude and direction of their resultant .         Start by sketching the two forces. The subscripts indicate the line of action of the force, and the sign indicates the direction along the line of action. A negative points towards the negative end of the axis.          William Haynes  CC-BY-SA     is the scalar component of the resultant .  The negative sign on the result indicates that the resultant force acts to the left.     2D Scalar Addition   If = and = , find the magnitude and direction of their resultant .       In this example the scalar components have different subscripts indicating that they act along different lines of action, and this must be accounted for when they are added together.  Make a sketch of the two vectors and add them using the parallelogram rule. In this case, the parallelogram is a rectangle, so right-triangle trig is appropriate.    William Haynes  CC-BY-SA      is measured from the negative axis. The direction of from the positive axis is , so       Two-force Bodies  As you might expect from the name, a two-force body is a body with two forces acting on it, like the weight just discussed. As we just saw, in order for a two-force body to be in equilibrium the two forces must add to zero. There are only three possible ways that this can happen:  The two forces must either  share the same line of action, have the same magnitude, and point away from each other, or  share the same line of action, have the same magnitude, and point towards each other, or  both forces have zero magnitude.    When two forces have the same magnitude but act in diametrically opposite directions, we say that they are equal-and-opposite . When equal and opposite forces act on an object and they point towards each other we say that the object is in compression , when they point away from each other the object is in tension . Tension and compression describe the internal state of the object.   Examples of two-force bodies   Two force bodies have two forces with the same magnitude but acting in diametrically opposite directions.    Did you notice that last three examples in did not include the object's weight? These are simplifictions that ignore the object's weight to make them two-force bodies. If the object's weight was included, it would be a three-force body. This approximation is justifiable when the object's weight is small in comparison with the tensile or compressive forces. In this case, we say that the weight is negligable , small enough to neglect. Also note that all these examples show single forces acting at each point. If several forces act at a point, they should be combined into a single resultant force acting there.  Two force bodies appear frequently in multipart structures and machines which will be covered in . Some examples of two force bodies are struts and linkages, ropes, cables and guy wires, and springs.   Locating the Center of Gravity  As we will see in , the center of gravity is the point where all the weight of an object can be considered to be concentrated.  An object suspended by a cable or a frictionless pin is a two-force body. When hung freely it will naturally rotate until its center of gravity lies directly beneath the support point to ensure that the lifting force and the weight share the same line of action. This means that the center of gravity of an object can be found by suspending it from several different points, and noting intersection of lines drawn straight down from the hook (like a plumb bob).  In practical terms, to safely lift a heavy object with a chain fall or crane, you must always ensure that the hook is directly above the center of gravity before hoisting the load. The load will be unstable if lifted from any other point.     Tug of War   Marines and Airmen at Goodfellow Air Force Base are competing in a tug of war and have reached a stalemate. The Marines are pulling with a force of . How hard are the Airmen pulling? What is the tension in the rope?   Marines and Airmen at Goodfellow Air Force Base competing in a tug of war.   US Air Force photo\/Staff Sgt. Laura R. McFarlane   CC-0    This is a simple question, but students often get it wrong at first.    The tension in the rope is . Both teams are pulling with the same force.       Assumptions  A free-body diagram of the rope is shown.      We'll solve this with scalar components because there's no need for the additional complexity of the vector approaches in this simple situation.  We'll align the axis with the rope with positive to the right as usual to establish a coordinate system.  Assume that the pull of each team can be represented by a single force. Let force be supplied by the Marines and force by the Airmen; call the tension in the rope .  Assume that the weight of the rope is negligible; then the rope can be considered a particle because both forces lie along same line of action.    Givens  .    Procedure  Since they're stalemated we know that the rope is in equilibrium.  Applying the equation of equilibrium gives:     We find out that both teams pull with the same force. This was probably obvious without drawing the free-body diagram or solving the equilibrium equation.  It may seem equally obvious that if both teams are pulling with in opposite directions that the tension in the rope must be . This is wrong however.  The tension in the rope is an example of an internal force and in order to learn its magnitude we need a free-body diagram which includes force . To expose the internal force we take an imaginary cut through the rope and draw (or imagine) a free-body diagram of either half of the rope.      The correct answer is easily seen to be .        Hanging Weight     The wire spool being lifted into the truck consists of of three strand medium voltage (5 kV) 1\/0 AWG electrical power cable with a 195 amp capacity at 90 C, weighing 927 kg\/km, on a steel reel.  How much weight is supported by the hook and high tension polymer lifting sling?    A wire spool being lifted into a truck.             The entire weight of the wire and the spool is supported by the hook and sling.  Remember that weight is not mass and mass is not force. The total weight is found by multiplying the total mass by the gravitational constant .         How can we apply the principles of mechanics in the two previous examples if the rope and the sling are clearly not rigid bodies?    They are not rigid, but they are inextensible and in tension. Under these conditions they don't change shape, so we can treat them as rigid. If the force were to change direction and put either into compression, our assumptions and analysis would fail. That is why tug of war involves pulling and not pushing.      General Procedure  The general procedure for solving one, two, or three-dimensional particle equilibrium problems is essentially the same. Start with the 5-step method for creating a free-body diagram and solve for your unknowns using your equilibrium equations.  Draw a Free-Body Diagram    Select and isolate the particle. The free-body in free-body diagram means that a concurrent force particle or connection must be isolated from the supports physically holding it in place. This means creating a separate free-body diagram from your problem sketch.  Establish a coordinate system. This step is simple for one-dimensional problems: just label a positive direction for the forces.  Identify all loads. Include force vectors on your free-body diagram representing each applied load pushing or pulling the body, in addition to the body's weight, if it is non-negligible. Every vector should have a descriptive variable name and a clear arrowhead indicating its direction.  Identify all reactions. Reactions represent the resistance of the physical supports you cut away by isolating the body in step 1. All particle supports are two-force members that result in tension or compression forces. Label each reaction with a descriptive variable name and a clear arrowhead.  Label the diagram. Verify that every force is labeled with either a value or a symbolic name if the value is unknown. Your final free-body diagram should be a stand-alone presentation and is the basis of your equilibrium equations.    Create and Solve Equilibrium Equations    Write the equilibrium equation. Now represent your free-body diagram as an equilibrium equation. Your computation should start with the governing equation, like .  Solve for unknown. Use algebra to simplify the equilibrium equation and solve for the unknown value. Write the unit of your answer. All answers in engineering have units unless you prove that they don't. Finally, underline or box your answers.  Check your work. Do the results seem reasonable given the situation? Have you included appropriate units?     "
},
{
  "id": "Chapter_03-a-simple-case-2",
  "level": "2",
  "url": "CH03-1d-particles.html#Chapter_03-a-simple-case-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "space diagrams "
},
{
  "id": "suspended-weight",
  "level": "2",
  "url": "CH03-1d-particles.html#suspended-weight",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " A suspended weight   "
},
{
  "id": "one-D-Vector-Addition",
  "level": "2",
  "url": "CH03-1d-particles.html#one-D-Vector-Addition",
  "type": "Example",
  "number": "3.3.2",
  "title": "1D Vector Addition.",
  "body": " 1D Vector Addition   Find the relationship between the tension in the rope and the suspended weight for the system of .       We learn that the tension equals the weight.     The free-body diagram shows two forces acting on the particle, and since the particle is in equilibrium they must add to zero.     We conclude that force is equal and opposite to , that is, since the weight is acting down, the rope acts with the same magnitude but up.  Tension is the magnitude of the rope's force. Recall that the magnitude of a vector is always a positive scalar. We use normal (non-bold) typefaces or absolute value bars surrounding a vector to indicate its magnitude. For any force , .  To find how the tension is related to , take the absolute value of both sides      "
},
{
  "id": "One-D-Addition-unitvectors",
  "level": "2",
  "url": "CH03-1d-particles.html#One-D-Addition-unitvectors",
  "type": "Example",
  "number": "3.3.3",
  "title": "1D Vector Addition using unit vectors.",
  "body": " 1D Vector Addition using unit vectors   Find the relation between the tension and weight for the system of using unit vectors.          Express the forces in terms of their magnitudes and the unit vector then proceed as before,      "
},
{
  "id": "Chapter_03-a-simple-case-13",
  "level": "2",
  "url": "CH03-1d-particles.html#Chapter_03-a-simple-case-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar components "
},
{
  "id": "One-D-Addition-Scalar",
  "level": "2",
  "url": "CH03-1d-particles.html#One-D-Addition-Scalar",
  "type": "Example",
  "number": "3.3.4",
  "title": "1D Vector Addition using scalar components.",
  "body": " 1D Vector Addition using scalar components   Find the relation between the tension and weight for the system of using scalar components.       Unsurprisingly, we get the same result.      The forces in this problem are and , so the corresponding scalar components are .  Adding scalar components gives,      Unsurprisingly, we get the same result.   "
},
{
  "id": "scalar-components-2",
  "level": "2",
  "url": "CH03-1d-particles.html#scalar-components-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnitude sense "
},
{
  "id": "One-D-Scalar-Addition",
  "level": "2",
  "url": "CH03-1d-particles.html#One-D-Scalar-Addition",
  "type": "Example",
  "number": "3.3.5",
  "title": "1D Scalar Addition.",
  "body": " 1D Scalar Addition   If and = , find the magnitude and direction of their resultant .         Start by sketching the two forces. The subscripts indicate the line of action of the force, and the sign indicates the direction along the line of action. A negative points towards the negative end of the axis.          William Haynes  CC-BY-SA     is the scalar component of the resultant .  The negative sign on the result indicates that the resultant force acts to the left.   "
},
{
  "id": "Two-D-Scalar-Addition",
  "level": "2",
  "url": "CH03-1d-particles.html#Two-D-Scalar-Addition",
  "type": "Example",
  "number": "3.3.6",
  "title": "2D Scalar Addition.",
  "body": " 2D Scalar Addition   If = and = , find the magnitude and direction of their resultant .       In this example the scalar components have different subscripts indicating that they act along different lines of action, and this must be accounted for when they are added together.  Make a sketch of the two vectors and add them using the parallelogram rule. In this case, the parallelogram is a rectangle, so right-triangle trig is appropriate.    William Haynes  CC-BY-SA      is measured from the negative axis. The direction of from the positive axis is , so    "
},
{
  "id": "two-force-bodies-2",
  "level": "2",
  "url": "CH03-1d-particles.html#two-force-bodies-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "two-force body "
},
{
  "id": "two-force-bodies-4",
  "level": "2",
  "url": "CH03-1d-particles.html#two-force-bodies-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equal-and-opposite in compression in tension "
},
{
  "id": "two-force-body-examples",
  "level": "2",
  "url": "CH03-1d-particles.html#two-force-body-examples",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": " Examples of two-force bodies   Two force bodies have two forces with the same magnitude but acting in diametrically opposite directions.   "
},
{
  "id": "two-force-bodies-6",
  "level": "2",
  "url": "CH03-1d-particles.html#two-force-bodies-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "negligable "
},
{
  "id": "two-force-bodies-8",
  "level": "2",
  "url": "CH03-1d-particles.html#two-force-bodies-8",
  "type": "Thinking Deeper",
  "number": "3.3.8",
  "title": "Locating the Center of Gravity.",
  "body": " Locating the Center of Gravity  As we will see in , the center of gravity is the point where all the weight of an object can be considered to be concentrated.  An object suspended by a cable or a frictionless pin is a two-force body. When hung freely it will naturally rotate until its center of gravity lies directly beneath the support point to ensure that the lifting force and the weight share the same line of action. This means that the center of gravity of an object can be found by suspending it from several different points, and noting intersection of lines drawn straight down from the hook (like a plumb bob).  In practical terms, to safely lift a heavy object with a chain fall or crane, you must always ensure that the hook is directly above the center of gravity before hoisting the load. The load will be unstable if lifted from any other point.   "
},
{
  "id": "ex-tugofwar",
  "level": "2",
  "url": "CH03-1d-particles.html#ex-tugofwar",
  "type": "Example",
  "number": "3.3.9",
  "title": "Tug of War.",
  "body": " Tug of War   Marines and Airmen at Goodfellow Air Force Base are competing in a tug of war and have reached a stalemate. The Marines are pulling with a force of . How hard are the Airmen pulling? What is the tension in the rope?   Marines and Airmen at Goodfellow Air Force Base competing in a tug of war.   US Air Force photo\/Staff Sgt. Laura R. McFarlane   CC-0    This is a simple question, but students often get it wrong at first.    The tension in the rope is . Both teams are pulling with the same force.       Assumptions  A free-body diagram of the rope is shown.      We'll solve this with scalar components because there's no need for the additional complexity of the vector approaches in this simple situation.  We'll align the axis with the rope with positive to the right as usual to establish a coordinate system.  Assume that the pull of each team can be represented by a single force. Let force be supplied by the Marines and force by the Airmen; call the tension in the rope .  Assume that the weight of the rope is negligible; then the rope can be considered a particle because both forces lie along same line of action.    Givens  .    Procedure  Since they're stalemated we know that the rope is in equilibrium.  Applying the equation of equilibrium gives:     We find out that both teams pull with the same force. This was probably obvious without drawing the free-body diagram or solving the equilibrium equation.  It may seem equally obvious that if both teams are pulling with in opposite directions that the tension in the rope must be . This is wrong however.  The tension in the rope is an example of an internal force and in order to learn its magnitude we need a free-body diagram which includes force . To expose the internal force we take an imaginary cut through the rope and draw (or imagine) a free-body diagram of either half of the rope.      The correct answer is easily seen to be .      "
},
{
  "id": "wirespool",
  "level": "2",
  "url": "CH03-1d-particles.html#wirespool",
  "type": "Example",
  "number": "3.3.12",
  "title": "Hanging Weight.",
  "body": " Hanging Weight     The wire spool being lifted into the truck consists of of three strand medium voltage (5 kV) 1\/0 AWG electrical power cable with a 195 amp capacity at 90 C, weighing 927 kg\/km, on a steel reel.  How much weight is supported by the hook and high tension polymer lifting sling?    A wire spool being lifted into a truck.             The entire weight of the wire and the spool is supported by the hook and sling.  Remember that weight is not mass and mass is not force. The total weight is found by multiplying the total mass by the gravitational constant .      "
},
{
  "id": "non-rigid-question",
  "level": "2",
  "url": "CH03-1d-particles.html#non-rigid-question",
  "type": "Question",
  "number": "3.3.13",
  "title": "",
  "body": "  How can we apply the principles of mechanics in the two previous examples if the rope and the sling are clearly not rigid bodies?    They are not rigid, but they are inextensible and in tension. Under these conditions they don't change shape, so we can treat them as rigid. If the force were to change direction and put either into compression, our assumptions and analysis would fail. That is why tug of war involves pulling and not pushing.   "
},
{
  "id": "CH03-2d-particles",
  "level": "1",
  "url": "CH03-2d-particles.html",
  "type": "Section",
  "number": "3.4",
  "title": "2D Particle Equilibrium",
  "body": " 2D Particle Equilibrium   Introduction  In this section we will study situations where everything of importance occurs in a two-dimensional plane and the third dimension is not involved. Studying two-dimensional problems is worthwhile because they illustrate all the important principles of engineering statics while being easier to visualize and less mathematically complex.  We will normally work in the plane of the page, that is, a two-dimensional Cartesian plane with a horizontal axis and a vertical axis discussed in previously. This coordinate system can represent either the front, side, or top view of a system as appropriate. In some problems it may be worthwhile to rotate the coordinate system, that is, to establish a coordinate system where the and axes are not horizontal and vertical. This is usually done to simplify the mathematics by avoiding simultaneous equations.    General Procedure  The general procedure for solving two-dimensional particle equilibrium is a step up from solving , as you now need to find equilibrium in two independent directions. The major difference is that you must carefully find each independent vector component and then solve for the equilibrium in each component direction. The process follows the same five-step method for creating a free-body diagram, followed by steps to solve your equilibrium equations.  Draw a Free-Body Diagram:    Select and isolate the particle. The free-body in free-body diagram means that a concurrent force particle or connection must be isolated from the supports that are physically holding it in place. This means creating a separate free-body diagram from your problem sketch.  Establish a coordinate system. Draw a right-handed coordinate system to use as a reference for your equilibrium equations. Look ahead and select a coordinate system that minimizes the number of force components. This will simplify your vector algebra. The choice is technically arbitrary, but a good choice will simplify your calculations and reduce your effort.  Identify all loads. Add force vectors to your free-body diagram representing each applied load pushing or pulling the body, in addition to the body's weight, if it is non-negligible. If a force vector has a known direction, draw it. If its direction is unknown, assume one, and your later algebra will check your assumption. Every vector should have a descriptive variable name and a clear arrowhead indicating its direction.  Identify all reactions. Reactions represent the resistance of the physical supports you cut away by isolating the body in step 1. All particle supports are some type of two-force members with tension or compression reaction forces. These reactions will all be concurrent with the body loads from Step 2. Label each reaction with a descriptive variable name and a clear arrowhead. Again, if a vector's direction is unknown, just assume one.  Label the diagram. Verify that every dimension, angle, force, and moment is labeled with either a value or a symbolic name if the value is unknown. In our eyes, dimensioning is optional. Having the information needed for your calculations is helpful, but don't clutter the diagram up with unneeded details. Your final free-body diagram should be a stand-alone presentation and is the basis of your equilibrium equations.    Create and Solve Equilibrium Equations    Break vectors into components. Compute each force's and components using right-triangle trigonometry.  Write equilibrium equations. Now represent your free-body diagram as two equilibrium equations, and .  Count knowns and unknowns. At this point, you should have at most two unknown values. If you have more than two, reread the problem and look for overlooked information.  Solve for unknowns. Use algebra to simplify the equilibrium equations and solve for unknowns. All answers in Statics will have units - unless you have solved for a dimensionless value, like a friction coefficient. Finally, underline or box your answers.  Check your work. If you add the components of the forces, do they add to zero? Do the results seem reasonable given the situation? Have you included appropriate units?      Force Triangle Method  The force triangle method applies to situations where there are (exactly) three forces acting on a particle, and no more than two unknown magnitudes or directions.  If such a particle is in equilibrium then the three forces must add to zero. Graphically, if you arrange the force vectors tip-to-tail, they will form a closed, three-sided polygon, a triangle. This is illustrated in .   Free-Body Diagram and Force Triangle      Why do the forces always form a closed polygon?    Because their resultant is zero.    The force triangle is a graphical representation of the vector equilibrium equation . It can be used to solve for unknown values in multiple different ways, which will be illustrated in the next two examples. In We will use a graphical approach to find the forces causing equilibrium, and in we will use trigonometry to solve for the unknown forces mathematically.  In the next example we will use technology to draw a scaled diagram of the force triangle representing the equilibrium situation. We are using Geogebra to make the drawing, but you could use CAD, another drawing program, or even a ruler and protractor as you prefer. Since the diagram is accurately drawn, the lengths and angles represent the magnitudes and directions of the forces which hold the particle in equilibrium.   Frictionless Incline     A force is being applied to a block resting on a frictionless incline as shown. Determine the magnitude and direction of force and of the contact force on the bottom of the block.    A flat, frictionless surface is inclined at 25 degrees from the horizontal. A force is being applied to a block resting on the incline, pushing it up the incline, at an angle of 10 degrees below the horizontal.   William Haynes  CC-BY-SA               Assumptions  We must assume that the block is in equilibrium, that is, either motionless or moving at a constant velocity in order to use the equilibrium equations. We will represent the block's weight and the force between the incline and the block as concentrated forces. The force of the inclined surface on the block must act in a direction that is normal to the surface since it is frictionless and can't prevent motion along the surface.    Givens  The knowns here are the weight of the block, the direction of the applied force, and the slope of the incline. The slope of the incline provides the direction of the normal force.  The unknown values are the magnitudes of forces and .    Free-Body Diagram  You should always begin a statics problem by drawing a free-body diagram. It allows you to think about the situation, identify knowns and unknowns, and define symbols.  We define three symbols, , , and , representing the weight, normal force, and applied force respectively. The angles could be given symbols too, but since we know their values it isn't necessary.     William Haynes  CC-BY-SA     The free-body can be a quick sketch or an accurate drawing but it must show all the forces acting on the particle and define the symbols. In most cases, you won't know the magnitudes of all the forces, so the lengths of the vectors are just approximate.    Notice that the force is represented as acting 25 from the axis, which is 90 away from the direction of the surface.    Force Triangle   Use the known information to carefully and accurately construct the force triangle.  Start by placing point at the origin.  Draw force straight down from with a length of 1, and place point at its tip. The length of this vector represents the weight.  We know the direction of force but not its magnitude. For now, just draw line passing through point with an angle of 10 from the horizontal.  Similarly we know force acts at 25 from vertical because it is perpendicular to the inclined surface, and it will close the triangle. So draw line passing through point and at a 25 angle from the axis.  Call the point where lines and intersect point . Points , , and define the force triangle.  Now draw force from point to point , and  Draw force from point back to point .     Can you prove from the geometry of the triangle that angle is 75 ?     Results  In steps 6 and 7, Geogebra tells us that p = (0.438;10.0°) which means force is 0.438 units long with a direction of 10 , similarly n = (1.02;115°) means is 1.02 units long at 115 . These angles are measured counter-clockwise from the positive axis.  These are not the answers we are looking for, but we're close. Remember that for this diagram, our scale is , so scaling the lengths of p and n by this factor gives .  If you use technology such as Geogebra, as we did here, or CAD software to draw the force triangle, it will accurately produce the solution.  If technology isn't available to you, such as during an exam, you can still use a ruler and protractor to draw the force triangle, but your results will only be as accurate as your diagram. In the best case, using a sharp pencil and carefully measuring lengths and angles, you can only expect about two significant digits of accuracy from a hand-drawn triangle. Nevertheless, even a roughly drawn triangle can give you an idea of the correct answers and be used to check your work after you use another method to solve the problem.         Trigonometric Method  The general approach for solving particle equilibrium problems using the trigonometric method is to:  Draw and label a free-body diagram.  Rearrange the forces into a force triangle and label it.  Identify the knowns and unknowns.  Use trigonometry to find the unknown sides or angles of the triangle.    There must be no more than two unknowns to use this method, which may be either magnitudes or directions. During the problem setup, you will probably need to use the geometry of the situation to find one or more angles.  If the force triangle has a right angle you can use to find the unknown values, but in most cases, the triangle will be oblique and you will need to use either or both of the or the to find the sides or angles.   Cargo Boom     A crate is being lowered into the cargo hold of a ship. Boom is long and acts at a 40 angle from kingpost . The boom is held in this position by topping lift which has a 1:4 slope.  Determine the forces in the boom and in the topping lift.    The boom AB is 20 m long and acts at a 40° angle from the vertical support (kingpost). The boom is connected to the bottom of the vertical support by a pin connection at point A. The boom is held in this position by topping lift BC (cable attached at point C on the kingpost and at point B on the boom) which has a -1\/4 slope.   William Haynes  CC-BY-SA               Draw diagrams  Start by identifying the particle and drawing a free-body diagram. The particle in this case is point at the end of the boom because it is the point where all three forces intersect. Let be the tension of the topping lift, be the force in the boom, and be the weight of the load. Let and be the angles that forces and make with the horizontal.  Rearrange the forces acting on point to form a force triangle as was done in the previous example.     William Haynes  CC-BY-SA      William Haynes  CC-BY-SA       Find angles  Angle can be found from the slope of the topping lift.  .  Angle is the complement of the 40 angle the boom makes with the vertical kingpost.   Use these values to find the three angles in the force triangle.       Solve force triangle  With the angles and one side of the force triangle known, apply the to find the two unknown sides.             Scalar Components Method  The general statement of equilibrium of forces, , can be expressed as the sum of forces in the , and directions .  This statement will only be true if all three coefficients of the unit vectors are themselves equal to zero, leading to this scalar interpretation of the equilibrium equation .  In other words, the single vector equilibrium equation is equivalent to three independent scalar equations, one for each coordinate direction.  In two-dimensional situations, no forces act in the direction leaving just these two equilibrium equations to be satisfied . We will use this equation as the basis for solving two-dimensional particle equilibrium problems in this section and equation for three-dimensional problems in .  You are undoubtedly familiar with utility poles, which carry electric, cable and telephone lines, but have you ever noticed as you drive down a winding road that the poles will switch from one side of the road to the other and back again? Why is this?  If you consider the forces acting on the top of a pole beside a curving section of road you'll observe that the tensions of the cables produce a net force towards the road. This force is typically opposed by a guy wire pulling in the opposite direction which prevents the pole from tipping over due to unbalanced forces. The power company tries to keep poles beside road segments with convex curvature. If they didn't switch sides, the guy wire for poles at concave curves would extend into the road... which is a poor design.   Utility Pole   Consider the utility pole next to the road shown below. A top view is shown in the right-hand diagram. If each of the six power lines pulls with a force of , determine the magnitude of the tension in the guy wire.    Utility pole.    Looking at the top view of a utility pole, two parallel, horizontal members called crossarms at the top are shown. On each crossarm, three tensile forces act away from the utility pole. The tensions going to the right are 152 degrees from the tensions going to the left. Because of the type of connection of the cables to the crossarms, the tension in each cable is the same magnitude. A \"guy wire\" G acts 256 degrees from the tensile forces acting to the left, which is 104 degrees from the tensile forces acting to the right.              Assumptions  A utility pole isn't two-dimensional, but we can solve this problem as if it was by first considering the force components acting in a horizontal plane, and then considering the components in a vertical plane.  It also isn't a concurrent force problem because the lines of action of the forces don't all intersect at a single point. However, we can make it into one by replacing the forces of the three power lines in each direction with a single force three times larger. This is an example of an equivalent transformation , a trick engineers use frequently to turn complex situations into simpler ones. It works here because all the tensions are equal, and the outside wires are equidistant from the center wire. You must be careful to justify all equivalent transformations because they will lead to errors if they are not applied correctly. Equivalent transformations will be discussed in greater detail in later.    Givens  and 38 and 152 angles.    Free-Body Diagram  Begin by drawing a neat, labeled, free-body diagram of the top view of the pole, establishing a coordinate system and indicating the directions of the forces.  Call the tension in one power line and the tension in the guy wire . Resolve the the tension of the guy wire into a horizontal component , and a vertical component . Only the horizontal component of is visible in the top view.  Although it is not necessary, it simplifies this problem considerably to note the symmetry and establish the axis along the axis of symmetry.     Solution  Solve for by applying the equations of equilibrium. The symmetry of this problem means that the equation is sufficient.     Once is determined, the tension of the guy wire is easily found by considering the components of in the side view. Note that the vertical component tends to compress the pole.         This problem could have also been solved using the force triangle method. See .    In the next example we look at the conditions of equilibrium by considering the load and the constraints, rather than taking a global equilibrium approach which considers both the load and reaction forces.   Slider     Three forces act on a machine part that is free to slide along a vertical, frictionless rod. Forces and have a magnitude of and force has a magnitude of . Force acts degrees from the horizontal, and force acts at the same angle from the vertical.  Determine the angle required for equilibrium, and the magnitude and direction of the reaction force acting on the slider.    Three forces act on a machine part that is free to slide along a vertical, frictionless rod. The machine part has an attachment point where 3 forces are applied. Force A acts upwards vertically. Force B acts up and to the right at an angle alpha from the horizontal. Force C acts down and to the right at an angle of alpha from the negative y-axis.      The question asks for the reaction force. The reaction force is equal and opposite to force .          Givens  We are given magnitudes of forces , , and . The unknowns are angle and resultant force .    Procedure   Since the rod is frictionless, it cannot prevent the slider from moving vertically. Consequently, the slider will only be in equilibrium if the resultant of the three load forces is horizontal. Since a horizontal force has no component, we can establish this equilibrium condition:   Inserting the known values into the equilibrium relation and simplifying gives an equation in terms of unknown angle .     This is a single equation with a single unknown, although it is not particularly easy to solve with algebra. One approach is described at socratic.org . An alternate approach is to use technology to graph the function . The roots of this equation correspond to values of which satisfy the equilibrium condition above. The root occurring closest to will be the answer corresponding to our problem, in this case which you can verify by plugging it back into the equilibrium equation. Note that -90 also satisfies this equation, but it is not the solution we are looking for.   Once is known, we can find the reaction force by adding the components of , , and .     The resultant force is the vector sum of and , but in this situation is zero, so the resultant acts purely to the right with a magnitude of . .  Note that this value is the resultant force, the net force applied to the slider by , , and . However, the question asks for the reaction force, which is the force required for equilibrium. The reaction is equal and opposite to the resultant.       The next example demonstrates how rotating the coordinate system can simplify the solution. In the first solution, the standard orientation of the and axes is chosen, and in the second the coordinate system is rotated to align with one of the unknowns, which enables the solution to be found without solving simultaneous equations.   Roller     A lawn roller which weighs is being pulled up a slope at a constant velocity.  Determine the required pulling force .    A lawn roller weighs 160 lb. is being pulled up a 10° slope at a constant velocity. The force P that is pulling it up the slope is directed 40 degrees above the horizontal.   William Haynes  CC-BY-SA             Strategy     Select a coordinate system, in this case, horizontal and vertical.  Draw a free-body diagram  Solve the equations of equilibrium using the scalar approach.      William Haynes  CC-BY-SA       Procedure     Solving simultaneously for             Strategy     Rotate the standard coordinate system clockwise to align the new axis with force .  Draw a free-body diagram and calculate the angles between the forces and the rotated coordinate system.  Solve for force directly.      William Haynes  CC-BY-SA       Procedure            Multi-Particle Equilibrium  When two or more particles interact with each other there will always be common forces between them as a result of Newton's Third Law, the action-reaction principle.   Consider the two boxes with weights and connected to each other and the ceiling shown in the interactive diagram. Position one shows the physical arrangement of the objects, position two shows their free-body diagrams, and position three shows simplified free-body diagrams where the objects are represented by points. The boxes were freed by replacing the cables with tension forces and .   Two suspended weights     From the free-body diagrams you can see that cable only supports the weight of the bottom box, while cable and the ceiling support the combined weight. The tension is common to both diagrams. Recognizing the common force is the key to solving multi-particle equilibrium problems.   Two hanging weights     A weight is supported by cable . There is a frictionless pulley at and the hook is firmly attached to the cable at point .  What is the magnitude and direction of force required to hold the system in the position shown?    At the ceiling, Point D is 150 cm to the right of A. Point B is 20 cm to the right of A, and 40 cm below A. Point C is 100 cm to the right of A, and 50 cm below A. A weight is supported by a hook that is firmly attached to the cable at point C. There is a frictionless pulley at B and a Force P acts down and to the left, at an angle of theta from the -x axis.   William Haynes  CC-BY-SA       The particles are points and . The common force is the tension in rope segment .            Strategy  Following the we identify the particles as points A and B, and draw free-body diagrams of each. We label the rope tensions , , and for the endpoints of the rope segments, and label the angles of the forces , , and . We will use the standard Cartesian coordinate system and use the scalar components method .   Weight was given, and we can easily find angles , , and so the knowns are:     Counting unknowns we find that there are two on the free-body diagram of particle ( and , but four on particle , ( , and ).  Two unknowns on particle means it is solvable since there are two equilibrium equations available, so we begin there.    Solve Particle C     Solving these two equations simultaneously gives   .  With particle solved, we can use the results to solve particle . There are three unknowns remaining, tension , magnitude , and direction . Unfortunately, we still only have two available equilibrium equations. When you find yourself in this situation with more unknowns than equations, it generally means that you are missing something. In this case, it is the pulley. When a cable wraps around a frictionless pulley the tension doesn't change. The missing information is that . Knowing this, the magnitude and direction of force can be determined.   Because , the free-body diagram of particle is symmetric, and the technique used in to rotate the coordinate system could be applied here.     Solve Particle B  Referring to the FBD for particle we can write these equations.     Since , substituting and solving simultaneously gives   .  These are the magnitude and direction of vector . If you wish, you can express in terms of its scalar components. The negative signs on the components have been applied by hand since points down and to the left.           "
},
{
  "id": "Chapter_03-introduction-3",
  "level": "2",
  "url": "CH03-2d-particles.html#Chapter_03-introduction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rotate the coordinate "
},
{
  "id": "fig-force-triangle",
  "level": "2",
  "url": "CH03-2d-particles.html#fig-force-triangle",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " Free-Body Diagram and Force Triangle   "
},
{
  "id": "ForceTriangleMethod-5",
  "level": "2",
  "url": "CH03-2d-particles.html#ForceTriangleMethod-5",
  "type": "Question",
  "number": "3.4.2",
  "title": "",
  "body": "  Why do the forces always form a closed polygon?    Because their resultant is zero.   "
},
{
  "id": "Frictionless-Incline",
  "level": "2",
  "url": "CH03-2d-particles.html#Frictionless-Incline",
  "type": "Example",
  "number": "3.4.3",
  "title": "Frictionless Incline.",
  "body": " Frictionless Incline     A force is being applied to a block resting on a frictionless incline as shown. Determine the magnitude and direction of force and of the contact force on the bottom of the block.    A flat, frictionless surface is inclined at 25 degrees from the horizontal. A force is being applied to a block resting on the incline, pushing it up the incline, at an angle of 10 degrees below the horizontal.   William Haynes  CC-BY-SA               Assumptions  We must assume that the block is in equilibrium, that is, either motionless or moving at a constant velocity in order to use the equilibrium equations. We will represent the block's weight and the force between the incline and the block as concentrated forces. The force of the inclined surface on the block must act in a direction that is normal to the surface since it is frictionless and can't prevent motion along the surface.    Givens  The knowns here are the weight of the block, the direction of the applied force, and the slope of the incline. The slope of the incline provides the direction of the normal force.  The unknown values are the magnitudes of forces and .    Free-Body Diagram  You should always begin a statics problem by drawing a free-body diagram. It allows you to think about the situation, identify knowns and unknowns, and define symbols.  We define three symbols, , , and , representing the weight, normal force, and applied force respectively. The angles could be given symbols too, but since we know their values it isn't necessary.     William Haynes  CC-BY-SA     The free-body can be a quick sketch or an accurate drawing but it must show all the forces acting on the particle and define the symbols. In most cases, you won't know the magnitudes of all the forces, so the lengths of the vectors are just approximate.    Notice that the force is represented as acting 25 from the axis, which is 90 away from the direction of the surface.    Force Triangle   Use the known information to carefully and accurately construct the force triangle.  Start by placing point at the origin.  Draw force straight down from with a length of 1, and place point at its tip. The length of this vector represents the weight.  We know the direction of force but not its magnitude. For now, just draw line passing through point with an angle of 10 from the horizontal.  Similarly we know force acts at 25 from vertical because it is perpendicular to the inclined surface, and it will close the triangle. So draw line passing through point and at a 25 angle from the axis.  Call the point where lines and intersect point . Points , , and define the force triangle.  Now draw force from point to point , and  Draw force from point back to point .     Can you prove from the geometry of the triangle that angle is 75 ?     Results  In steps 6 and 7, Geogebra tells us that p = (0.438;10.0°) which means force is 0.438 units long with a direction of 10 , similarly n = (1.02;115°) means is 1.02 units long at 115 . These angles are measured counter-clockwise from the positive axis.  These are not the answers we are looking for, but we're close. Remember that for this diagram, our scale is , so scaling the lengths of p and n by this factor gives .  If you use technology such as Geogebra, as we did here, or CAD software to draw the force triangle, it will accurately produce the solution.  If technology isn't available to you, such as during an exam, you can still use a ruler and protractor to draw the force triangle, but your results will only be as accurate as your diagram. In the best case, using a sharp pencil and carefully measuring lengths and angles, you can only expect about two significant digits of accuracy from a hand-drawn triangle. Nevertheless, even a roughly drawn triangle can give you an idea of the correct answers and be used to check your work after you use another method to solve the problem.      "
},
{
  "id": "cargo_boom",
  "level": "2",
  "url": "CH03-2d-particles.html#cargo_boom",
  "type": "Example",
  "number": "3.4.4",
  "title": "Cargo Boom.",
  "body": " Cargo Boom     A crate is being lowered into the cargo hold of a ship. Boom is long and acts at a 40 angle from kingpost . The boom is held in this position by topping lift which has a 1:4 slope.  Determine the forces in the boom and in the topping lift.    The boom AB is 20 m long and acts at a 40° angle from the vertical support (kingpost). The boom is connected to the bottom of the vertical support by a pin connection at point A. The boom is held in this position by topping lift BC (cable attached at point C on the kingpost and at point B on the boom) which has a -1\/4 slope.   William Haynes  CC-BY-SA               Draw diagrams  Start by identifying the particle and drawing a free-body diagram. The particle in this case is point at the end of the boom because it is the point where all three forces intersect. Let be the tension of the topping lift, be the force in the boom, and be the weight of the load. Let and be the angles that forces and make with the horizontal.  Rearrange the forces acting on point to form a force triangle as was done in the previous example.     William Haynes  CC-BY-SA      William Haynes  CC-BY-SA       Find angles  Angle can be found from the slope of the topping lift.  .  Angle is the complement of the 40 angle the boom makes with the vertical kingpost.   Use these values to find the three angles in the force triangle.       Solve force triangle  With the angles and one side of the force triangle known, apply the to find the two unknown sides.          "
},
{
  "id": "utilitypole",
  "level": "2",
  "url": "CH03-2d-particles.html#utilitypole",
  "type": "Example",
  "number": "3.4.5",
  "title": "Utility Pole.",
  "body": " Utility Pole   Consider the utility pole next to the road shown below. A top view is shown in the right-hand diagram. If each of the six power lines pulls with a force of , determine the magnitude of the tension in the guy wire.    Utility pole.    Looking at the top view of a utility pole, two parallel, horizontal members called crossarms at the top are shown. On each crossarm, three tensile forces act away from the utility pole. The tensions going to the right are 152 degrees from the tensions going to the left. Because of the type of connection of the cables to the crossarms, the tension in each cable is the same magnitude. A \"guy wire\" G acts 256 degrees from the tensile forces acting to the left, which is 104 degrees from the tensile forces acting to the right.              Assumptions  A utility pole isn't two-dimensional, but we can solve this problem as if it was by first considering the force components acting in a horizontal plane, and then considering the components in a vertical plane.  It also isn't a concurrent force problem because the lines of action of the forces don't all intersect at a single point. However, we can make it into one by replacing the forces of the three power lines in each direction with a single force three times larger. This is an example of an equivalent transformation , a trick engineers use frequently to turn complex situations into simpler ones. It works here because all the tensions are equal, and the outside wires are equidistant from the center wire. You must be careful to justify all equivalent transformations because they will lead to errors if they are not applied correctly. Equivalent transformations will be discussed in greater detail in later.    Givens  and 38 and 152 angles.    Free-Body Diagram  Begin by drawing a neat, labeled, free-body diagram of the top view of the pole, establishing a coordinate system and indicating the directions of the forces.  Call the tension in one power line and the tension in the guy wire . Resolve the the tension of the guy wire into a horizontal component , and a vertical component . Only the horizontal component of is visible in the top view.  Although it is not necessary, it simplifies this problem considerably to note the symmetry and establish the axis along the axis of symmetry.     Solution  Solve for by applying the equations of equilibrium. The symmetry of this problem means that the equation is sufficient.     Once is determined, the tension of the guy wire is easily found by considering the components of in the side view. Note that the vertical component tends to compress the pole.         This problem could have also been solved using the force triangle method. See .   "
},
{
  "id": "Slider",
  "level": "2",
  "url": "CH03-2d-particles.html#Slider",
  "type": "Example",
  "number": "3.4.6",
  "title": "Slider.",
  "body": " Slider     Three forces act on a machine part that is free to slide along a vertical, frictionless rod. Forces and have a magnitude of and force has a magnitude of . Force acts degrees from the horizontal, and force acts at the same angle from the vertical.  Determine the angle required for equilibrium, and the magnitude and direction of the reaction force acting on the slider.    Three forces act on a machine part that is free to slide along a vertical, frictionless rod. The machine part has an attachment point where 3 forces are applied. Force A acts upwards vertically. Force B acts up and to the right at an angle alpha from the horizontal. Force C acts down and to the right at an angle of alpha from the negative y-axis.      The question asks for the reaction force. The reaction force is equal and opposite to force .          Givens  We are given magnitudes of forces , , and . The unknowns are angle and resultant force .    Procedure   Since the rod is frictionless, it cannot prevent the slider from moving vertically. Consequently, the slider will only be in equilibrium if the resultant of the three load forces is horizontal. Since a horizontal force has no component, we can establish this equilibrium condition:   Inserting the known values into the equilibrium relation and simplifying gives an equation in terms of unknown angle .     This is a single equation with a single unknown, although it is not particularly easy to solve with algebra. One approach is described at socratic.org . An alternate approach is to use technology to graph the function . The roots of this equation correspond to values of which satisfy the equilibrium condition above. The root occurring closest to will be the answer corresponding to our problem, in this case which you can verify by plugging it back into the equilibrium equation. Note that -90 also satisfies this equation, but it is not the solution we are looking for.   Once is known, we can find the reaction force by adding the components of , , and .     The resultant force is the vector sum of and , but in this situation is zero, so the resultant acts purely to the right with a magnitude of . .  Note that this value is the resultant force, the net force applied to the slider by , , and . However, the question asks for the reaction force, which is the force required for equilibrium. The reaction is equal and opposite to the resultant.      "
},
{
  "id": "Rotate-Coordinate-System",
  "level": "2",
  "url": "CH03-2d-particles.html#Rotate-Coordinate-System",
  "type": "Example",
  "number": "3.4.7",
  "title": "Roller.",
  "body": " Roller     A lawn roller which weighs is being pulled up a slope at a constant velocity.  Determine the required pulling force .    A lawn roller weighs 160 lb. is being pulled up a 10° slope at a constant velocity. The force P that is pulling it up the slope is directed 40 degrees above the horizontal.   William Haynes  CC-BY-SA             Strategy     Select a coordinate system, in this case, horizontal and vertical.  Draw a free-body diagram  Solve the equations of equilibrium using the scalar approach.      William Haynes  CC-BY-SA       Procedure     Solving simultaneously for             Strategy     Rotate the standard coordinate system clockwise to align the new axis with force .  Draw a free-body diagram and calculate the angles between the forces and the rotated coordinate system.  Solve for force directly.      William Haynes  CC-BY-SA       Procedure         "
},
{
  "id": "multi-particle-3-2",
  "level": "2",
  "url": "CH03-2d-particles.html#multi-particle-3-2",
  "type": "Figure",
  "number": "3.4.8",
  "title": "",
  "body": " Two suspended weights   "
},
{
  "id": "two-hanging-weights-ex",
  "level": "2",
  "url": "CH03-2d-particles.html#two-hanging-weights-ex",
  "type": "Example",
  "number": "3.4.9",
  "title": "Two hanging weights.",
  "body": " Two hanging weights     A weight is supported by cable . There is a frictionless pulley at and the hook is firmly attached to the cable at point .  What is the magnitude and direction of force required to hold the system in the position shown?    At the ceiling, Point D is 150 cm to the right of A. Point B is 20 cm to the right of A, and 40 cm below A. Point C is 100 cm to the right of A, and 50 cm below A. A weight is supported by a hook that is firmly attached to the cable at point C. There is a frictionless pulley at B and a Force P acts down and to the left, at an angle of theta from the -x axis.   William Haynes  CC-BY-SA       The particles are points and . The common force is the tension in rope segment .            Strategy  Following the we identify the particles as points A and B, and draw free-body diagrams of each. We label the rope tensions , , and for the endpoints of the rope segments, and label the angles of the forces , , and . We will use the standard Cartesian coordinate system and use the scalar components method .   Weight was given, and we can easily find angles , , and so the knowns are:     Counting unknowns we find that there are two on the free-body diagram of particle ( and , but four on particle , ( , and ).  Two unknowns on particle means it is solvable since there are two equilibrium equations available, so we begin there.    Solve Particle C     Solving these two equations simultaneously gives   .  With particle solved, we can use the results to solve particle . There are three unknowns remaining, tension , magnitude , and direction . Unfortunately, we still only have two available equilibrium equations. When you find yourself in this situation with more unknowns than equations, it generally means that you are missing something. In this case, it is the pulley. When a cable wraps around a frictionless pulley the tension doesn't change. The missing information is that . Knowing this, the magnitude and direction of force can be determined.   Because , the free-body diagram of particle is symmetric, and the technique used in to rotate the coordinate system could be applied here.     Solve Particle B  Referring to the FBD for particle we can write these equations.     Since , substituting and solving simultaneously gives   .  These are the magnitude and direction of vector . If you wish, you can express in terms of its scalar components. The negative signs on the components have been applied by hand since points down and to the left.         "
},
{
  "id": "ch3-3d-particles",
  "level": "1",
  "url": "ch3-3d-particles.html",
  "type": "Section",
  "number": "3.5",
  "title": "3D Particle Equilibrium",
  "body": " 3D Particle Equilibrium   The world we live in has three dimensions. One and two-dimensional textbook problems have been useful for learning the principles of engineering mechanics, but to model real-world problems we will have to consider all three.  Fortunately, all the principles you have learned so far still apply, but many students have difficulty visualizing three-dimensional problems drawn on two-dimensional paper and the mathematics becomes a bit harder. It is especially important to have good diagrams and keep your work neat and organized to avoid errors.    Three-Dimensional Coordinate Frame  We need a coordinate frame for three dimensions, just as we did in two dimensions, so we add a third orthogonal axis to our existing two-dimensional frame.  For equilibrium of a particle, usually the origin of the coordinate frame is at the particle, the axis is horizontal, and the axis is vertical just as in a two-dimensional situation. The orientation of the axis is determined by the right-hand rule . Using your right hand , put your palm at the origin and point your fingers along the positive axis. Then curl your fingers towards the positive axis. Your thumb will point in the direction of the positive axis. For example, in the plane of the page with the positive axis horizontal and to the right and the positive axis vertical and upwards, the positive axis will point towards you out of the page. Remember that the three axes are mutually perpendicular, each axis is perpendicular to both of the others. The right-hand rule is important in many aspects of engineering, so make sure that you understand how it works. Mistakes will lead to sign errors.   Point-and-curl right-hand rule technique.   Using your right hand, put your palm at the origin and point your fingers along the positive x axis. Then curl your fingers towards the positive y axis. Your thumb will point in the direction of the positive z axis. In this case, if the positive x axis is horizontal and to the right and the positive y axis is vertical and upwards, the positive z axis will be coming towards you. Remember that the three axes are mutually perpendicular, i.e. each axis is perpendicular to both of the others. The right-hand rule is important in many aspects of engineering, so make sure that you understand how it works. Mistakes will lead to sign errors.   Dan Baker  CC-0       Free-Body Diagrams  As we did before, we begin our analysis by drawing a free-body diagram that shows all forces and moments acting on the object of interest. Drawing a FBD in three dimensions can be difficult. It is sometimes hard to see things in three dimensions when they are drawn on a two-dimensional sheet. Consequently, it is important to carefully label vectors and angles, but not to clutter up the diagram with too much and\/or unnecessary information. When working in two dimensions, you only need one angle to determine the direction of the vector, but when working in three dimensions you need two or three angles.    Angles  As stated above, when working in three dimensions you need three angles to determine the direction of the vector, namely, the angle with respect to the axis, the angle with respect to the axis and the angle with respect to the axis. The three angles mentioned above are not necessarily located in any of the coordinate planes. Think of it this way three points determine a plane, and in this case, the three points are: the origin, the tip of the vector, and a point on an axis. The plane made by those three points is not necessarily the , , or plane. It is most likely a tilted plane.  As you learned in , one way to quantify the direction of a vector is with direction cosine angles. These direction cosine angles are measured from the positive x, y, and z axes and are often labeled , , and , respectively.  As with two dimensions, angles can be determined from geometry a distance vector going in the same direction as the force vector. This is the three-dimensional equivalent of similar triangles that you used in the two-dimensional problems.   Direction Cosine Angles    If you know that the line of action of a force vector goes between two points, then you can use the distance vector that goes from one point to the other to determine the angles.  Let's suppose that the line of action goes through two points and , and the direction of the force is from towards . The first step in determining the three angles is to write the distance vector from point towards point . Let's call this vector . Starting at point , you need to determine how to get to point by moving in each of the three directions. Ask yourself: to get from point to point do I have to move in the direction? If so, how far do I have to travel? This becomes the component of the vector namely . Next, to get from point to point how far do I move in direction? This distance is . Finally, to get from point A to point B how far do I move in the z-direction? This distance is .  When writing these scalar components pay attention to which way you move along the axes. If you travel toward the positive end of an axis, the corresponding scalar component gets a positive sign. Travel towards the negative end results in a negative sign. The sign is important.  Once you have determined the components of the distance vector , you can determine the total distance from point to using the three-dimensional Pythagorean Theorem  Lastly, the angles are determined by the direction cosines, namely   Since the force vector has the same line of action as the distance vector, by the three-dimensional version of similar triangles, . So,   Now, that is a bit of math there, but the important things to remember are:  You can use three angles to determine the direction of a force in three dimensions.  You can use the geometry to get them from a distance vector that lies along the line of action of the force.    The three direction cosine angles are not mutually independent. From you can easily show that , so if you know two direction cosine angles you can find the third from this relationship.    General Procedure  The general procedure for solving three-dimensional particle equilibrium is essentially the same as for two-dimensional particle equilibrium using the components method. The major differences are that you must carefully find each vector component using the techniques from . The process follows the same five-step method for creating a free-body diagram, followed by steps to solve your equilibrium equations.  Draw a Free-body Diagram:    Select and isolate the particle. The free-body in free-body diagram means that a concurrent force particle or connection must be isolated from the supports that are physically holding it in place. This means creating a separate free-body diagram from your problem sketch.  Establish a coordinate system. Draw a right-handed coordinate system to use as a reference for your equilibrium equations. Look ahead and select a coordinate system that minimizes the number of force components. This will simplify your vector algebra. The choice is technically arbitrary, but a good choice will simplify your calculations and reduce your effort.  Identify all loads. Add force vectors to your free-body diagram representing each applied load pushing or pulling the body, in addition to the body's weight, if it is non-negligible. If a force vector has a known direction, draw it. If its direction is unknown, assume one, and your later algebra will check your assumption. Every vector should have a descriptive variable name and a clear arrowhead indicating its direction.  Identify all reactions. Reactions represent the resistance of the physical supports you cut away by isolating the body in step 1. All particle supports are some type of two-force members with tension or compression reaction forces. These reactions will all be concurrent with the body loads from Step 2. Label each reaction with a descriptive variable name and a clear arrowhead. Again, if a vector's direction is unknown, just assume one.  Label the diagram. Verify that every dimension, angle, force, and moment is labeled with either a value or a symbolic name if the value is unknown. In our eyes, dimensioning is optional. Having the information needed for your calculations is helpful, but don't clutter the diagram up with unneeded details. Your final free-body diagram should be a stand-alone presentation and is the basis of your equilibrium equations.    Create and Solve Equilibrium Equations    Break vectors into components. Compute each force's , , and components using the tools outlined in . While the components in two-dimensional problems can often be found with right triangle trigonometry, three-dimensional problems often use unit vectors.  Write equilibrium equations. Now represent your free-body diagram as equilibrium equations. For a three-dimensional particle equilibrium problem, you can have up to three force equilibrium equations corresponding to a force balance in the three independent , , and directions. Each equation should start with the governing equation, like .  Count knowns and unknowns. At this point, you should have at most three unknowns remaining. If you have over three, reread the problem and look for overlooked information.  Solve for unknowns. Use algebra to simplify the equilibrium equations and solve for unknowns. With multiple unknowns scattered across multiple equations, linear algebra may be more efficient than substitution. Assume that all answers have units - unless you prove that they don't. Finally, underline or box your answers.  Check your work. If you add the components of the forces, do they add to zero? Do the results seem reasonable given the situation? Have you included appropriate units?    Now let's see how that process looks on an example problem.   Balloon     A hot air balloon above the ground is tethered by three cables as shown in the diagram.  If the balloon is pulling upwards with a force of , what is the tension in each of the three cables?  The grid lines on the ground plane are spaced apart.    A hot air balloon is 30 ft above the ground (coordinates (0, 30, 0)) and tethered by three cables. Assume the origin is directly below the balloon on the ground. The three cables are attached from the basket of the balloon to the following points (ft): A (-20, 0, 0), B (30, 0, -20), C (0, 0, -20).              Strategy    The three tensions are the unknowns which we can find by applying the three equilibrium equations.  We'll establish a coordinate system with the origin directly below the balloon and the axis vertical, then draw and label a free-body diagram.  Next we'll use the given information to find two points on each line of action to find the components of each force in terms of the unknowns.     When the , and components of all forces can be expressed in terms of known values, the equilibrium equations can be solved.    Geometry  From the diagram, the coordinates of the points are     Use the point coordinates to find the , and components of the forces.     Where , and are the lengths of the three cables found with the distance formula .       Equilibrium Equations  Applying the three equations of equilibrium yields three equations in terms of the three unknown tensions.     Solving these equations simultaneously yields the answers we are seeking. One way to do this is to substitute equations (1) and (2) into (3) to eliminate and and solve the resulting equation for .     With known, substitute it into equations (1) and (2) to find and .           Skycam    The skycam at Stanford University Stadium has a mass of and is supported by three cables as shown. Assuming that it is currently in equilibrium, find the tension in each of the three supporting cables.    Skycam has mass of 20 kg and is in equilibrium. Cable A is in the x-y plane, acting 35 degrees from the positive x-axis. Cable B acts -30 degrees from the negative x-axis in the x-z plane, and 15 degrees above the x-z plane. Cable C acts 20 degrees in the y-z plane, -20 degrees from the positive z-axis.   Jrienstra   CC-BY-SA             In this situation, the directions of all four forces are specified by the angles in the free-body diagram, and the magnitude of the weight is known. The three unknowns are the magnitudes of forces , , and .  We will first find unit vectors in the directions of the four forces by inspection of the free-body diagram. This step requires visualizing the component's unit vectors and determining the angles each makes with the coordinate axis.   Particle equilibrium requires that . This is a 3 3 system of three simultaneous equations, one for each coordinate direction, which needs to be solved for , , and .   These can be solved by any method you choose. Here we will use Sage. Evaluating the coefficients and expressing the equations in matrix form gives .  This is an equation in the form . Entering the coefficient matrices into Sage.   After evaluating, we learn that .     "
},
{
  "id": "Chapter_03-three-dimensional-coordinate-frame-3",
  "level": "2",
  "url": "ch3-3d-particles.html#Chapter_03-three-dimensional-coordinate-frame-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "rhr2",
  "level": "2",
  "url": "ch3-3d-particles.html#rhr2",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " Point-and-curl right-hand rule technique.   Using your right hand, put your palm at the origin and point your fingers along the positive x axis. Then curl your fingers towards the positive y axis. Your thumb will point in the direction of the positive z axis. In this case, if the positive x axis is horizontal and to the right and the positive y axis is vertical and upwards, the positive z axis will be coming towards you. Remember that the three axes are mutually perpendicular, i.e. each axis is perpendicular to both of the others. The right-hand rule is important in many aspects of engineering, so make sure that you understand how it works. Mistakes will lead to sign errors.   Dan Baker  CC-0    "
},
{
  "id": "Chapter_03-angles-5",
  "level": "2",
  "url": "ch3-3d-particles.html#Chapter_03-angles-5",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " Direction Cosine Angles   "
},
{
  "id": "Balloon",
  "level": "2",
  "url": "ch3-3d-particles.html#Balloon",
  "type": "Example",
  "number": "3.5.3",
  "title": "Balloon.",
  "body": " Balloon     A hot air balloon above the ground is tethered by three cables as shown in the diagram.  If the balloon is pulling upwards with a force of , what is the tension in each of the three cables?  The grid lines on the ground plane are spaced apart.    A hot air balloon is 30 ft above the ground (coordinates (0, 30, 0)) and tethered by three cables. Assume the origin is directly below the balloon on the ground. The three cables are attached from the basket of the balloon to the following points (ft): A (-20, 0, 0), B (30, 0, -20), C (0, 0, -20).              Strategy    The three tensions are the unknowns which we can find by applying the three equilibrium equations.  We'll establish a coordinate system with the origin directly below the balloon and the axis vertical, then draw and label a free-body diagram.  Next we'll use the given information to find two points on each line of action to find the components of each force in terms of the unknowns.     When the , and components of all forces can be expressed in terms of known values, the equilibrium equations can be solved.    Geometry  From the diagram, the coordinates of the points are     Use the point coordinates to find the , and components of the forces.     Where , and are the lengths of the three cables found with the distance formula .       Equilibrium Equations  Applying the three equations of equilibrium yields three equations in terms of the three unknown tensions.     Solving these equations simultaneously yields the answers we are seeking. One way to do this is to substitute equations (1) and (2) into (3) to eliminate and and solve the resulting equation for .     With known, substitute it into equations (1) and (2) to find and .         "
},
{
  "id": "Skycam",
  "level": "2",
  "url": "ch3-3d-particles.html#Skycam",
  "type": "Example",
  "number": "3.5.4",
  "title": "Skycam.",
  "body": " Skycam    The skycam at Stanford University Stadium has a mass of and is supported by three cables as shown. Assuming that it is currently in equilibrium, find the tension in each of the three supporting cables.    Skycam has mass of 20 kg and is in equilibrium. Cable A is in the x-y plane, acting 35 degrees from the positive x-axis. Cable B acts -30 degrees from the negative x-axis in the x-z plane, and 15 degrees above the x-z plane. Cable C acts 20 degrees in the y-z plane, -20 degrees from the positive z-axis.   Jrienstra   CC-BY-SA             In this situation, the directions of all four forces are specified by the angles in the free-body diagram, and the magnitude of the weight is known. The three unknowns are the magnitudes of forces , , and .  We will first find unit vectors in the directions of the four forces by inspection of the free-body diagram. This step requires visualizing the component's unit vectors and determining the angles each makes with the coordinate axis.   Particle equilibrium requires that . This is a 3 3 system of three simultaneous equations, one for each coordinate direction, which needs to be solved for , , and .   These can be solved by any method you choose. Here we will use Sage. Evaluating the coefficients and expressing the equations in matrix form gives .  This is an equation in the form . Entering the coefficient matrices into Sage.   After evaluating, we learn that .   "
},
{
  "id": "Chapter_03-7",
  "level": "1",
  "url": "Chapter_03-7.html",
  "type": "Exercises",
  "number": "3.6",
  "title": "Exercises (Ch. 3)",
  "body": " Exercises (Ch. 3)    "
},
{
  "id": "moment-of-force",
  "level": "1",
  "url": "moment-of-force.html",
  "type": "Section",
  "number": "4.1",
  "title": "Moment of Force",
  "body": " Moment of Force    A moment of force, or torque, is a measure of the tendency of that force to rotate a body about a selected point or axis, called the moment center . This tendency increases with the magnitude of the force, and also with the distance between the line-of-action of the force and the moment center.  Moments are vector quantities, so they have magnitude and direction and obey all the rules of vector arithmetic, even dot and cross products, described in .    Magnitude of a Moment  The magnitude of a moment describes how hard it turns, in the same way that the magnitude of a force describes how hard it pushes or pulls. When you turn a door knob, the magnitude of the moment is how hard you twist the knob.  The magnitude of a moment is found by multiplying the magnitude of the force by the distance between the line of action of the force and the center of rotation, as illustrated in . This distance called the moment arm or the perpendicular distance , . .  Since the moment is the product of the force's magnitude and the perpendicular distance, the closer the point is to the force's line of action, the smaller the moment. If the point lies upon the force's line of action, then the moment arm is zero, making the moment zero as well. But notice that a force may be slid along its line-of-action without changing the moment, because neither the magnitude of the force nor the moment arm changes. The magnitude of a moment is a positive quantity regardless of whether it produces a clockwise or counter-clockwise tendency.  Moments are the product of a force with a distance, so they have units of [force] [distance] such as N-m or ft-lb.   Definition of the moment, .      A mobile crane is used to raise a load of building materials. Boom is long and the tension of the boom pendant is .  Use the definition of the moment to determine the magnitude and direction of:   , the moment about point caused by the load, .    , the moment about point caused by tension .               Given: , , boom length .   Sketch right triangles containing the perpendicular distances and from point to the lines of action of and .     Find angles in the right triangles.       Use trigonometry to find the perpendicular distances.     Apply the definition of the moment , and solve for the moments.      By inspection we see that the tension produces a counterclockwise rotation and the load produces a clockwise rotation. Counterclockwise moment is greater than clockwise moment because the boom pendant must also support the weight of the boom, which we have not accounted for.  As we will see in the next section, counterclockwise moments indicate a positive scalar moment in two dimensions, and a vector that points in the direction in three.         The bent column is firmly fixed to the ground at .  Determine the magnitude and direction of the moment that a force applied at produces about point .           This problem is similar to the previous example, but the geometry required to find the perpendicular distance is slightly more difficult.     Use the law of sines and law of cosines to find distance from to and the angle in triangle .     Then, find the angle in the right triangle and solve for the perpendicular distance.     Finally, use to find the magnitude of created by force .  This force produces a clockwise rotation of the column, so the corresponding scalar moment is negative and the moment expressed as a vector is         Direction of a Moment  In two-dimensional problems, moment vectors are perpendicular to the page and moments simplify to clockwise or counter-clockwise rotation about a point , called the point of interest or moment center . The point of interest can be visualized as the point where the axis of rotation pierces the page. Since these moment vectors point into the third dimension, they are usually drawn as circular arrows in the plane of the page.  Consider the two moments acting on a horizontal surface, shown below. To determine the sense of these moments, whether the vectors point up or down, apply the right hand rule. Imagine grasping the axis of rotation with your right hand, with your fingers curling in the direction of rotation; your thumb then points in the direction of the moment vector. Using this technique, we see that counter-clockwise moments point up, or out of the page, while the clockwise moments point down or into the page. In other words, counter-clockwise moment vectors point towards the positive direction and clockwise moments point in the direction.   Moments in the plane of the page.   A counter-clockwise moment symbol on a horizontal page, and the corresponding unit vector pointing up, also a similar clockwise moment pointing down.    Pause your reading now to apply the right-hand rule yourself to determine the direction of the two moments in  In three dimensions, moment vectors are more difficult to visualize, because they can point in any direction in 3-D space, however they still point along an axis of rotation with sense determined by the right hand rule.  As discussed in , there are several alternative methods for applying the right-hand rule, however they all define a direction that is mutually perpendicular to two other vectors. To find the direction of a moment, the first of these vectors is a position vector which points from the point of interest to a point on the force's line of action, and is designated . The second vector is the force, .  With the three-finger method, you align your right-hand index finger with vector and your middle finger with the force ; your thumb will point in the direction of the moment vector. Alternately, you can align your thumb with and your index finger with ; your middle finger will point in the direction of the moment vector.     Three finger right-hand rule for moments.   Using the right hand, point index finger straight out, the thumb up (like giving a thumbs-up), and the middle finger pointed perpendicular to the pointer finger and thumb. The thumb represents the position vector, and the index finger represents the force vector. Taking the cross product r x F results in M which is represented by the middle finger. Alternatively, r can be the index finger, F the middle finger, and M the thumb.        With the point-and-curl method, place your right hand flat and point your fingertips in the direction of . Rotate your hand until the force is perpendicular to the back of your hand and can rotate your fingers. In this position, your thumb defines the direction of the moment vector and also the axis of rotation.   Point-and-curl right-hand rule for moments.   Image of a right hand demonstrating the use of the right-hand-rule.   Dan Baker  CC-BY-SA      Any of these techniques may be used to find the direction of a moment. They all produce the same result so you don't need to learn them all, but make sure you have at least one method you can use accurately and consistently.   "
},
{
  "id": "moment-of-force-2-1",
  "level": "2",
  "url": "moment-of-force.html#moment-of-force-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment center "
},
{
  "id": "Chapter_04-magnitude-of-a-moment-3",
  "level": "2",
  "url": "moment-of-force.html#Chapter_04-magnitude-of-a-moment-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment arm perpendicular distance "
},
{
  "id": "wrench_view_2",
  "level": "2",
  "url": "moment-of-force.html#wrench_view_2",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " Definition of the moment, .   "
},
{
  "id": "Chapter_04-magnitude-of-a-moment-7",
  "level": "2",
  "url": "moment-of-force.html#Chapter_04-magnitude-of-a-moment-7",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  A mobile crane is used to raise a load of building materials. Boom is long and the tension of the boom pendant is .  Use the definition of the moment to determine the magnitude and direction of:   , the moment about point caused by the load, .    , the moment about point caused by tension .               Given: , , boom length .   Sketch right triangles containing the perpendicular distances and from point to the lines of action of and .     Find angles in the right triangles.       Use trigonometry to find the perpendicular distances.     Apply the definition of the moment , and solve for the moments.      By inspection we see that the tension produces a counterclockwise rotation and the load produces a clockwise rotation. Counterclockwise moment is greater than clockwise moment because the boom pendant must also support the weight of the boom, which we have not accounted for.  As we will see in the next section, counterclockwise moments indicate a positive scalar moment in two dimensions, and a vector that points in the direction in three.    "
},
{
  "id": "Chapter_04-magnitude-of-a-moment-8",
  "level": "2",
  "url": "moment-of-force.html#Chapter_04-magnitude-of-a-moment-8",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "    The bent column is firmly fixed to the ground at .  Determine the magnitude and direction of the moment that a force applied at produces about point .           This problem is similar to the previous example, but the geometry required to find the perpendicular distance is slightly more difficult.     Use the law of sines and law of cosines to find distance from to and the angle in triangle .     Then, find the angle in the right triangle and solve for the perpendicular distance.     Finally, use to find the magnitude of created by force .  This force produces a clockwise rotation of the column, so the corresponding scalar moment is negative and the moment expressed as a vector is      "
},
{
  "id": "Chapter_04-direction-of-a-moment-2",
  "level": "2",
  "url": "moment-of-force.html#Chapter_04-direction-of-a-moment-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "point of interest moment center "
},
{
  "id": "rhr5",
  "level": "2",
  "url": "moment-of-force.html#rhr5",
  "type": "Figure",
  "number": "4.1.4",
  "title": "",
  "body": " Moments in the plane of the page.   A counter-clockwise moment symbol on a horizontal page, and the corresponding unit vector pointing up, also a similar clockwise moment pointing down.   "
},
{
  "id": "rhr3",
  "level": "2",
  "url": "moment-of-force.html#rhr3",
  "type": "Figure",
  "number": "4.1.5",
  "title": "",
  "body": "  Three finger right-hand rule for moments.   Using the right hand, point index finger straight out, the thumb up (like giving a thumbs-up), and the middle finger pointed perpendicular to the pointer finger and thumb. The thumb represents the position vector, and the index finger represents the force vector. Taking the cross product r x F results in M which is represented by the middle finger. Alternatively, r can be the index finger, F the middle finger, and M the thumb.       "
},
{
  "id": "rhr4",
  "level": "2",
  "url": "moment-of-force.html#rhr4",
  "type": "Figure",
  "number": "4.1.6",
  "title": "",
  "body": " Point-and-curl right-hand rule for moments.   Image of a right hand demonstrating the use of the right-hand-rule.   Dan Baker  CC-BY-SA    "
},
{
  "id": "scalar-components-moments",
  "level": "1",
  "url": "scalar-components-moments.html",
  "type": "Section",
  "number": "4.2",
  "title": "Scalar Addition of Moments",
  "body": " Scalar Addition of Moments   Since moments are vectors, they add according to the rules of vector addition. In three dimensions this usually involves finding the , , and components of two or more moments and adding them to find the components of the resultant moment.  A simpler and more interactives approach using scalar components is available for moments in two dimensions.    Scalar Components  In we saw that vectors can be expressed as the product of a scalar component and a unit vector . For example, a force acting in the direction, straight down, can be represented by , where is the scalar component and is the unit vector. The absolute value of determines the magnitude of the force, and unit vector along with the sign of determines its direction. The negative sign here indicates that the direction of is opposite to the direction of .  We have previously established two sign conventions for scalar components; we now add a third:  For forces acting in the direction, right is positive , corresponding to the direction of .  For forces acting in the direction, up is positive , corresponding to the direction of .  For moments acting in the - plane, counterclockwise moments are positive , corresponding to the direction of according to the right-hand rule.     Sign Conventions   For each scalar component, determine whether the moment is clockwise or counterclockwise, and apply the right-hand rule to determine the direction of the corresponding moment vector.                    or CCW  or CW  or CW  or CCW      By the right-hand rule, counterclockwise moments in the - plane are vectors that point in the direction. The corresponding scalar component has a positive sign. Clockwise moments point in the direction and have a negative sign.     is positive, so it is CCW and the vector points in the direction.    is negative, so it is CW and the vector points direction.    The arrow on establishes the positive direction as CW. A positive scalar component means that the direction is CW and the vector points in the direction.    The arrow on establishes the positive direction as CW, but the negative sign on the scalar component means that the actual moment is CCW. The vector points in the direction.       In three dimensions, moments, like forces, can be resolved into components in the , , and directions. . This means that the three scalar components are required to fully specify a moment in three dimensions, whereas only one is required for moments in a plane.   Be careful not to mix up magnitudes with scalar components.  Both are scalar values with units.  Magnitudes are never negative. Scalar components have may be positive or negative.  Scalar components always have an associated sign convention. It may be implied or specifically indicated. By default counter-clockwise moments are positive.  There is no special symbol or notation to indicate whether a quantity represents a vector magnitude or a scalar moment, so pay attention to context.        Addition of Moments  Scalar components are most useful for adding and finding the resultant of several moments. When moments are expressed in terms of scalar components, vector addition can reduced to algebraic addition of the scalar components.  To add several moment in a plane using scalar components, simply append a positive sign to the magnitude for counter-clockwise moments or a negative sign for clockwise moments to create a scalar component, then add the scalar components normally.  The resulting algebraic sum of the scalar components will be either positive, negative, or zero, and this sign indicates the direction of the resultant moment. If the result is positive the resultant acts in the direction of the unit vector, and in the opposite direction if it is negative.   Scalar addition   Find the resultant of the following three moments:  , , and    Clockwise    Manually attaching the positive or negative signs according to the right-hand rule turns the magnitudes into scalar moments: .  Adding these moments algebraically gives the resultant scalar moment. . The negative sign indicates that the resultant moment is clockwise.  Interpreting the scalar moment as a vector gives: .  The corresponding magnitude of is .     "
},
{
  "id": "scalar-components-moments-3-2",
  "level": "2",
  "url": "scalar-components-moments.html#scalar-components-moments-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar component unit vector "
},
{
  "id": "moment-sign-conventions-example",
  "level": "2",
  "url": "scalar-components-moments.html#moment-sign-conventions-example",
  "type": "Example",
  "number": "4.2.1",
  "title": "Sign Conventions.",
  "body": " Sign Conventions   For each scalar component, determine whether the moment is clockwise or counterclockwise, and apply the right-hand rule to determine the direction of the corresponding moment vector.                    or CCW  or CW  or CW  or CCW      By the right-hand rule, counterclockwise moments in the - plane are vectors that point in the direction. The corresponding scalar component has a positive sign. Clockwise moments point in the direction and have a negative sign.     is positive, so it is CCW and the vector points in the direction.    is negative, so it is CW and the vector points direction.    The arrow on establishes the positive direction as CW. A positive scalar component means that the direction is CW and the vector points in the direction.    The arrow on establishes the positive direction as CW, but the negative sign on the scalar component means that the actual moment is CCW. The vector points in the direction.      "
},
{
  "id": "scalar-components-moments-3-6",
  "level": "2",
  "url": "scalar-components-moments.html#scalar-components-moments-3-6",
  "type": "Warning",
  "number": "4.2.2",
  "title": "",
  "body": " Be careful not to mix up magnitudes with scalar components.  Both are scalar values with units.  Magnitudes are never negative. Scalar components have may be positive or negative.  Scalar components always have an associated sign convention. It may be implied or specifically indicated. By default counter-clockwise moments are positive.  There is no special symbol or notation to indicate whether a quantity represents a vector magnitude or a scalar moment, so pay attention to context.     "
},
{
  "id": "scalar-components-moments-example",
  "level": "2",
  "url": "scalar-components-moments.html#scalar-components-moments-example",
  "type": "Example",
  "number": "4.2.3",
  "title": "Scalar addition.",
  "body": " Scalar addition   Find the resultant of the following three moments:  , , and    Clockwise    Manually attaching the positive or negative signs according to the right-hand rule turns the magnitudes into scalar moments: .  Adding these moments algebraically gives the resultant scalar moment. . The negative sign indicates that the resultant moment is clockwise.  Interpreting the scalar moment as a vector gives: .  The corresponding magnitude of is .   "
},
{
  "id": "varignons-theorem",
  "level": "1",
  "url": "varignons-theorem.html",
  "type": "Section",
  "number": "4.3",
  "title": "Varignon’s Theorem",
  "body": " Varignon's Theorem   Varignon's Theorem is a method to calculate moments developed in 1687 by French mathematician Pierre Varignon (1654 1722). It states that   The sum of the moments of several concurrent forces about a point is equal to the moment of the resultant of those forces, or alternately, the moment of a force about a point equals the sum of the moments of its components.   This means you can find the moment of a force by first breaking it into components, evaluating the moments of the individual components, and finally summing them to find the net moment about the point.  This may sound like more work than just finding the moment of the original force, but in practice, it is often easier.  When applying Varignon's Theorem, you are free to select components in any direction, but the two most convenient choices are discussed below.    Parallel and Perpendicular Components  The first common way to apply Verignon's Theorem is to break the force creating the moment into two components, one parallel with the line segment connecting the moment center with the point of application of the force, and the other perpendicular to it.  Consider the wrench in the interactive diagram below. Assume that the length of the handle is , the magnitude of the force is and the angle between the force and the handle is . The components parallel to the wrench handle and perpendicular to it are . By Verignon's theorem and the definition of the moment, , the sum of the moments of the components simplifies to: , because the contribution of the parallel component is zero since its line of action passes through the moment center .   Varignon's Theorem: Perpendicular Component    This result agrees with our intuitive understanding of how a wrench works; the greatest torque is developed when the force is applied at a right angle to the handle.  Equations and not only produce the same result, but they are also completely identical. If the length of the handle is and the angle between the force and the handle is , then , and . Using either equation to calculate the moment gives .   Verignon's Theorem: Parallel and Perpendicular Components     A gardener is moving soil with a wheelbarrow. The length of the handle from to is , and in the position shown, is .  Find the moment created about axle when she applies a vertical force at by resolving force into components parallel and perpendicular to the handle.            When the handle makes an angle of with the horizontal axis, the perpendicular component of makes the same angle with the vertical, so resolving into perpendicular and parallel components gives:   Summing the moments of the components we find  Note that the parallel component does not contribute to the moment.      Horizontal and Vertical Components  Varignon's theorem is particularly convenient in situations where horizontal and vertical dimensions are provided, as is often the case. If you decompose the forces into horizontal and vertical components you can find the moments of the components without difficulty. The resultant moment is the sum of the moments of the components.  Verignon's Equation is and is the corresponding diagram for the moment of force about point . Notice that the horizontal component is multiplied by the vertical distance, and the vertical component is multiplied by the horizontal distance since these are the perpendiculars, and that the signs on the terms can be either positive or negative, depending on the direction of the component moments.   Verignon's Theorem Horizontal and Vertical Components   Point A is shown as an origin, with a distance dx indicated in the horizontal direction and distance dy indicated in the vertical direction. At coordinates (dx, dy), a Force F originates acting up and to the right with components of Fx in the horizontal direction and Fy in the vertical direction.    When applying Verignon's Theorem , take care to assign the correct sign to the individual moment terms; counterclockwise moments are positive, and clockwise negative are negative according to the right-hand rule, regardless of whether acts left or right, or whether acts up or down.   Varignon's Theorem: Horizontal and Vertical Components    A force is applied to the frame as shown. Determine the moment this force makes about point by resolving the force into horizontal and vertical components and applying Varignon's Theorem.      .    Force acts from the vertical with a magnitude, so its horizontal and vertical components are   For component , the perpendicular distance from point is so the moment of this component is .  For component , the perpendicular distance from point is so the moment of this component is .  Assigning a negative sign to and a positive sign to to account for their directions and summing, gives the moment of about .   The negative sign indicates that the resultant moment is clockwise, with a magnitude of .  .      Moment Cross Products  The most robust and general method to a moment of a force is to use the vector cross product , where is the force creating the moment, and is a position vector from the moment center to any point on the line of action of the force, as shown in . The cross product is a vector multiplication operation and the result is a vector perpendicular to the two vectors being multiplied.   Moment cross product.    The cross product method is most often used to find moments in three dimensions, as will be discussed in , but it can also be applied in two-dimensional problems.  The next example demonstrates the technique and compares it to the other methods we have already discussed. You will see that the cross product method is mathematically identical to applying Verignon's theorem.   2D Moments - Four Ways     A 500-pound-force vector pulls from point D located at (0,2) feet and we want to find the moment of this force around point A at (-4,-3) feet. A position vector r connects point A with point D    Force has a magnitude of and acts on point in the direction shown.  Find the moment caused by force around point using different methods and verify that they give the same result.    This problem demonstrates four different ways you can solve the problem. The first two methods use vector algebra; the second two take a scalar approach that uses geometry and right-triangle trigonometry. All four methods are mathematically identical.    Find the moment of about point using Varignon's Theorem, .     Varignon's Theorem states that the moment of a force is the sum of the moments of its components. In this example we will determine the vertical and horizontal components of and , then add the cross products of the two perpendicular pairs.    TBD    The 3:2 slope of can be expressed as an angle.  Find the components of and .   Finally, following Varignon's Theorem, add the cross products of the perpendicular component pairs.   Notes:   When finding the moment of two-dimensional vectors in component form, this is often the preferred method, as it is quick and most find the process intuitive.    The first cross product, , has a positive value because , not because you are simply multiplying two positive components.    The second cross product, , results in a negative value because .    All moments have units of force times distance, in this case [ft lbf].    The overall sign of determines the final direction. A positive value corresponds to a counterclockwise moment right thumb out of the page and a negative value indicates a clockwise moment. See for the hand diagram.       Find the moment of about point using a vector cross product, .       A diagram with both position vector r and force vector F broken into x and y components.   We can also solve for the moment using the vector determinant method of . We can use the values of , , and computed in part (a) above. Jumping straight into the vector determinant, we find:      Notes:   Determinants are a robust way to compute two-dimensional cross products but take a bit more effort than Varignon's Theorem. The math is exactly the same either way, which means that Varignon's Theorem is just a shortcut to working through a two-dimensional vector determinant.    The signs on the cross-product terms and still come from the right-hand rule, and conveniently the process of multiplying diagonals in the determinant takes care of the signs.    Recognize that the reason we multiply diagonals in a determinant is that we only want to multiply the perpendicular components.       Find the moment of about point by finding the perpendicular distance , .       A diagram where the line-of-action of F is extended down past A and a perpendicular distance is drawn between point A and this line-of-action.   This solution requires you to find the perpendicular distance between the point and line-of-action of . One way to find this distance is shown below.      Draw a moderately large and accurate diagram. Too much confusion has been created by small, inaccurately-drawn diagrams. Include a right triangle whose hypotenuse connects the moment center with a convenient point on the line of action of . We have chosen point , although point would work as well. Can you prove that is on the line of action?    Since the angle between the line of action of the force and any horizontal line is the same everywhere, appears three more times on this diagram, and gives us an angle in the right triangle.    Use right triangle trigonometry to find .     Finally, compute the moment about . The direction of comes from the observation of the right-hand rule, as scalar moment computations are not directional.       Find the moment of about point by finding the perpendicular component of , .       A diagram where the portion of force F perpendicular to the segment connecting A to point B where the force is apples is shown.    This solution requires you to find the rectangular component of force perpendicular to segment connecting the moment center with a point on the line of action of .  One approach to finding is shown below.       Draw a large and accurate diagram to assist in finding the distances and angles in this problem.  Draw a line through point and the point where acts, or to any other convenient point on its line of action. Then draw a rectangle aligned with this line indicating the parallel and perpendicular components of . This rectangle consists of two congruent right triangles, having the force as their common hypotenuse. You will need to find an angle inside in the triangle to find the components.    Use triangle to compute angle and the length of the hypotenuse .    Recalling that we have previously found , find .    Find using the force triangle.       Finally, compute the magnitude and the vector . The counterclockwise direction comes from the right-hand rule, since scalar moment computations are not directional.         We have discussed several different approaches for finding the moment of a force about a point in the preceding sections. While all of these methods produce the same result, frequently you will find that one method is computationally simpler to apply than another. The simplest method generally depends on what is know and unknown in a given situation, so we recommend that you become familiar with all these methods.  The interactive diagram below will help you visualize the different approaches for finding moments that were covered.   Four equivalent approaches to finding a moment about a point.     "
},
{
  "id": "wrench_view_3",
  "level": "2",
  "url": "varignons-theorem.html#wrench_view_3",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " Varignon's Theorem: Perpendicular Component   "
},
{
  "id": "perpendicular-component-7",
  "level": "2",
  "url": "varignons-theorem.html#perpendicular-component-7",
  "type": "Example",
  "number": "4.3.2",
  "title": "Verignon’s Theorem: Parallel and Perpendicular Components.",
  "body": " Verignon's Theorem: Parallel and Perpendicular Components     A gardener is moving soil with a wheelbarrow. The length of the handle from to is , and in the position shown, is .  Find the moment created about axle when she applies a vertical force at by resolving force into components parallel and perpendicular to the handle.            When the handle makes an angle of with the horizontal axis, the perpendicular component of makes the same angle with the vertical, so resolving into perpendicular and parallel components gives:   Summing the moments of the components we find  Note that the parallel component does not contribute to the moment.   "
},
{
  "id": "verignon-diagram",
  "level": "2",
  "url": "varignons-theorem.html#verignon-diagram",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " Verignon's Theorem Horizontal and Vertical Components   Point A is shown as an origin, with a distance dx indicated in the horizontal direction and distance dy indicated in the vertical direction. At coordinates (dx, dy), a Force F originates acting up and to the right with components of Fx in the horizontal direction and Fy in the vertical direction.   "
},
{
  "id": "Chapter_04-example-varignon-s-theorem",
  "level": "2",
  "url": "varignons-theorem.html#Chapter_04-example-varignon-s-theorem",
  "type": "Example",
  "number": "4.3.4",
  "title": "Varignon’s Theorem: Horizontal and Vertical Components.",
  "body": " Varignon's Theorem: Horizontal and Vertical Components    A force is applied to the frame as shown. Determine the moment this force makes about point by resolving the force into horizontal and vertical components and applying Varignon's Theorem.      .    Force acts from the vertical with a magnitude, so its horizontal and vertical components are   For component , the perpendicular distance from point is so the moment of this component is .  For component , the perpendicular distance from point is so the moment of this component is .  Assigning a negative sign to and a positive sign to to account for their directions and summing, gives the moment of about .   The negative sign indicates that the resultant moment is clockwise, with a magnitude of .  .   "
},
{
  "id": "wrench_view_4",
  "level": "2",
  "url": "varignons-theorem.html#wrench_view_4",
  "type": "Figure",
  "number": "4.3.5",
  "title": "",
  "body": " Moment cross product.   "
},
{
  "id": "Chapter_03-2d-moments-4ways",
  "level": "2",
  "url": "varignons-theorem.html#Chapter_03-2d-moments-4ways",
  "type": "Example",
  "number": "4.3.6",
  "title": "2D Moments - Four Ways.",
  "body": " 2D Moments - Four Ways     A 500-pound-force vector pulls from point D located at (0,2) feet and we want to find the moment of this force around point A at (-4,-3) feet. A position vector r connects point A with point D    Force has a magnitude of and acts on point in the direction shown.  Find the moment caused by force around point using different methods and verify that they give the same result.    This problem demonstrates four different ways you can solve the problem. The first two methods use vector algebra; the second two take a scalar approach that uses geometry and right-triangle trigonometry. All four methods are mathematically identical.    Find the moment of about point using Varignon's Theorem, .     Varignon's Theorem states that the moment of a force is the sum of the moments of its components. In this example we will determine the vertical and horizontal components of and , then add the cross products of the two perpendicular pairs.    TBD    The 3:2 slope of can be expressed as an angle.  Find the components of and .   Finally, following Varignon's Theorem, add the cross products of the perpendicular component pairs.   Notes:   When finding the moment of two-dimensional vectors in component form, this is often the preferred method, as it is quick and most find the process intuitive.    The first cross product, , has a positive value because , not because you are simply multiplying two positive components.    The second cross product, , results in a negative value because .    All moments have units of force times distance, in this case [ft lbf].    The overall sign of determines the final direction. A positive value corresponds to a counterclockwise moment right thumb out of the page and a negative value indicates a clockwise moment. See for the hand diagram.       Find the moment of about point using a vector cross product, .       A diagram with both position vector r and force vector F broken into x and y components.   We can also solve for the moment using the vector determinant method of . We can use the values of , , and computed in part (a) above. Jumping straight into the vector determinant, we find:      Notes:   Determinants are a robust way to compute two-dimensional cross products but take a bit more effort than Varignon's Theorem. The math is exactly the same either way, which means that Varignon's Theorem is just a shortcut to working through a two-dimensional vector determinant.    The signs on the cross-product terms and still come from the right-hand rule, and conveniently the process of multiplying diagonals in the determinant takes care of the signs.    Recognize that the reason we multiply diagonals in a determinant is that we only want to multiply the perpendicular components.       Find the moment of about point by finding the perpendicular distance , .       A diagram where the line-of-action of F is extended down past A and a perpendicular distance is drawn between point A and this line-of-action.   This solution requires you to find the perpendicular distance between the point and line-of-action of . One way to find this distance is shown below.      Draw a moderately large and accurate diagram. Too much confusion has been created by small, inaccurately-drawn diagrams. Include a right triangle whose hypotenuse connects the moment center with a convenient point on the line of action of . We have chosen point , although point would work as well. Can you prove that is on the line of action?    Since the angle between the line of action of the force and any horizontal line is the same everywhere, appears three more times on this diagram, and gives us an angle in the right triangle.    Use right triangle trigonometry to find .     Finally, compute the moment about . The direction of comes from the observation of the right-hand rule, as scalar moment computations are not directional.       Find the moment of about point by finding the perpendicular component of , .       A diagram where the portion of force F perpendicular to the segment connecting A to point B where the force is apples is shown.    This solution requires you to find the rectangular component of force perpendicular to segment connecting the moment center with a point on the line of action of .  One approach to finding is shown below.       Draw a large and accurate diagram to assist in finding the distances and angles in this problem.  Draw a line through point and the point where acts, or to any other convenient point on its line of action. Then draw a rectangle aligned with this line indicating the parallel and perpendicular components of . This rectangle consists of two congruent right triangles, having the force as their common hypotenuse. You will need to find an angle inside in the triangle to find the components.    Use triangle to compute angle and the length of the hypotenuse .    Recalling that we have previously found , find .    Find using the force triangle.       Finally, compute the magnitude and the vector . The counterclockwise direction comes from the right-hand rule, since scalar moment computations are not directional.      "
},
{
  "id": "moments-4-ways",
  "level": "2",
  "url": "varignons-theorem.html#moments-4-ways",
  "type": "Figure",
  "number": "4.3.7",
  "title": "",
  "body": " Four equivalent approaches to finding a moment about a point.   "
},
{
  "id": "Chapter_04-moments-in-three-dimensions",
  "level": "1",
  "url": "Chapter_04-moments-in-three-dimensions.html",
  "type": "Section",
  "number": "4.4",
  "title": "3D Moments",
  "body": " 3D Moments    Where does the moment arm vector start and end?  Why does Varignon's Theorem give you the same answer as a determinant?  How can you combine a dot product and a cross product to find the moment about a line?  Why does a mixed-triple determinant give you a scalar while a cross-product determinant gives you a vector?     The circular arrows we used to represent vectors in two dimensions are unclear in three dimensions, so instead, moments are represented as arrows with , and components, like force and position vectors. You will sometimes see moments indicated with double arrowheads to differentiate them from force vectors.  In three dimensions, it is usually not convenient to use geometry to find the moment arm for equation , so instead we will use the vector cross product method, which is easier to apply but less intuitive.    3D Cross Products  The mathematics of cross products was discussed in , and equation provides one method to calculate a moment cross products . Here, is the angle between the two vectors as shown in above, and is the unit vector perpendicular to both and with the direction coming from the right-hand rule. This equation is useful if you know or can find the magnitudes of and and the angle between them. This equation is the vector equivalent of .  Alternately, if you know or can find the components of the position and force vectors, it's typically easiest to evaluate the moment cross product using the determinant form discussed in .   Here, , , and are components of the vector describing the distance from the point of interest to the force. , , and are components of the force. The resulting moment has three components. . These represent the component moments acting around each of the three coordinate axes. The magnitude of the resultant moment can be calculated using the three-dimensional Pythagorean Theorem.   It is important to avoid three common mistakes when setting up the cross product.  The order must always be , never . The moment arm appears in the middle line of the determinant and the force on the bottom line.  The moment arm must always be measured from the moment center to the line of action of the force. Never from the force to the point.  The signs of the components of must follow those of a right-hand coordinate system.    In two dimensions, and are zero, so reduces to . This is just the vector equivalent of Varignon's Theorem in two dimensions, with the correct signs automatically determined from the signs on the scalar components of and .    Moment about a Point  The next two interactives should help you visualize moments in three dimensions.  The first shows the force vector, position vector and the resulting moment all placed at the origin for simplicity. The moment is perpendicular to the plane containing and and has a magnitude equal to the area of the parallelogram with and for sides.   Moment about the origin.     The second interactive shows a more realistic situation. The moment center is at arbitrary point , and the line of action of force passes through arbitrary points and . The position vector is the vector from to a point on the line of action, and the force can be slid anywhere along that line.    Moment about an arbitrary point.      3D Moment about a Point     In an axis system with x to the right, y up on the page, and z coming A thin plate OABC sits in the xy plane. Cable BD pulls with a tension of 2 kN down to anchor point D. Find the moment of the tension force around point O.   A thin plate sits in the plane. Cable pulls with a tension of through a frictionless ring at point . Find the moment caused by the tension force around point .        Start the problem by using the position information and tension magnitude to find the force vector . This will be done in three steps:      Find the position vector : Find position vectors by either subtracting the start-point coordinates from the end-point coordinates or focusing on the changes in the position components from to .      Find the unit vector of : Compute a unit vector by dividing by the total length of . Note that is unitless and is the pure direction of .     Multiply the unit vector by force magnitude: Now multiply by the force magnitude to find the force components.      Next, find the moment arm from point to the line of action of the force. There are two obvious options for moment arms, either or . To demonstrate how both moment arms give the same answer, solutions for both moment arms will be shown.  Option 1: Moment using   A thin plate OABC sits in the xy plane. Cable BD pulls with a tension of 2 kN down to anchor point D. A position vector r_OB goes from the origin to the tail of the 2 kN force vector.      Moment arm starts at the point we are taking the moment around, , and ends at the point .     Cross with to find the moment of about point .      Option 2: Moment using   A thin plate OABC sits in the xy plane. Cable BD pulls with a tension of 2 kN down to anchor point D. A position vector r_OB goes from the origin to the tail of the 2 kN force vector.      Moment arm starts at the point we are taking the moment around, , and ends at the point .     Cross with to find the moment of about point .      It is worth your effort to compute moments both ways for this example, or another problem, to prove to yourself that the answers work out exactly the same with different moment arms. Technically, you could select a position vector from anywhere on line and get the correct answer, but or are the only two between defined points in this problem.   Solution drawing to moment form force F_BD on the upper left corner of thin plate OABC.   Drawing , demonstrates that a moment vector direction is both 1) the axis of rotation caused by around point , with the moment aligning to your thumb and the moment rotating around your fingers from the right-hand rule and 2) that is perpendicular to the plane formed by and . Recall that all cross products result in vectors perpendicular to the two crossed vectors.      Moment about a Line  In three dimensions, the moment of a force about a point can be resolved into components about the , and axes. The moment produces a rotational tendency about all three axes simultaneously, but only a portion of the total moment acts about any particular axis.  We are often interested in finding the effect of a moment about a specific line or axis. For example, consider the moment created by a push on a door handle. Unless you push with a force exactly perpendicular to the hinge, only a portion of the total moment you produce will act around the hinge axis and be effective to open the door. The moment we are looking for is the vector projection of the moment onto the axis of interest. Vector projections were first discussed in .    Moment on a hinge.     The axis of interest does not need to be a coordinate axis. This interactive shows the projection of moment on a line passing through points and .    Moment of a force about a line     To find the moment of a force about a line, three vectors are required:  , a unit vector pointing in the direction of the line or axis of interest.  , a position vector from any point on the line of interest to any point on the line of action of the force.  , the force vector. If you have multiple concurrent forces, you can treat them individually or add them together first and find the moment of the resultant.    Using these three vectors, we can compute the magnitude of the moment about a line in two related, but unique ways.   Two-Step Method : Separates the cross and dot products into two distinct steps.  First, compute the moment of a the force about any point on the line of interest using the cross product, .  Next, find the scalar projection of the moment onto the line of interest using a dot product, .     Scalar Triple Product : Combines the cross and dot product into the determinant of a 3 3 matrix formed from the three vectors above.  The scalar triple product consists of taking the determinant of a matrix consisting of the components of the line's unit vector in the top row, the components of a position vector in the middle row, and the components of the in the bottom row. The determiant can be computed in multiple ways, but we suggest using the augmented determinant method or computing it directly in a calculator which allows 3 3 matrix computations.  Here are the computations:   Note that the above determinant does not contain any unit vectors, like the , and vectors that show up in the top of cross-product determinants. Therefore, you are just multiplying the numbers in the diagonals and adding them up to a scalar value.    A positive value indicates that the moment vector points in the direction, while a negative value indicate the moment points in the opposite direction.  Finally if you need to find the vector components of this moment about a line, multiplying the scalar projection by the line's unit vector will add direction to your scalar moment value, .   3D Moment about a Line     alt text    A per side square box is attached to fixed pipe by two frictionless hinges and . There are two forces applied to the box, and .  For this two part example, first find the rotational moment from about line and then find the moment of and about line .      Find the magnitude of the moment caused by force about line .     The key observation to find the moment of about line is that the line of action of goes directly through line , thus force produces no moment about line . Force still pulls on the box and line , but causes no rotation about line . While you could set up a two-step or mixed triple to compute this moment, the simplest moment arm from line to force would be which results in a .    Find the magnitude of the moment caused by force about line .     Keep in mind that to compute the magnitude of a moment about a line, we need to compute a vector moment about a point on the line and then dot this vector moment onto the line's unit vector. There are two options for this computatons:  Option 1: The Two-Step Method separates the cross and dot products into two distinct steps.  Compute the vector moment of about any point on line , including or , then  Dot onto the unit vector    Option 2: The Scalar Triple Product combines the cross and dot product into a single matrix determinant including the following vectors:  Top row: Unit vector for the line of interest  Middle row: Moment arm from line of interest to force vector. We'll use as it has the most zeros, which will simplify the algebra when computing the determinant.  Bottom row: Components of force vector    Let's set up the vectors for the scalar triple product starting with the unit vector .  The unit vector is found by dividing the positon vector by its own magnitude.    Next, the middle row of the scalar triple product is one of the moment arms from to the force . There are four options which will all result in the same answer after you compute the scalar triple product. We'll use going forward as it is a one-dimensional vector and the zeros will simplify the determinant.   Line drawing of moment arms going from line BG to line of action of P_2, HD.    Finally, the bottom row of the scalar triple product are the force vector components.   Now, combining the three vectors, here is the triple scalar product matrix:      Hence, the magnitude of the moment caused by force about line is . As we found a positive answer, this confirms that the rotation caused by is in the same direction as the vector , this is reinforced by the right-hand rule thumb direction in the diagram.   Solution line drawing showing the moment around r_GH, the force P_2, and the resulting moment M_BG.    Validating the answer with the 2-step approach, we could first sum the moment of about point G.   Given that the moment and line lie in a 2-D plane, you could even use a \\ang{45} right triangle instead of a dot product to find the amount of which lies along line .   Not all problems have simple geometry where you can form a right triangle to perform a dot product, but this process demonstrates the two-step combination of a cross and a dot product to find a moment about a line.     "
},
{
  "id": "Chapter_04-moments-in-three-dimensions-2",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#Chapter_04-moments-in-three-dimensions-2",
  "type": "Key Questions",
  "number": "4.4",
  "title": "",
  "body": "  Where does the moment arm vector start and end?  Why does Varignon's Theorem give you the same answer as a determinant?  How can you combine a dot product and a cross product to find the moment about a line?  Why does a mixed-triple determinant give you a scalar while a cross-product determinant gives you a vector?   "
},
{
  "id": "ggb_f9kpnaqf",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#ggb_f9kpnaqf",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " Moment about the origin.   "
},
{
  "id": "ggb_qevhtn56",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#ggb_qevhtn56",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": " Moment about an arbitrary point.   "
},
{
  "id": "Chapter_04-3d-moment-about-point",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#Chapter_04-3d-moment-about-point",
  "type": "Example",
  "number": "4.4.3",
  "title": "3D Moment about a Point.",
  "body": " 3D Moment about a Point     In an axis system with x to the right, y up on the page, and z coming A thin plate OABC sits in the xy plane. Cable BD pulls with a tension of 2 kN down to anchor point D. Find the moment of the tension force around point O.   A thin plate sits in the plane. Cable pulls with a tension of through a frictionless ring at point . Find the moment caused by the tension force around point .        Start the problem by using the position information and tension magnitude to find the force vector . This will be done in three steps:      Find the position vector : Find position vectors by either subtracting the start-point coordinates from the end-point coordinates or focusing on the changes in the position components from to .      Find the unit vector of : Compute a unit vector by dividing by the total length of . Note that is unitless and is the pure direction of .     Multiply the unit vector by force magnitude: Now multiply by the force magnitude to find the force components.      Next, find the moment arm from point to the line of action of the force. There are two obvious options for moment arms, either or . To demonstrate how both moment arms give the same answer, solutions for both moment arms will be shown.  Option 1: Moment using   A thin plate OABC sits in the xy plane. Cable BD pulls with a tension of 2 kN down to anchor point D. A position vector r_OB goes from the origin to the tail of the 2 kN force vector.      Moment arm starts at the point we are taking the moment around, , and ends at the point .     Cross with to find the moment of about point .      Option 2: Moment using   A thin plate OABC sits in the xy plane. Cable BD pulls with a tension of 2 kN down to anchor point D. A position vector r_OB goes from the origin to the tail of the 2 kN force vector.      Moment arm starts at the point we are taking the moment around, , and ends at the point .     Cross with to find the moment of about point .      It is worth your effort to compute moments both ways for this example, or another problem, to prove to yourself that the answers work out exactly the same with different moment arms. Technically, you could select a position vector from anywhere on line and get the correct answer, but or are the only two between defined points in this problem.   Solution drawing to moment form force F_BD on the upper left corner of thin plate OABC.   Drawing , demonstrates that a moment vector direction is both 1) the axis of rotation caused by around point , with the moment aligning to your thumb and the moment rotating around your fingers from the right-hand rule and 2) that is perpendicular to the plane formed by and . Recall that all cross products result in vectors perpendicular to the two crossed vectors.   "
},
{
  "id": "Chapter_04-moment-about-a-line-4-1",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#Chapter_04-moment-about-a-line-4-1",
  "type": "Figure",
  "number": "4.4.4",
  "title": "",
  "body": " Moment on a hinge.   "
},
{
  "id": "Chapter_04-moment-about-a-line-6-1",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#Chapter_04-moment-about-a-line-6-1",
  "type": "Figure",
  "number": "4.4.5",
  "title": "",
  "body": " Moment of a force about a line   "
},
{
  "id": "Chapter_04-moment-about-a-line-9",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#Chapter_04-moment-about-a-line-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Two-Step Method "
},
{
  "id": "Chapter_04-moment-about-a-line-10",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#Chapter_04-moment-about-a-line-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scalar Triple Product "
},
{
  "id": "Chapter_04-3d-moment-about-line",
  "level": "2",
  "url": "Chapter_04-moments-in-three-dimensions.html#Chapter_04-3d-moment-about-line",
  "type": "Example",
  "number": "4.4.6",
  "title": "3D Moment about a Line.",
  "body": " 3D Moment about a Line     alt text    A per side square box is attached to fixed pipe by two frictionless hinges and . There are two forces applied to the box, and .  For this two part example, first find the rotational moment from about line and then find the moment of and about line .      Find the magnitude of the moment caused by force about line .     The key observation to find the moment of about line is that the line of action of goes directly through line , thus force produces no moment about line . Force still pulls on the box and line , but causes no rotation about line . While you could set up a two-step or mixed triple to compute this moment, the simplest moment arm from line to force would be which results in a .    Find the magnitude of the moment caused by force about line .     Keep in mind that to compute the magnitude of a moment about a line, we need to compute a vector moment about a point on the line and then dot this vector moment onto the line's unit vector. There are two options for this computatons:  Option 1: The Two-Step Method separates the cross and dot products into two distinct steps.  Compute the vector moment of about any point on line , including or , then  Dot onto the unit vector    Option 2: The Scalar Triple Product combines the cross and dot product into a single matrix determinant including the following vectors:  Top row: Unit vector for the line of interest  Middle row: Moment arm from line of interest to force vector. We'll use as it has the most zeros, which will simplify the algebra when computing the determinant.  Bottom row: Components of force vector    Let's set up the vectors for the scalar triple product starting with the unit vector .  The unit vector is found by dividing the positon vector by its own magnitude.    Next, the middle row of the scalar triple product is one of the moment arms from to the force . There are four options which will all result in the same answer after you compute the scalar triple product. We'll use going forward as it is a one-dimensional vector and the zeros will simplify the determinant.   Line drawing of moment arms going from line BG to line of action of P_2, HD.    Finally, the bottom row of the scalar triple product are the force vector components.   Now, combining the three vectors, here is the triple scalar product matrix:      Hence, the magnitude of the moment caused by force about line is . As we found a positive answer, this confirms that the rotation caused by is in the same direction as the vector , this is reinforced by the right-hand rule thumb direction in the diagram.   Solution line drawing showing the moment around r_GH, the force P_2, and the resulting moment M_BG.    Validating the answer with the 2-step approach, we could first sum the moment of about point G.   Given that the moment and line lie in a 2-D plane, you could even use a \\ang{45} right triangle instead of a dot product to find the amount of which lies along line .   Not all problems have simple geometry where you can form a right triangle to perform a dot product, but this process demonstrates the two-step combination of a cross and a dot product to find a moment about a line.   "
},
{
  "id": "Chapter_04-couples",
  "level": "1",
  "url": "Chapter_04-couples.html",
  "type": "Section",
  "number": "4.5",
  "title": "Couples",
  "body": " Couples    What makes a couple different than a typical moment?  Why is a couple considered a pure moment?  If a couple is applied about the point we are summing moments, does it still need to be included in the sum of moments equation?    The moments we have considered so far were all caused by single forces producing rotation about a moment center. In this section, we will consider another type of moment, called a couple .  A couple consists of two parallel forces, equal in magnitude, opposite in direction, and non-coincident. Couples are special because the pair of forces always cancel each other, which means that a couple produces a rotational effect but never translation. For this reason, couples are sometimes referred to as pure moments. The strength of the rotational effect is called the moment of the couple or the couple-moment .  When a single force causes a moment about a point, the magnitude depends on the magnitude of the force and the location of the point. In contrast, the moment of a couple is the same at every point and only depends on the magnitude of the opposite forces and the distance between them.  For example, consider the interactive where two equal and opposite forces with different lines of action form a couple. The moment of this couple is found by summing the moments of the two forces about arbitrary moment center applying positive or negative signs for each term according to the right-hand rule. The moment of the couple is always where is the perpendicular distance between the lines of action of the forces.   Moment of a couple.    In two dimensions, couples are represented by a curved arrow indicating the direction of the rotational effect. Following the right-hand rule, the value will be positive if the moment is counter-clockwise and negative if it is clockwise. In three dimensions, a couple is represented by a normal vector arrow.  When adding moments to find the total or resultant moment, you must include couple-moments as well the moments. In equation form, we could express this as:   Location Independence  In this section we have shown that couples produce the same moment at every point on the body. This means that the external effect of couples is location independent . Because the moment of a couple is location independent, the moment vector is not bound to any particular point and for this reason is a free vector .  We will learn in that moving a couple around on a rigid body does affect the internal loads or stresses inside a body, but changing the location of a couple does not change the external loading or reactions.   "
},
{
  "id": "Chapter_04-couples-2",
  "level": "2",
  "url": "Chapter_04-couples.html#Chapter_04-couples-2",
  "type": "Key Questions",
  "number": "4.5",
  "title": "",
  "body": "  What makes a couple different than a typical moment?  Why is a couple considered a pure moment?  If a couple is applied about the point we are summing moments, does it still need to be included in the sum of moments equation?   "
},
{
  "id": "Chapter_04-couples-3",
  "level": "2",
  "url": "Chapter_04-couples.html#Chapter_04-couples-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "couple "
},
{
  "id": "Chapter_04-couples-4",
  "level": "2",
  "url": "Chapter_04-couples.html#Chapter_04-couples-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment of the couple couple-moment "
},
{
  "id": "ggb_mq7qn23y",
  "level": "2",
  "url": "Chapter_04-couples.html#ggb_mq7qn23y",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": " Moment of a couple.   "
},
{
  "id": "Chapter_04-couples-10",
  "level": "2",
  "url": "Chapter_04-couples.html#Chapter_04-couples-10",
  "type": "Thinking Deeper",
  "number": "4.5.2",
  "title": "Location Independence.",
  "body": " Location Independence  In this section we have shown that couples produce the same moment at every point on the body. This means that the external effect of couples is location independent . Because the moment of a couple is location independent, the moment vector is not bound to any particular point and for this reason is a free vector .  We will learn in that moving a couple around on a rigid body does affect the internal loads or stresses inside a body, but changing the location of a couple does not change the external loading or reactions.  "
},
{
  "id": "equivalent-tranformations",
  "level": "1",
  "url": "equivalent-tranformations.html",
  "type": "Section",
  "number": "4.6",
  "title": "Equivalent Transformations",
  "body": " Equivalent Transformations    What is an equivalent transformation?  What are some examples of equivalent transformations?  What are external effects ?    An equivalent transformation occurs when a loading on an object is replaced with another loading that has the same external effect on the object. By external effect, we mean the response of the body that we can see from the outside, with no consideration of what happens to it internally. If the object is a free body, the external effect would be translation and rotation. In statics, since objects are not accelerating, the external effect really means the reactions at the supports required to maintain equilibrium. The external effects will be exactly the same before and after an equivalent transformation.  Equivalent transformation permits us to swap out one set of forces with another one without changing the fundamental physics of the situation. This is usually done to simplify or clarify the situation, or to give you an alternate way to think about, understand, and solve a mechanics problem.  You already know several equivalent transformations although we have not used this terminology before. Here are some transformations you have applied previously.   Vector Addition  When you add forces together using the rules of vector addition, you are performing an equivalent transformation. You can swap out two or more components and replace them with a single equivalent resultant force.  Any number of concurrent forces can be added together to produce a single resultant force. By definition, the lines of action of concurrent forces all intersect at a common point. The resultant must be placed at this intersection point in order for this replacement to be equivalent. This is because before and after the replacement, the moment about the intersection point is zero. If the resultant was placed somewhere else, that would not be true.    Replacing a Force with its Component  Resolving forces into components is also an equivalent transformation, as it is the inverse operation of vector addition. The components are usually orthogonal and in the coordinate directions, or in a given plane and perpendicular to it, but any combination of force components that add to the original force is equivalent.   Equivalent transformations of vectors   A fixed ring is shown with two forces F1 and F2. This is equal to a fixed ring with the resultant force shown acting at an angle of theta from the horizontal, which would be pointing towards the coordinates (F1x+F2x, F1y+F2y). This is equal to a fixed ring with a horizontal force of F*cos(theta) and a vertical force of F*sin(theta).   William Haynes  CC-BY-SA     In this diagram, . The effects of the force in the , and (in three dimensions the ) directions remain the same, and by Varignon's theorem, we know that the moment these forces make about any point will also be the same.  An interesting special case occurs when two forces are equal and opposite and have the same line of action. When these are added together, they cancel out, so replacing these two forces with nothing is an equivalent transformation. The opposite is true as well, so you can make two equal and opposite forces spontaneously appear at a point if you wish.    Internal Effects  We made a point of saying that equivalent systems of force have the same effect on the body. This implies that there may be some other effects that are not the same. As you will see in , we sometimes need to consider internal forces and moments. These are the forces inside a body that hold all the parts of the object to each other, otherwise, it would break apart and fail. Although the external effects are the same for all equivalent systems, the internal forces depend on the specifics of how the loads are applied.    Let's imagine that you have gone off-roading and have managed to get your Jeep stuck in the mud. You have two basic options to get it out: you can it out using the winch on the front bumper, or you can ask your friend to you out with his truck. Both methods (assuming that they apply forces with the same magnitude, direction and line of action) are statically equivalent, and both will equally move your vehicle forward.     Dave_7  CC-BY-SA     The difference is what might happen to your vehicle. With one method there's a danger that you will rip your front bumper off, with the other, you might damage your rear bumper. These are the internal effects and they depend on where the equivalent force is applied. These forces are necessary to maintain rigidity and hold the parts of the body together.    Sliding a force along its line of action  Sliding a force along its line of action is an equivalent transformation because sliding a force does not change its magnitude, direction or the perpendicular distance from the line of action to any point, so the moments it creates do not change either. This transformation is called the Principle of Transmissibility .   Sliding a vector along its line of action   A force vector is shown acting along a line of action. It is equivalent to a diagram where the same force vector has been shifted along the same line of action.   William Haynes  CC-BY-SA       Replacing a couple with couple-moment or vice-versa  A couple , defined as two equal and opposite forces with different lines of action, produces a pure turning action that is equivalent to a concentrated moment, called the couple-moment . Couples and couple-moments have no translational effect. Couple-moments are free vectors, which means that they are not bound to any point. Their external effect is on the entire body and is the same regardless of where it is applied.  This means that you are free to swap out a couple for its couple-moment, or swap a couple-moment for a couple that has the same moment, and you may put the replacement anywhere on you please and it will still be equivalent.  The diagram shows a series of equivalent transformations of a couple.   Equivalent transformations of couples   Six equivalent diagrams are shown representing a couple-moment. Two equal and opposite forces in parallel of magnitude F separated by a perpendicular distance d = two equal\/opposite parallel forces of magnitude (F\/2) separated by a perpendicular distance 2d = two equal\/opposite parallel forces at a different angle separated by a perpendicular distance d = two equal\/opposite parallel forces of magnitude 2F separated by a perpendicular distance of (d\/2) = a Moment of magnitude M = Fd acting counter-clockwise at the middle of the object = a Moment of M = Fd acting counter-clockwise at the edge of the object.   William Haynes  CC-BY-SA     Concentrated moments are free vectors , which you may draw the circular arrow anywhere you like on the body. In other words, moving a concentrated moment from one point to another is an equivalent transformation. Remember though, this equivalence only applies to the external effects. What happens inside the body definitely does depend on the specific point where the moment is applied.    Adding moments to produce a resultant moment  If more than one couple-moment or concentrated moment acts on an object the situation may be simplified by adding them together to produce one resultant moment , . The standard rules of vector addition apply.  In two-dimensional problems moments are either clockwise or counter-clockwise, so they may be considered scalar values and added algebraically. Give counter-clockwise moments a positive sign and clockwise moments a negative sign according to the right-hand rule sign convention. If this is done, the sign of the resultant moment will indicate the direction of the net moment. You can use the right-hand rule to establish the direction of the moment vector, which will point into or out of the page.     Equivalent Moment     Two concentrated moments and a couple act on the object shown. Given: , , , and .  Replace these with a single, equivalent concentrated moment, and give the magnitude and direction of your result.    An object is shown with a Force couple where two equal\/opposite parallel forces of magnitude 40 N are shown. The distance between them is shown as d = 2 m, but the forces act at an angle of 60 degrees from the distance vector. M1 = 400 N*m in clockwise direction, and M2 = 2200 N*m in counter-clockwise direction.   William Haynes  CC-BY-SA       clockwise.    First, replace the couple with an equivalent couple, , the magnitude of which is     By observation, this is a counter-clockwise moment, as is . is clockwise. Summing the scalar magnitudes gives the resultant moment. The signs of the terms are assigned according to the sign convention: positive if counter-clockwise, negative if clockwise.        Resolving a moment into components  For three-dimensional moment vectors, another potential equivalent transformation is to resolve a moment vector into components. These may be orthogonal components in the , , and directions, or components in a plane and perpendicular to it, or components in some other rotated coordinate system.   "
},
{
  "id": "equivalent-tranformations-2",
  "level": "2",
  "url": "equivalent-tranformations.html#equivalent-tranformations-2",
  "type": "Key Questions",
  "number": "4.6",
  "title": "",
  "body": "  What is an equivalent transformation?  What are some examples of equivalent transformations?  What are external effects ?   "
},
{
  "id": "equivalent-tranformations-7-3",
  "level": "2",
  "url": "equivalent-tranformations.html#equivalent-tranformations-7-3",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": " Equivalent transformations of vectors   A fixed ring is shown with two forces F1 and F2. This is equal to a fixed ring with the resultant force shown acting at an angle of theta from the horizontal, which would be pointing towards the coordinates (F1x+F2x, F1y+F2y). This is equal to a fixed ring with a horizontal force of F*cos(theta) and a vertical force of F*sin(theta).   William Haynes  CC-BY-SA    "
},
{
  "id": "equivalent-tranformations-8",
  "level": "2",
  "url": "equivalent-tranformations.html#equivalent-tranformations-8",
  "type": "Thinking Deeper",
  "number": "4.6.2",
  "title": "Internal Effects.",
  "body": " Internal Effects  We made a point of saying that equivalent systems of force have the same effect on the body. This implies that there may be some other effects that are not the same. As you will see in , we sometimes need to consider internal forces and moments. These are the forces inside a body that hold all the parts of the object to each other, otherwise, it would break apart and fail. Although the external effects are the same for all equivalent systems, the internal forces depend on the specifics of how the loads are applied.    Let's imagine that you have gone off-roading and have managed to get your Jeep stuck in the mud. You have two basic options to get it out: you can it out using the winch on the front bumper, or you can ask your friend to you out with his truck. Both methods (assuming that they apply forces with the same magnitude, direction and line of action) are statically equivalent, and both will equally move your vehicle forward.     Dave_7  CC-BY-SA     The difference is what might happen to your vehicle. With one method there's a danger that you will rip your front bumper off, with the other, you might damage your rear bumper. These are the internal effects and they depend on where the equivalent force is applied. These forces are necessary to maintain rigidity and hold the parts of the body together.  "
},
{
  "id": "equivalent-tranformations-9-3",
  "level": "2",
  "url": "equivalent-tranformations.html#equivalent-tranformations-9-3",
  "type": "Figure",
  "number": "4.6.3",
  "title": "",
  "body": " Sliding a vector along its line of action   A force vector is shown acting along a line of action. It is equivalent to a diagram where the same force vector has been shifted along the same line of action.   William Haynes  CC-BY-SA    "
},
{
  "id": "equivalent-tranformations-10-5",
  "level": "2",
  "url": "equivalent-tranformations.html#equivalent-tranformations-10-5",
  "type": "Figure",
  "number": "4.6.4",
  "title": "",
  "body": " Equivalent transformations of couples   Six equivalent diagrams are shown representing a couple-moment. Two equal and opposite forces in parallel of magnitude F separated by a perpendicular distance d = two equal\/opposite parallel forces of magnitude (F\/2) separated by a perpendicular distance 2d = two equal\/opposite parallel forces at a different angle separated by a perpendicular distance d = two equal\/opposite parallel forces of magnitude 2F separated by a perpendicular distance of (d\/2) = a Moment of magnitude M = Fd acting counter-clockwise at the middle of the object = a Moment of M = Fd acting counter-clockwise at the edge of the object.   William Haynes  CC-BY-SA    "
},
{
  "id": "Chapter_04-example-equivalent-moment",
  "level": "2",
  "url": "equivalent-tranformations.html#Chapter_04-example-equivalent-moment",
  "type": "Example",
  "number": "4.6.5",
  "title": "Equivalent Moment.",
  "body": " Equivalent Moment     Two concentrated moments and a couple act on the object shown. Given: , , , and .  Replace these with a single, equivalent concentrated moment, and give the magnitude and direction of your result.    An object is shown with a Force couple where two equal\/opposite parallel forces of magnitude 40 N are shown. The distance between them is shown as d = 2 m, but the forces act at an angle of 60 degrees from the distance vector. M1 = 400 N*m in clockwise direction, and M2 = 2200 N*m in counter-clockwise direction.   William Haynes  CC-BY-SA       clockwise.    First, replace the couple with an equivalent couple, , the magnitude of which is     By observation, this is a counter-clockwise moment, as is . is clockwise. Summing the scalar magnitudes gives the resultant moment. The signs of the terms are assigned according to the sign convention: positive if counter-clockwise, negative if clockwise.      "
},
{
  "id": "statically-equivalent-systems",
  "level": "1",
  "url": "statically-equivalent-systems.html",
  "type": "Section",
  "number": "4.7",
  "title": "Statically Equivalent Systems",
  "body": " Statically Equivalent Systems    What is an equivalent system?  What is a resultant force?  What is a resultant moment?  Do you have to include both moments and couples to find the resultant moment?  How can you find the simplest equivalent system?  When will the simplest equivalent system be a wrench?  How can you determine if two loading systems are statically equivalent?    A loading system is a combination of load forces and moments that act on an object. It can be as simple as a single force, or as complex as a three-dimensional combination of many force and moment vectors.  You will see that any loading systems may be replaced with a simpler statically equivalent system consisting of one resultant force at a specific point and one resultant moment by performing a series of equivalent transformations. Force system resultants provide a convenient representation for complex force interactions at engineering connections that we will rely on later in a variety of contexts. For now, we will focus on the details of reducing a system to a single force and couple.  Depending on the original loading system, the resultant force, the resultant moment, or both may be zero. If they are both zero, it indicates that the object is in equilibrium under this load condition. If they are non-zero, the supports will need to provide an equal and opposite reaction to put the object into equilibrium.  The resultant force acting on a system, , can be found from adding the individual forces, , such that .   The resultant moment, , about a point , can be found from adding all of the moments , about that point, including both moments and concentrated moments.    It is often more convenient to work with the scalar components of the resultant vectors since they separate the effects in the three coordinate directions.      Statically equivalent systems      Force-Couple Systems  One transformation you might want to make is to move a force to another location. While sliding a force along its line of action is fine, moving a force to another point changes its line of action and thus its rotational effect on the object, so moving a force to a new line of action is not an equivalent transformation.  Consider the cantilever beam below. In diagram (a), the load is at the end of the beam, and in (b) it has been moved to the center. The external effects are shown in (c) and (d). Although the vertical reaction force is the in both cases, the reaction moment at point is in the first case and in the second.   Moving a force is not an equivalent transformation     Force at end of beam.   Rigid beam fixed at O point B at length l and point A at length 2l. Force P acts downward at point A.   William Haynes  CC-BY-SA      Force moved to center of beam.   Rigid beam fixed at O point B at length l and point A at length 2l. Force P acts downward at point B.   William Haynes  CC-BY-SA        FBD and reactions for (a).   FBD of a rigid beam which was fixed at O point with B at length l and point A at length 2l. Force P acts downward at point A. At O, a force P acts upward. A Moment of M = 2P*l is developed in the counter-clockwise direction.   William Haynes  CC-BY-SA      FBD and reactions for (b).   FBD of a rigid beam which was fixed at O point with B at length l and point A at length 2l. Force P acts downward at point B. At O, a force P acts upward. A Moment of M = P*l is developed in the counter-clockwise direction.   William Haynes  CC-BY-SA        You can move a force to a new line of action in an equivalent fashion if you add a compensatory couple to undo the effect of changing the line of action. This can be accomplished with a series of individual equivalent transformations as shown in the diagram below. To move to another location, first add two equal and opposite forces where you want the force to be, as in (b). Then recognize the couple you have formed (c), and replace it with an equivalent couple-moment. The result of this process is the equivalent force-couple system shown in diagram (d), which is statically equivalent to the original situation in (a).   Equivalent Force-couple system     Original situation.   Rigid beam fixed on the left side, midpoint at length l and end of beam at length 2l. Force P acts downward at point A.   William Haynes  CC-BY-SA      Add two equal and opposite forces at midpoint.   Rigid beam fixed on the left side, midpoint at length l and end of beam at length 2l. Force P acts downward at point A. Force of magnitude P acts up at the midpoint, and another force of magnitude P acts down at the midpoint.   William Haynes  CC-BY-SA        Recognize couple.   In the previous part, the force P acting up at the midpoint and the force P acting down at the end of the beam separated by distance l are a force couple of magnitude M = P*l acting in the clockwise direction.   William Haynes  CC-BY-SA      Replace couple to produce equivalent force-couple system, with the same reactions as .   In the previous part, the force couple can be replaced by a Moment of magnitude M = P*l acting in the clockwise direction. The reactions at the left end of the rigid beam are P acting up and M = 2*P*l acting counter-clockwise.   William Haynes  CC-BY-SA        Evaluating the moment at point was an arbitrary choice. Any other point would give the same result. For example, in the original situation (a) force makes a clockwise moment about the midpoint. When the force is moved to the center creates no moment there, so a clockwise compensatory couple with a magnitude of must be added to maintain equivalence. This is the same result as we found previously (d). The compensatory couple has been drawn centered around the midpoint, but this too is arbitrary because concentrated moments are free vectors and can be placed at any location.     Reduction of a complex system  Any loading system can be reduced to a statically equivalent system consisting of single force and a single moment at a specified point with the following procedure:  Determine the resultant moment about the specified point by considering all forces and concentrated moments on the original system.  Determine the resultant force by adding all forces acting on the original system.  Determine the resultant moment about a point in the original system  Create the statically equivalent system by replacing all loads with the resultant force and the resultant moment at the selected point.     Eccentric loading      An vertical column is supporting an eccentric load as shown.  Replace this load with an equivalent force-couple system acting at the center of the beam's top surface.    A vertical load of 1200 lb acts down on a fixed vertical column at the right edge of the column, 9 inches from the center of the column. It is equivalent to a column with a load of P acting down at the center of the column and a moment of M acting clockwise.   William Haynes  CC-BY-SA       and clockwise    In order to move the vertical force to the left, a clockwise couple must be added to maintain equivalence, where   .      Equivalent Force-couple System     Replace the system of forces in diagram (a) with an equivalent force-couple system at point .  Replace this force-couple system with a single equivalent force and specify its location.          Horizontal bar has point A at the left end, point B at distance d1 to the right, and point C at distance d2 to the right of point B. F1 acts down at point B, F2 acts down at point C.   CC-0        Horizontal bar has resultant force R acting down at point A, with moment M acting clockwise and shown at point A to produce a statically equivalent system to the original diagram.   CC-0        Horizontal bar has resultant force R acting downward at some distance d from point A to produce a statically equivalent system to the original diagram.   CC-0              The original system is shown in (a).  Since the and are parallel, the magnitude of the resultant force is just the sum of the two magnitudes and it points down.  The resultant moment about point is .  To create the equivalent system (b), the resultant force and resultant moment are placed at point .  The system in (b) can be further simplified to eliminate the moment at , by performing the process in reverse.  In (c) we place the resultant force a distance away from point such that the resultant moment around point remains the same. This distance can be found using .  The systems in (a), (b), and (c) are all statically equivalent    In this example, we started with two forces. We have found two different statically equivalent systems; one with a force and a couple, the other with a single force. This latter system is simpler than the original system.  It is important to note that static equivalence applies to external effects only. When determining internal forces, such as the shear and bending moment discussed in or when considering non-rigid bodies, the original loading system must be used.   Determining Equivalence  Two complex loading systems are equivalent if they reduce to the same resultant force and the same resultant moment about any arbitrary point.  Two loading systems are statically equivalent if  The resultant forces are the equal  The resultant moments about some point are equal    This process is illustrated in the following example.    Finding Statically Equivalent Loads   Which of the three loading systems shown are statically equivalent?        A vertical column is 12 ft tall and 3 ft wide. Figure (a) has horizontal force of 10 lb acting to the left on the right side of the bar at a height of 6 ft and a clockwise moment of 80 ft-lb is shown at the bottom.   Dan Baker  CC-0        A vertical column is 12 ft tall and 3 ft wide. Figure (a) has horizontal force of 10 lb acting to the left on the right side of the bar at a height of 6 ft and a clockwise moment of 80 ft-lb is shown at the bottom.   Dan Baker  CC-0        A vertical column is 12 ft tall and 3 ft wide. Figure (c) has a force of 10 lb acting to the left at a height of 0 ft. A clockwise moment of 40 ft-lb is shown at the bottom of the bar, and a counter-clockwise moment of 20 ft-lb is shown at the top of the bar.   Dan Baker  CC-0         (a) and (c) are statically equivalent       Strategy  Evaluate the resultant force and resultant moment for each case and compare. We choose to evaluate the resultant moment about point A, though any other point would work.    For system (a)       For system (b)       For system (c)        Systems (a) and (c) are statically equivalent since and are the same in both cases. System (b) is not as its resultant moment is different than the other two.    Any load system can be simplified to its resultant force , and resultant couple , acting at any arbitrary point . There are four common special cases, which are worth highlighting individually.   Concurrent forces  When all forces in a system are concurrent, the resultant moment about their common intersection point will always be zero. We then need only find the resultant force and place it at the point of intersection. The resultant moment about any other point is the moment of the resultant force about that point.    Parallel forces  When all forces in a system are parallel, the resultant force will act in this direction with a magnitude equal to the sum of the individual magnitudes. There will be no moment created about this axis, but we need to find the resultant moment about the other two rectangular axes. That is, if all forces act in the direction, we need only find the resultant force in the direction and the resultant moment about the and axes.    Coplanar forces  When all forces in a system are coplanar we need only find the resultant force in this plane and the resultant moment about the axis perpendicular to this plane. That is, if all forces exist in the - plane, we need only to sum components in the and directions to find resultant force , and use these to determine the resultant moment about the axis. All two-dimensional problems fall into this category.    Wrench resultant  A wrench resultant is a special case where the resultant moment acts around the axis of the resultant force. The directions of the resultant force vector and the resultant moment vector are the same.    Wrench Resultant    William Haynes  CC-BY-SA     For example, if the resultant force is only in the direction and the resultant moment acts only around the axis, this is an example of a wrench resultant. An everyday example is a screwdriver, where both the resultant force and axis of rotation are in-line with the screwdriver. A wrench resultant is considered positive if the couple vector and force vector point in the same direction, and negative if they point in opposite directions.   Any three-dimensional force-couple system may be reduced to an equivalent wrench resultant even if the resultant force and resultant moment do not initially form a wrench resultant.  To find the equivalent wrench resultant:  First, find the resultant force and resultant moment at an arbitrary at arbitrary point, . These need not act along the same axis.  Resolve the resultant moment into scalar components and , parallel and perpendicular to the axis of the resultant force.  Eliminate by moving the resultant force away from point by distance    The simplified system consists of moment and force and acting distance away from point . Since and act along the same axis, the system has been reduced to a wrench resultant. Wrench resultants are the most general way to represent a complex force-couple system, but their utility is limited.   "
},
{
  "id": "statically-equivalent-systems-2",
  "level": "2",
  "url": "statically-equivalent-systems.html#statically-equivalent-systems-2",
  "type": "Key Questions",
  "number": "4.7",
  "title": "",
  "body": "  What is an equivalent system?  What is a resultant force?  What is a resultant moment?  Do you have to include both moments and couples to find the resultant moment?  How can you find the simplest equivalent system?  When will the simplest equivalent system be a wrench?  How can you determine if two loading systems are statically equivalent?   "
},
{
  "id": "ggb_pnrbttma",
  "level": "2",
  "url": "statically-equivalent-systems.html#ggb_pnrbttma",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": " Statically equivalent systems    "
},
{
  "id": "statically-equivalent-systems-14-4",
  "level": "2",
  "url": "statically-equivalent-systems.html#statically-equivalent-systems-14-4",
  "type": "Figure",
  "number": "4.7.2",
  "title": "",
  "body": " Moving a force is not an equivalent transformation     Force at end of beam.   Rigid beam fixed at O point B at length l and point A at length 2l. Force P acts downward at point A.   William Haynes  CC-BY-SA      Force moved to center of beam.   Rigid beam fixed at O point B at length l and point A at length 2l. Force P acts downward at point B.   William Haynes  CC-BY-SA        FBD and reactions for (a).   FBD of a rigid beam which was fixed at O point with B at length l and point A at length 2l. Force P acts downward at point A. At O, a force P acts upward. A Moment of M = 2P*l is developed in the counter-clockwise direction.   William Haynes  CC-BY-SA      FBD and reactions for (b).   FBD of a rigid beam which was fixed at O point with B at length l and point A at length 2l. Force P acts downward at point B. At O, a force P acts upward. A Moment of M = P*l is developed in the counter-clockwise direction.   William Haynes  CC-BY-SA       "
},
{
  "id": "statically-equivalent-systems-14-6",
  "level": "2",
  "url": "statically-equivalent-systems.html#statically-equivalent-systems-14-6",
  "type": "Figure",
  "number": "4.7.3",
  "title": "",
  "body": " Equivalent Force-couple system     Original situation.   Rigid beam fixed on the left side, midpoint at length l and end of beam at length 2l. Force P acts downward at point A.   William Haynes  CC-BY-SA      Add two equal and opposite forces at midpoint.   Rigid beam fixed on the left side, midpoint at length l and end of beam at length 2l. Force P acts downward at point A. Force of magnitude P acts up at the midpoint, and another force of magnitude P acts down at the midpoint.   William Haynes  CC-BY-SA        Recognize couple.   In the previous part, the force P acting up at the midpoint and the force P acting down at the end of the beam separated by distance l are a force couple of magnitude M = P*l acting in the clockwise direction.   William Haynes  CC-BY-SA      Replace couple to produce equivalent force-couple system, with the same reactions as .   In the previous part, the force couple can be replaced by a Moment of magnitude M = P*l acting in the clockwise direction. The reactions at the left end of the rigid beam are P acting up and M = 2*P*l acting counter-clockwise.   William Haynes  CC-BY-SA       "
},
{
  "id": "eccentric-loading",
  "level": "2",
  "url": "statically-equivalent-systems.html#eccentric-loading",
  "type": "Example",
  "number": "4.7.4",
  "title": "Eccentric loading.",
  "body": " Eccentric loading      An vertical column is supporting an eccentric load as shown.  Replace this load with an equivalent force-couple system acting at the center of the beam's top surface.    A vertical load of 1200 lb acts down on a fixed vertical column at the right edge of the column, 9 inches from the center of the column. It is equivalent to a column with a load of P acting down at the center of the column and a moment of M acting clockwise.   William Haynes  CC-BY-SA       and clockwise    In order to move the vertical force to the left, a clockwise couple must be added to maintain equivalence, where   .   "
},
{
  "id": "Chapter_04-example-equivalent-force-couple-system",
  "level": "2",
  "url": "statically-equivalent-systems.html#Chapter_04-example-equivalent-force-couple-system",
  "type": "Example",
  "number": "4.7.5",
  "title": "Equivalent Force-couple System.",
  "body": " Equivalent Force-couple System     Replace the system of forces in diagram (a) with an equivalent force-couple system at point .  Replace this force-couple system with a single equivalent force and specify its location.          Horizontal bar has point A at the left end, point B at distance d1 to the right, and point C at distance d2 to the right of point B. F1 acts down at point B, F2 acts down at point C.   CC-0        Horizontal bar has resultant force R acting down at point A, with moment M acting clockwise and shown at point A to produce a statically equivalent system to the original diagram.   CC-0        Horizontal bar has resultant force R acting downward at some distance d from point A to produce a statically equivalent system to the original diagram.   CC-0              The original system is shown in (a).  Since the and are parallel, the magnitude of the resultant force is just the sum of the two magnitudes and it points down.  The resultant moment about point is .  To create the equivalent system (b), the resultant force and resultant moment are placed at point .  The system in (b) can be further simplified to eliminate the moment at , by performing the process in reverse.  In (c) we place the resultant force a distance away from point such that the resultant moment around point remains the same. This distance can be found using .  The systems in (a), (b), and (c) are all statically equivalent   "
},
{
  "id": "Chapter_04-example-finding-statically-equivalent-loads",
  "level": "2",
  "url": "statically-equivalent-systems.html#Chapter_04-example-finding-statically-equivalent-loads",
  "type": "Example",
  "number": "4.7.7",
  "title": "Finding Statically Equivalent Loads.",
  "body": " Finding Statically Equivalent Loads   Which of the three loading systems shown are statically equivalent?        A vertical column is 12 ft tall and 3 ft wide. Figure (a) has horizontal force of 10 lb acting to the left on the right side of the bar at a height of 6 ft and a clockwise moment of 80 ft-lb is shown at the bottom.   Dan Baker  CC-0        A vertical column is 12 ft tall and 3 ft wide. Figure (a) has horizontal force of 10 lb acting to the left on the right side of the bar at a height of 6 ft and a clockwise moment of 80 ft-lb is shown at the bottom.   Dan Baker  CC-0        A vertical column is 12 ft tall and 3 ft wide. Figure (c) has a force of 10 lb acting to the left at a height of 0 ft. A clockwise moment of 40 ft-lb is shown at the bottom of the bar, and a counter-clockwise moment of 20 ft-lb is shown at the top of the bar.   Dan Baker  CC-0         (a) and (c) are statically equivalent       Strategy  Evaluate the resultant force and resultant moment for each case and compare. We choose to evaluate the resultant moment about point A, though any other point would work.    For system (a)       For system (b)       For system (c)        Systems (a) and (c) are statically equivalent since and are the same in both cases. System (b) is not as its resultant moment is different than the other two.   "
},
{
  "id": "statically-equivalent-systems-25-3-1",
  "level": "2",
  "url": "statically-equivalent-systems.html#statically-equivalent-systems-25-3-1",
  "type": "Figure",
  "number": "4.7.9",
  "title": "",
  "body": " Wrench Resultant    William Haynes  CC-BY-SA    "
},
{
  "id": "Chapter_04-10",
  "level": "1",
  "url": "Chapter_04-10.html",
  "type": "Exercises",
  "number": "4.8",
  "title": "Exercises (Ch. 4)",
  "body": " Exercises (Ch. 4)   "
},
{
  "id": "Chapter_05-degree-of-freedom",
  "level": "1",
  "url": "Chapter_05-degree-of-freedom.html",
  "type": "Section",
  "number": "5.1",
  "title": "Degree of Freedom",
  "body": " Degree of Freedom  Degrees of freedom refers to the number of independent parameters or values required to specify the state of an object.  The state of a particle is completely specified by its location in space, while the state of a rigid body includes its location in space and also its orientation.   Two-dimensional rigid bodies in the plane have three degrees of freedom. Position can be characterized by the and coordinates of a point on the object and orientation by angle about an axis perpendicular to the plane. The complete movement of the body can be defined by two linear displacements and , and one angular displacement .   Two-dimensional rigid bodies have three degrees of freedom.   A rectangle shown on a two dimensional plane can translate in the x- and y-directions and can rotate to any angle theta from the positive x-axis.   Dan Baker  CC-BY-SA       Three-dimensional rigid bodies have six degrees of freedom, which can be specified with three orthogonal coordinates and , and three angles of rotation, and . Movement of the body is defined by three translations , and , and three rotations , and .   Three-dimensional rigid body have six degrees of freedom - three translations and three rotations.   A box shown on a three dimensional coordinate system can translate in the x-, y-, and z-directions, and can rotate to any angle thetaX around the x axis, thetaY around the y axis, and thetaZ around the z axis.   Dan Baker  CC-BY-SA      For a body to be in static equilibrium, all possible movements must be adequately restrained. If a degree of freedom is not restrained, the body is in an unstable state, free to move in one or more ways. Stability is highly desirable for reasons of human safety, and bodies are often restrained by redundant restraints so that if one were to fail, the body would still remain stable. If the restraints correctly interpreted, then equal constraints and degrees of freedom create a stable system, and the values of the reaction forces and moments can be determined using equilibrium equations. If the number of restraints exceeds the number of degrees of freedom, the body is in equilibrium but you will need techniques we won't cover in statics to determine the reactions.  "
},
{
  "id": "FBD_ex1FBD1",
  "level": "2",
  "url": "Chapter_05-degree-of-freedom.html#FBD_ex1FBD1",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " Two-dimensional rigid bodies have three degrees of freedom.   A rectangle shown on a two dimensional plane can translate in the x- and y-directions and can rotate to any angle theta from the positive x-axis.   Dan Baker  CC-BY-SA    "
},
{
  "id": "FBD_ex1FBD2",
  "level": "2",
  "url": "Chapter_05-degree-of-freedom.html#FBD_ex1FBD2",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": " Three-dimensional rigid body have six degrees of freedom - three translations and three rotations.   A box shown on a three dimensional coordinate system can translate in the x-, y-, and z-directions, and can rotate to any angle thetaX around the x axis, thetaY around the y axis, and thetaZ around the z axis.   Dan Baker  CC-BY-SA    "
},
{
  "id": "Chapter_05-free-body-diagrams",
  "level": "1",
  "url": "Chapter_05-free-body-diagrams.html",
  "type": "Section",
  "number": "5.2",
  "title": "Free-Body Diagrams",
  "body": " Free-Body Diagrams    What are the five steps to create a free-body diagram?  What are degrees of freedom, and how do they relate to stability?  Which reaction forces and couple-moments come from each support type?  What are the typical support force components and couple-moment components that can be modeled from the various types of supports?    Free body diagrams are the tool that engineers use to identify the forces and moments that influence an object. They will be used extensively in statics, and you will use them again in other engineering courses so your effort to master them now is worthwhile. Although the concept is simple, students often need help to draw them correctly.  Drawing a correct free-body diagram is the first and most important step in the process of solving an equilibrium problem. It is the basis for all the equilibrium equations you will write; if your free-body diagram is incorrect, your equations, analysis, and solutions will also be wrong.  A quality free-body diagram is neat, clearly drawn, and contains all the information necessary to solve the equilibrium. You should take your time and think carefully about the free-body diagram before you begin to write and solve equations. A straightedge, protractor and colored pencils all can help. You will inevitably make mistakes that will lead to confusion or incorrect answers; you are encouraged to think about these errors and identify any misunderstandings to avoid them in the future.  Every equilibrium problem begins by drawing and labeling a free-body diagram!   Creating Free Body Diagrams  The basic process for drawing a free-body diagrams is   Select and isolate an object  The free-body in free-body diagram means that the body to be analyzed must be free from the supports that are physically holding it in place.  Simply sketch a quick outline of the object as if it is floating in space disconnected from everything. Do not draw free-body diagram forces on top of your problem drawing the body needs to be drawn free of its supports.    Select a reference frame  Select a right-handed coordinate system to use as a reference for your equilibrium equations. Even if you are using a horizontal axis and vertical axis, indicate your coordinate system on your diagram.  Look ahead and select a coordinate system that minimizes the number of unknown force components in your equations. The choice is technically arbitrary, but a good choice will simplify your calculations and reduce your effort. If you and another student pick different reference systems, you should both get the same answer while expressing your work with different components.    Identify all loads  Add vector arrows representing the applied forces and couple moments of acting on the body. These are often obvious. Include the body's weight if it is non-negligible. If a vector has a known line of action, draw the arrow in that direction; if its sense is unknown, assume one. Every vector should have a descriptive variable name and a clear arrowhead indicating its direction.    Identify all reactions  Traverse the perimeter of the object and wherever a support was removed when isolating the body, replace it with the forces and\/or couple-moments which it provides. Label each reaction with a descriptive variable name and a clear arrowhead. Again, if a vector's direction is unknown just assume one.  The reaction forces and moments provided by common two-dimensional supports are shown in and three dimensional support in . Identifying the correct reaction forces and couple-moments coming from supports is perhaps the most challenging step in the entire equilibrium process.    Label the diagram  Verify that every dimension, angle, force, and moment is labeled with either a value or a symbolic name if the value is unknown. Supply the information needed for your calculations, but don't clutter the diagram up with unneeded information. This diagram should be a stand-alone presentation.     Drawing good free-body diagrams is surprisingly tricky and requires practice. Study the examples, think hard about them, do lots of problems, and learn from your errors.    Two-dimensional Reactions  Supports supply reaction forces and moment which prevent bodies from moving when loaded. In the most basic terms, forces prevent translation, and moments prevent rotation.  The reactions supplied by a support depend on the nature of the particular support. For example in a top view, a door hinge allows the door to rotate freely but prevents it from translating. We model this as a frictionless pin that supplies a perpendicular pair of reaction forces, but no reaction moment. We can evaluate all the other physical supports in a similar way to come up with the table below. You will notice that some two-dimensional supports only restrain one degree of freedom and others restrain up to three degrees of freedom. The number of degrees of freedom directly correlates to the number of unknowns created by the support.  The table below shows typical two-dimensional support methods and the corresponding reaction forces and moments supplied each.   Table of common two-dimensional supports and their representation on free-body diagrams.   The table shows different supports and the corresponding number of unknown reactions. Normal supports (one unknown): force perpendicular to the surface. These supports include smooth surface, roller, rocker, pinned collar on a smooth rod, smooth pin in roller or slot. Two-force member supports (one unknown): tension or compression force in line with the two force member. These supports include a cable, a weightless link, or a spring with force F = k*delta (linear spring constant multiplied by the change in length from unstretched). Pin support (two unknowns): Two rectangular force components or one force at an unknown angle).This support is generally is a frictionless pin or hinge. Rough surface support (two unknowns): friction and normal forces or magnitude and direction of resultant force. This support type is a body contacting a rough surface. Fixed collar support (two unknowns): normal force and couple moment. This collar slides but cannot rotate. Fixed support (three unknowns): two rectangular force components and couple. This support is generally welded, bolted, or otherwise anchored.   Dan Baker  CC-BY-SA       Three-dimensional Reactions  The main added complexity with three-dimensional objects is that there are more possible ways the object can move, and also more possible ways to restrain it. The table below show the types of supports which are available and the corresponding reaction forces and moment. As before, your free-body diagrams should show the reactions supplied by the constraints, not the constraints themselves.   Table of common three-dimensional supports and their associated reactions.   As in the previous table, support types are shown here. A support produces a reaction in the direction in which it prevents motion (1 reaction). Two-force support member constrains translation in one direction. Smooth surface constrains translation in one direction (1 reaction). Ball and socket constrains translation in 3 directions, but not rotation (3 reactions). Free axle bearing constrains translation in two directions (y and z) and rotation in two directions (couple moment about z and about y) (4 reactions). Confined axle bearings (e.g., thrust bearing, smooth pin, hinge) only allows rotation about one axis, and does not allow translation in any direction (5 reactions). A square axle bearing only allows translation in one direction, and no rotation (5 reactions). A fixed support prevents any translation or rotation (6 reactions).   Dan Baker  CC-BY-SA     One new issue we face in three-dimensional problems is that reaction couples may be available but not engaged .  A support which provides a non-zero reaction is said to be engaged. Picture a crate sitting at rest on a horizontal surface with a cable attached to the top of the crate. If the cable is slack, the reaction of the cable would be available but not engaged . Instead, the floor would be supporting the full weight of the crate. If we were to remove the floor, the cable would be engaged and support the weight of the crate.   Available and Engaged reactions.   A box hangs from the ceiling by a cable. It rests on a flat surface. Therefore, the tension in the cable would be zero, and the T is not engaged. In the second image, the box hangs from a cable from the ceiling. It does not rest on a surface. Thus the tension T in the cable is nonzero, i.e. it is engaged.   Dan Baker  CC-BY-SA      To get a feel for how reaction couples engage, pick up your laptop or a heavy book and hold it horizontally with your left hand. Can you feel your hand supplying an upward force to support the weight and a counter-clockwise reaction couple to keep it horizontal? Now add a similar support by gripping with your right hand. How do the forces and couple-moments change? You should have felt the force of your left hand decrease as your right hand picked up half the weight, and also noticed that the reaction couple from your left hand was no longer needed.   One hand holding an object versus two hands holding the same object.   Image of one hand holding an object versus two hands holding the same object, with corresponding free-body diagrams.   Dan Baker  CC-BY-SA     The vertical force in your right hand engaged instead of the couple-moment of your left hand. The reaction couples from both hands are available, but the vertical forces engage first and are sufficient for equilibrium. This phenomena is described by the saying reaction forces engage before reaction couple-moments .     Free-Body Diagram Examples  Given that there several options for representing reaction forces and couple-moments from a support, there are different, equally valid options for drawing free-body diagrams. With experience you will learn which representation to choose to simplify the equilibrium calculations.  Possible free-body diagrams for two common situations are shown in the next two examples.   Fixed support    The cantilevered beam is embedded into a fixed vertical wall at . Draw a neat, labeled, correct free-body diagram of the beam and identify the knowns and the unknowns.   The cantilevered beam is fixed at its left end, point A. A force of 15 kip acts down at point B (4 ft from left end). A couple of 30 kip-ft acts counter-clockwise shown at point C (10 ft from left end). An 8 kip force acts at the right end of the beam (20 ft from left end). The force acts down at an angle of 30 degrees clockwise from the vertical (i.e., at an angle of 210 degrees from the positive x axis).   Dan Baker  CC-BY-SA        Begin by drawing a neat rectangle to represent the beam disconnected from its supports, then add all the known forces and couple-moments. Label the magnitudes of the loads and the known dimensions symbolically.    Dan Baker  CC-BY-SA     Choose the standard coordinate system, since it aligns well with the forces.  The wall at is a fixed support which prevents the beam from translating up, down, left or right, or rotating in the plane of the page. These constraints are represented by two perpendicular forces and a concentrated moment, as shown in . Label these unknowns as well.  The knowns in this problem are the magnitudes and directions of moment , forces , and and the dimensions of the beam. The unknowns are the two force components and and the scalar moment caused by the fixed connection. If you prefer, you may represent force as a force of unknown magnitude acting at an unknown direction. Whether you represent it as and components or as a magnitude and direction, there are two unknowns associated with force .  The three unknown reactions can be found using the three independent equations of equilibrium we will discuss later in this chapter.     Frictionless pin and roller    The beam is supported by a frictionless pin at and a rocker at . Draw a neat, labeled, correct free-body diagram of the beam and identify the knowns and the unknowns.   The beam has a pin connection at its left end, point A. At the right end, point D (10 ft from left end), the beam has a rocker connection which rests on a surface at an angle of 30 degrees from the positive x-axis. A force of 12 kN acts down and to the right on the beam at point B (2 m from let end) at an angle of 45 degrees from the horizontal). A moment of 24 kN-m clockwise is shown at point C (5 m from left end).   Dan Baker  CC-BY-SA       In this problem, the knowns are the magnitude and direction of force and moment and the dimensions of the beam.  The constraints are the frictionless pin at and the rocker at . The pin prevents translation but not rotation, which means two it has two unknowns, represented by either magnitude and direction, or by two orthogonal components. The rocker provides a force perpendicular to the surface it rests on, which is from the horizontal. This means that the line of action of force is from the vertical, giving us its direction but not its sense or magnitude   To draw the free-body diagram, start with a neat rectangle to representing the beam disconnected from its supports, then draw and label known force and moment and the dimensions.    Dan Baker  CC-BY-SA     Add forces and representing vector and force at , acting from the vertical.  When a force has a known line of action as with force , draw it acting along that line; don't break it into components. When it is not obvious which way a reaction force actually points along its lines of action, just make your best guess and place an arrowhead accordingly. Your calculations will confirm or refute your guess later.   As in the previous example, you could alternately represent force as an unknown magnitude acting in an unknown direction, though there is no particular advantage to doing so in this case.    Dan Baker  CC-BY-SA        "
},
{
  "id": "Chapter_05-free-body-diagrams-2",
  "level": "2",
  "url": "Chapter_05-free-body-diagrams.html#Chapter_05-free-body-diagrams-2",
  "type": "Key Questions",
  "number": "5.2",
  "title": "",
  "body": "  What are the five steps to create a free-body diagram?  What are degrees of freedom, and how do they relate to stability?  Which reaction forces and couple-moments come from each support type?  What are the typical support force components and couple-moment components that can be modeled from the various types of supports?   "
},
{
  "id": "reactions-from-supports-2d",
  "level": "2",
  "url": "Chapter_05-free-body-diagrams.html#reactions-from-supports-2d",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Table of common two-dimensional supports and their representation on free-body diagrams.   The table shows different supports and the corresponding number of unknown reactions. Normal supports (one unknown): force perpendicular to the surface. These supports include smooth surface, roller, rocker, pinned collar on a smooth rod, smooth pin in roller or slot. Two-force member supports (one unknown): tension or compression force in line with the two force member. These supports include a cable, a weightless link, or a spring with force F = k*delta (linear spring constant multiplied by the change in length from unstretched). Pin support (two unknowns): Two rectangular force components or one force at an unknown angle).This support is generally is a frictionless pin or hinge. Rough surface support (two unknowns): friction and normal forces or magnitude and direction of resultant force. This support type is a body contacting a rough surface. Fixed collar support (two unknowns): normal force and couple moment. This collar slides but cannot rotate. Fixed support (three unknowns): two rectangular force components and couple. This support is generally welded, bolted, or otherwise anchored.   Dan Baker  CC-BY-SA    "
},
{
  "id": "reactions_table_3D",
  "level": "2",
  "url": "Chapter_05-free-body-diagrams.html#reactions_table_3D",
  "type": "Figure",
  "number": "5.2.2",
  "title": "",
  "body": " Table of common three-dimensional supports and their associated reactions.   As in the previous table, support types are shown here. A support produces a reaction in the direction in which it prevents motion (1 reaction). Two-force support member constrains translation in one direction. Smooth surface constrains translation in one direction (1 reaction). Ball and socket constrains translation in 3 directions, but not rotation (3 reactions). Free axle bearing constrains translation in two directions (y and z) and rotation in two directions (couple moment about z and about y) (4 reactions). Confined axle bearings (e.g., thrust bearing, smooth pin, hinge) only allows rotation about one axis, and does not allow translation in any direction (5 reactions). A square axle bearing only allows translation in one direction, and no rotation (5 reactions). A fixed support prevents any translation or rotation (6 reactions).   Dan Baker  CC-BY-SA    "
},
{
  "id": "Chapter_05-free-body-diagrams-9-4",
  "level": "2",
  "url": "Chapter_05-free-body-diagrams.html#Chapter_05-free-body-diagrams-9-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "available engaged "
},
{
  "id": "engaged",
  "level": "2",
  "url": "Chapter_05-free-body-diagrams.html#engaged",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": " Available and Engaged reactions.   A box hangs from the ceiling by a cable. It rests on a flat surface. Therefore, the tension in the cable would be zero, and the T is not engaged. In the second image, the box hangs from a cable from the ceiling. It does not rest on a surface. Thus the tension T in the cable is nonzero, i.e. it is engaged.   Dan Baker  CC-BY-SA    "
},
{
  "id": "one_vs_two_hands",
  "level": "2",
  "url": "Chapter_05-free-body-diagrams.html#one_vs_two_hands",
  "type": "Figure",
  "number": "5.2.4",
  "title": "",
  "body": " One hand holding an object versus two hands holding the same object.   Image of one hand holding an object versus two hands holding the same object, with corresponding free-body diagrams.   Dan Baker  CC-BY-SA    "
},
{
  "id": "Chapter_05-example-fixed-support",
  "level": "2",
  "url": "Chapter_05-free-body-diagrams.html#Chapter_05-example-fixed-support",
  "type": "Example",
  "number": "5.2.5",
  "title": "Fixed support.",
  "body": " Fixed support    The cantilevered beam is embedded into a fixed vertical wall at . Draw a neat, labeled, correct free-body diagram of the beam and identify the knowns and the unknowns.   The cantilevered beam is fixed at its left end, point A. A force of 15 kip acts down at point B (4 ft from left end). A couple of 30 kip-ft acts counter-clockwise shown at point C (10 ft from left end). An 8 kip force acts at the right end of the beam (20 ft from left end). The force acts down at an angle of 30 degrees clockwise from the vertical (i.e., at an angle of 210 degrees from the positive x axis).   Dan Baker  CC-BY-SA        Begin by drawing a neat rectangle to represent the beam disconnected from its supports, then add all the known forces and couple-moments. Label the magnitudes of the loads and the known dimensions symbolically.    Dan Baker  CC-BY-SA     Choose the standard coordinate system, since it aligns well with the forces.  The wall at is a fixed support which prevents the beam from translating up, down, left or right, or rotating in the plane of the page. These constraints are represented by two perpendicular forces and a concentrated moment, as shown in . Label these unknowns as well.  The knowns in this problem are the magnitudes and directions of moment , forces , and and the dimensions of the beam. The unknowns are the two force components and and the scalar moment caused by the fixed connection. If you prefer, you may represent force as a force of unknown magnitude acting at an unknown direction. Whether you represent it as and components or as a magnitude and direction, there are two unknowns associated with force .  The three unknown reactions can be found using the three independent equations of equilibrium we will discuss later in this chapter.   "
},
{
  "id": "Chapter_05-example-frictionless-pin-and-roller",
  "level": "2",
  "url": "Chapter_05-free-body-diagrams.html#Chapter_05-example-frictionless-pin-and-roller",
  "type": "Example",
  "number": "5.2.6",
  "title": "Frictionless pin and roller.",
  "body": " Frictionless pin and roller    The beam is supported by a frictionless pin at and a rocker at . Draw a neat, labeled, correct free-body diagram of the beam and identify the knowns and the unknowns.   The beam has a pin connection at its left end, point A. At the right end, point D (10 ft from left end), the beam has a rocker connection which rests on a surface at an angle of 30 degrees from the positive x-axis. A force of 12 kN acts down and to the right on the beam at point B (2 m from let end) at an angle of 45 degrees from the horizontal). A moment of 24 kN-m clockwise is shown at point C (5 m from left end).   Dan Baker  CC-BY-SA       In this problem, the knowns are the magnitude and direction of force and moment and the dimensions of the beam.  The constraints are the frictionless pin at and the rocker at . The pin prevents translation but not rotation, which means two it has two unknowns, represented by either magnitude and direction, or by two orthogonal components. The rocker provides a force perpendicular to the surface it rests on, which is from the horizontal. This means that the line of action of force is from the vertical, giving us its direction but not its sense or magnitude   To draw the free-body diagram, start with a neat rectangle to representing the beam disconnected from its supports, then draw and label known force and moment and the dimensions.    Dan Baker  CC-BY-SA     Add forces and representing vector and force at , acting from the vertical.  When a force has a known line of action as with force , draw it acting along that line; don't break it into components. When it is not obvious which way a reaction force actually points along its lines of action, just make your best guess and place an arrowhead accordingly. Your calculations will confirm or refute your guess later.   As in the previous example, you could alternately represent force as an unknown magnitude acting in an unknown direction, though there is no particular advantage to doing so in this case.    Dan Baker  CC-BY-SA      "
},
{
  "id": "Chapter_05-equations-of-equilibrium",
  "level": "1",
  "url": "Chapter_05-equations-of-equilibrium.html",
  "type": "Section",
  "number": "5.3",
  "title": "Equations of Equilibrium",
  "body": " Equations of Equilibrium    What is the definition of static equilibrium?  How do I choose which are the most efficient equations to solve two-dimensional equilibrium problems?    In statics, our focus is on systems where both linear acceleration and angular acceleration are zero. These systems are frequently stationary, but could be moving with constant velocity.  Under these conditions Newton's Second Law for translation reduces to ,  and, Newton's second law for rotation gives the similar equation .  The first of these equations requires that all forces acting on an object balance and cancel each other out, and the second requires that all moments balance as well. Together, these two equations are the mathematical basis of this course and are sufficient to evaluate equilibrium for systems with up to six degrees of freedom.  These are vector equations; hidden within each are three independent scalar equations, one for each coordinate direction. Working with these scalar equations is often easier than using their vector equivalents, particularly in two-dimensional problems.  In many cases we do not need all six equations. We saw in that particle equilibrium problems can be solved using the force equilibrium equation alone, because particles have, at most, three degrees of freedom and are not subject to any rotation.  To analyze rigid bodies, which can rotate as well as translate, the moment equations are needed to address the additional degrees of freedom. Two-dimensional rigid bodies have only one degree of rotational freedom, so they can be solved using just one moment equilibrium equation, but to solve three-dimensional rigid bodies, which have six degrees of freedom, all three moment equations and all three force equations are required.  "
},
{
  "id": "Chapter_05-equations-of-equilibrium-2",
  "level": "2",
  "url": "Chapter_05-equations-of-equilibrium.html#Chapter_05-equations-of-equilibrium-2",
  "type": "Key Questions",
  "number": "5.3",
  "title": "",
  "body": "  What is the definition of static equilibrium?  How do I choose which are the most efficient equations to solve two-dimensional equilibrium problems?   "
},
{
  "id": "Chapter_05-2d-rigid-body-equilibrium",
  "level": "1",
  "url": "Chapter_05-2d-rigid-body-equilibrium.html",
  "type": "Section",
  "number": "5.4",
  "title": "2D Rigid Body Equilibrium",
  "body": " 2D Rigid Body Equilibrium  Two-dimensional rigid bodies have three degrees of freedom, so they only require three independent equilibrium equations to solve. The six scalar equations of can easily be reduced to three by eliminating the equations which refer to the unused dimension. For objects in the plane there are no forces acting in the direction to create moments about the or axes, so the reduced set of three equations is where the subscript has been replaced with a letter to indicate an arbitrary moment center in the plane instead of a perpendicular axis.  This is not the only possible set of equilibrium equations. Either force equation can be replaced with a linearly independent moment equation about a point of your choosing Labels , and in these equations are representative. They don't have to correspond to points , and on your problem. , so the other possible sets are For set four, moment centers , , and must form a triangle to ensure the three equations are linearly independent.  You have a lot of flexibility when solving rigid-body equilibrium problems. In addition to choosing which set of equations to use, you are also free to rotate the coordinate system to any orientation you like, pick different points for moment centers, and solve the equations in any order or simultaneously.  This freedom raises several questions. Which equation set should you choose? Is one choice better than another? Why bother rotating coordinate systems? How do you select moment centers? Students want to know how to solve the problem, when in reality there are many ways to do it.  The actual task is to choose an efficient approach and carry it out. An efficient solution is one which avoids mathematical complications and makes the problem easy to solve. Complications include unpleasant geometries, unnecessary algebra, and particularly simultaneous equations, which are algebra intensive and error prone.  So how do you set up an efficient approach? First, stop, think, and look for opportunities to make the solution more efficient. Here are some recommendations.  Equation set one is usually a good choice and should be considered first.  Inspect your free-body diagram and identify the unknown values in the problem. These may be magnitudes, directions, angles or dimensions.  Align the coordinate system with at least one unknown force.  Take moments about the point where the lines of action of two unknown forces intersect, which eliminates them from the equation.  Solve equations with one unknown first.     Pin and Roller    The L-shaped body is supported by a roller at and a frictionless pin at . The body supports a vertical force at and a couple-moment at . Determine the reactions at and .    This problem will be solved three different ways to demonstrate the advantages and disadvantages of different approaches.     Solutions always start with a free-body diagram, showing all forces and moments acting on the object. Here, the known loads (down) and (CCW) are red, and the unknown reactions , and are blue.    The force at is drawn along its known line-of-action perpendicular to the roller surface, and drawn pointing up and right because that will oppose the rotation of the frame about A caused by load C and moment D. The force at is represented by unknown components and . The sense of these components is unknown, so we have arbitrarily assigned the arrowheads pointing left and up.  We have chosen the standard coordinate system with positive to the right and positive pointing up, and resolved force into components in the and directions.  The magnitude of force is unknown but its direction is known, so the and components of B can be expressed as .  We choose to solve equation set , and choose to take moments about point because unknowns and intersect there. Substituting the variables into the equation and solving for the unknowns gives   Of these three equations only the third can be evaluated immediately, because we know and . In equations and unknowns and can't be found until is known. Inserting the known values into and solving for gives   Now with the magnitude of known, and can be found with and . The positive signs on these values indicate that the directions assumed on the free-body diagram were correct.  The magnitude and direction of force can be found from the scalar components and using a rectangular to polar conversion.        The final values for and , with angles measured counter-clockwise from the positive axis are , .  This solution demonstrates a fairly standard approach appropriate for many statics problems which should be considered whenever the free-body diagram contains a frictionless pin. Start by taking moments there.     In this solution, we have rotated the coordinate system to align it with force and also chosen the components of force to align with the new coordinate system.    There is no particular advantage to this approach over the first one, but with two unknown forces aligned with the direction, can be found directly after breaking force into components.   Solving equation (2) yields .  Solving equation (3) yields the same result as previously .  Substituting and into equation (1) yields   The negative sign on this result indicates that our assumed direction for was incorrect, and that force actually points to the assumed direction.  Resolving the and gives the magnitude and direction of force .        Again, the final values for and , with angles measured counter-clockwise from the positive axis are ,  This approach was slightly more difficult than solution one because of the additional trigonometry involved to find components in the rotated coordinate system.     For this solution, we will use the same free-body diagram as solution one, but will use three moment equations, about points , and .       This set of three equations and three unknowns can be solved with some algebra.  Adding (1) and (2) gives   Dividing equation (2) by 2 and subtracting it from (3) gives   Multiplying (4) by 2\/3 and subtracting from (5) eliminates and gives  , the same result as before.  Substituting into (3) gives , and substituting this into (1) gives , again the same result as before.  An alternate approach is to set these three equations up for a matrix solution and use technology to do the algebra, as done here with Sage.    This is a good example of an inefficient solution because of all the algebra involved. The issue here was the poor choice of , and as moment centers. Whenever possible you should take moments about a point where the line of action of two unknowns intersect as was done in solution one. This gives a moment equation which can be solved immediately for the third unknown.    "
},
{
  "id": "Chapter_05-example-pin-and-roller",
  "level": "2",
  "url": "Chapter_05-2d-rigid-body-equilibrium.html#Chapter_05-example-pin-and-roller",
  "type": "Example",
  "number": "5.4.1",
  "title": "Pin and Roller.",
  "body": " Pin and Roller    The L-shaped body is supported by a roller at and a frictionless pin at . The body supports a vertical force at and a couple-moment at . Determine the reactions at and .    This problem will be solved three different ways to demonstrate the advantages and disadvantages of different approaches.     Solutions always start with a free-body diagram, showing all forces and moments acting on the object. Here, the known loads (down) and (CCW) are red, and the unknown reactions , and are blue.    The force at is drawn along its known line-of-action perpendicular to the roller surface, and drawn pointing up and right because that will oppose the rotation of the frame about A caused by load C and moment D. The force at is represented by unknown components and . The sense of these components is unknown, so we have arbitrarily assigned the arrowheads pointing left and up.  We have chosen the standard coordinate system with positive to the right and positive pointing up, and resolved force into components in the and directions.  The magnitude of force is unknown but its direction is known, so the and components of B can be expressed as .  We choose to solve equation set , and choose to take moments about point because unknowns and intersect there. Substituting the variables into the equation and solving for the unknowns gives   Of these three equations only the third can be evaluated immediately, because we know and . In equations and unknowns and can't be found until is known. Inserting the known values into and solving for gives   Now with the magnitude of known, and can be found with and . The positive signs on these values indicate that the directions assumed on the free-body diagram were correct.  The magnitude and direction of force can be found from the scalar components and using a rectangular to polar conversion.        The final values for and , with angles measured counter-clockwise from the positive axis are , .  This solution demonstrates a fairly standard approach appropriate for many statics problems which should be considered whenever the free-body diagram contains a frictionless pin. Start by taking moments there.     In this solution, we have rotated the coordinate system to align it with force and also chosen the components of force to align with the new coordinate system.    There is no particular advantage to this approach over the first one, but with two unknown forces aligned with the direction, can be found directly after breaking force into components.   Solving equation (2) yields .  Solving equation (3) yields the same result as previously .  Substituting and into equation (1) yields   The negative sign on this result indicates that our assumed direction for was incorrect, and that force actually points to the assumed direction.  Resolving the and gives the magnitude and direction of force .        Again, the final values for and , with angles measured counter-clockwise from the positive axis are ,  This approach was slightly more difficult than solution one because of the additional trigonometry involved to find components in the rotated coordinate system.     For this solution, we will use the same free-body diagram as solution one, but will use three moment equations, about points , and .       This set of three equations and three unknowns can be solved with some algebra.  Adding (1) and (2) gives   Dividing equation (2) by 2 and subtracting it from (3) gives   Multiplying (4) by 2\/3 and subtracting from (5) eliminates and gives  , the same result as before.  Substituting into (3) gives , and substituting this into (1) gives , again the same result as before.  An alternate approach is to set these three equations up for a matrix solution and use technology to do the algebra, as done here with Sage.    This is a good example of an inefficient solution because of all the algebra involved. The issue here was the poor choice of , and as moment centers. Whenever possible you should take moments about a point where the line of action of two unknowns intersect as was done in solution one. This gives a moment equation which can be solved immediately for the third unknown.   "
},
{
  "id": "Chapter_05-3d-rigid-body-equilibrium",
  "level": "1",
  "url": "Chapter_05-3d-rigid-body-equilibrium.html",
  "type": "Section",
  "number": "5.5",
  "title": "3D Rigid Body Equilibrium",
  "body": " 3D Rigid Body Equilibrium    What are the similarities and differences between solving two-dimensional and three-dimensional equilibrium problems?  Why are some three-dimensional reaction couple-moments available but not engaged ?  What kinds of problems are solvable using linear algebra?    Three-dimensional systems are closer to reality than two-dimensional systems and the basic principles to solving both are the same, however they are generally harder solve because of the additional degrees of freedom involved and the difficulty visualizing and determining distances, forces and moments in three dimensions.  Three-dimensional problems are usually solved using vector algebra rather than the scalar approach used in the last section. The main differences are that directions are described with unit vectors rather than with angles, and moments are determined using the vector cross product rather scalar methods. Because they have more possible unknowns it is harder to find efficient equations to solve by hand. A problem might involve solving a system of up to six equations and six unknowns, in which case it is best solved using linear algebra and technology.   Resolving Forces and Moments into Components  To break two-dimensional forces into components, you likely used right-triangle trigonometry, sine and cosine. However, three-dimensional forces will likely need to be broken into components using .  When summing moments, make sure to consider both the moments and also the couple-moments with the following guidance:   First, choose any point in the system to sum moments around.    There are two general methods for summing the moments. Both techniques will give you the same set of equations.   Sum moments around each axis  For relatively simple systems with few position and force vector components, you can find the cross product for each non-parallel position and force pair. Using this method requires you to resolve the direction of each cross product pair using the right-hand rule as covered in . Recall that there are up to six pairs of non-parallel components that you need to consider.    Sum all moments around a point using vector determinants  Choose a point in the system which is on the line of action of as many forces as possible, then set up each cross product as a determinant. After computing the components coming from each determinant, combine the , , and terms into each of the , , and equations.       Finally, add the components of any couple-moments into the corresponding , , and equations.       Solving for unknown values in equilibrium equations  Once you have formulated and equations in each of the , and directions, you could be facing up to six equations and six unknown values.  Frequently these simultaneous equation sets can be solved with substitution, but it is often be easier to solve large equation sets with linear algebra. Note that the adjective linear specifies that the unknown values must be linear terms, which means that each unknown variable cannot be raised to a exponent, be an exponent, or buried inside of a or function. Luckily, most unknowns in equilibrium are linear terms, except for unknown angles. If you are not familiar with the use of linear algebra matrices to solve simultaneously equations, search the internet for Solving Systems of Equations Using Linear Algebra and you will find plenty of resources.     No matter how you choose to solve for the unknown values, any numeric values which come out to be negative indicate that your initial hypothesis of that vector's sense was incorrect.    Three-dimensional Equilibrium Examples   3D Bent Bar   The bent bar shown is held in a horizontal plane by a fixed connection at while cable exerts a force on point .  Given and .   Find the reaction force and concentrated moment with components , and required to hold the bar in this position under this condition,          Draw a free-body diagram   As always, begin by drawing a free-body diagram.     Determine the force acting at point in Cartesian form    The force of the cable acts from to . This direction is described by the displacement vector from to or the corresponding unit vector .  Multiplying the unit vector by the cable tension gives the force acting on as a three-dimensional Cartesian force vector  .    Determine the moment about    The moment about point is found with the cross product where the moment arm is the displacement vector from to .        Apply the equations of equilibrium     The resulting vector equations for the reaction force and reaction moment are .        "
},
{
  "id": "Chapter_05-3d-rigid-body-equilibrium-2",
  "level": "2",
  "url": "Chapter_05-3d-rigid-body-equilibrium.html#Chapter_05-3d-rigid-body-equilibrium-2",
  "type": "Key Questions",
  "number": "5.5",
  "title": "",
  "body": "  What are the similarities and differences between solving two-dimensional and three-dimensional equilibrium problems?  Why are some three-dimensional reaction couple-moments available but not engaged ?  What kinds of problems are solvable using linear algebra?   "
},
{
  "id": "Chapter_05-example-3d-bent-bar",
  "level": "2",
  "url": "Chapter_05-3d-rigid-body-equilibrium.html#Chapter_05-example-3d-bent-bar",
  "type": "Example",
  "number": "5.5.1",
  "title": "3D Bent Bar.",
  "body": " 3D Bent Bar   The bent bar shown is held in a horizontal plane by a fixed connection at while cable exerts a force on point .  Given and .   Find the reaction force and concentrated moment with components , and required to hold the bar in this position under this condition,          Draw a free-body diagram   As always, begin by drawing a free-body diagram.     Determine the force acting at point in Cartesian form    The force of the cable acts from to . This direction is described by the displacement vector from to or the corresponding unit vector .  Multiplying the unit vector by the cable tension gives the force acting on as a three-dimensional Cartesian force vector  .    Determine the moment about    The moment about point is found with the cross product where the moment arm is the displacement vector from to .        Apply the equations of equilibrium     The resulting vector equations for the reaction force and reaction moment are .      "
},
{
  "id": "Chapter_05-stability-and-determinacy",
  "level": "1",
  "url": "Chapter_05-stability-and-determinacy.html",
  "type": "Section",
  "number": "5.6",
  "title": "Stability and Determinacy",
  "body": " Stability and Determinacy    What does stable mean for a rigid body?  What does determinate mean for a rigid body?  Does stability depend on the external loads or only on the reactions?  How can I tell if a system is determinate?  How can I decide if a problem is both stable and determinate, which makes it solvable statics?     Determinate vs. Indeterminate  A static system is determinate if it is possible to find the unknown reactions using the methods of statics, that is, by using equilibrium equations, otherwise it is indeterminate .  In order for a system to be determinate the number of unknown force and moment reaction components must be less than or equal to the number of independent equations of equilibrium available. Each equilibrium equation derives from a degree of freedom of the system, so there may be no more unknowns than degrees of freedom. This means that we can determine no more than three unknown reaction components in two-dimensional systems and no more than six in three-dimensional systems.  An indeterminate system with fewer reaction components than degrees of freedom is under-constrained and therefore unstable. On the other hand, if there are more reaction components than degrees of freedom, the system is both over-constrained and indeterminate . In terms of force and moment equations, there are more unknowns than equilibrium equations so they can't all be determined. This is not to say that it is impossible to find all reaction force on an over-constrained system, just that you will not learn how to find them in this course.    Stable vs. Unstable  A body in equilibrium is held in position by its supports, which restrict the body's motion and counteract the applied loads. When there are sufficient supports to restrain a body from moving, we say that the body is stable . A stable body is prevented from translating and rotating in all directions. A body which can move is unstable even if it is not currently moving, because the slightest change in load may take it out of equilibrium and initiate motion. Stability is loading independent a stable body is stable for any loading condition.    Rules to Validate a Stable and Determinate System  There are three rules to determine if a system is both stable and determinate. While, the rules below can technically be checked in any order, they have been sorted from the quickest to the most time consuming to speed up your analysis.     Rule 1: Are there exactly three reaction components on a two-dimensional body?  If YES, the system is determinate.  If NO, the system is indeterminate or not stable.    Three scenarios are shown. An L shaped beam has one end against a wall on the left and the other end against the ground. In the first scenario, the top left end is a roller resting against the wall, and bottom right end is a fixed pin connection. This has 3 unknowns and is determinate. The next scenario has both ends with fixed pin connections. This has 4 unknowns and is indeterminate. The final scenario has bot ends with roller connections. This has 2 unknowns and is indeterminate.   CC-BY-SA       Rule 2: Are all the reaction force components parallel to one another?  If YES, the system is unstable for translation.  If NO, the system is stable for translation.    Four scenarios are shown. An L shaped beam has one end against a wall on the left and the other end against the ground. In the first scenario, the top left end is a roller resting against the wall, and bottom right end is a fixed pin connection. This is stable for translation. The next scenario rollers on the top of the upper horizontal part of the beam, but no roller support on the vertical wall. This is not stable for translation. In the third scenario, the top left end is a roller resting against the wall, and bottom right end is a fixed pin connection. This is stable for rotation. The fourth scenario has a roller connection at the left end against the wall, and a roller connection on the top of the upper right horizontal part of the beam. This is not stable for rotation.   CC-BY-SA       Rule 3: Do the lines of action of the reaction forces intersect at a single point?  If YES, the system is unstable for rotation about the single intersection point.  If NO, the system is stable for rotation.     CC-BY-SA      "
},
{
  "id": "Chapter_05-stability-and-determinacy-2",
  "level": "2",
  "url": "Chapter_05-stability-and-determinacy.html#Chapter_05-stability-and-determinacy-2",
  "type": "Key Questions",
  "number": "5.6",
  "title": "",
  "body": "  What does stable mean for a rigid body?  What does determinate mean for a rigid body?  Does stability depend on the external loads or only on the reactions?  How can I tell if a system is determinate?  How can I decide if a problem is both stable and determinate, which makes it solvable statics?   "
},
{
  "id": "Chapter_05-stability-and-determinacy-3-2",
  "level": "2",
  "url": "Chapter_05-stability-and-determinacy.html#Chapter_05-stability-and-determinacy-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "determinate indeterminate "
},
{
  "id": "Chapter_05-stability-and-determinacy-3-4",
  "level": "2",
  "url": "Chapter_05-stability-and-determinacy.html#Chapter_05-stability-and-determinacy-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "under-constrained over-constrained indeterminate "
},
{
  "id": "Chapter_05-stability-and-determinacy-4-2",
  "level": "2",
  "url": "Chapter_05-stability-and-determinacy.html#Chapter_05-stability-and-determinacy-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable "
},
{
  "id": "Chapter_05-equilibrium-examples-",
  "level": "1",
  "url": "Chapter_05-equilibrium-examples-.html",
  "type": "Section",
  "number": "5.7",
  "title": "Equilibrium Examples",
  "body": " Equilibrium Examples  You can use these interactives to explore how the reactions supporting rigid bodies are affected by the loads applied. You can use the equations of equilibrium to solve for the unknown reactions, and check your work.   Rigid body Equilibrium     Cantilever beam     Beam with concentrated load     Beam with concentrated force and couple moment    "
},
{
  "id": "ggb_5-1",
  "level": "2",
  "url": "Chapter_05-equilibrium-examples-.html#ggb_5-1",
  "type": "Figure",
  "number": "5.7.1",
  "title": "",
  "body": " Rigid body Equilibrium   "
},
{
  "id": "ggb_5-2",
  "level": "2",
  "url": "Chapter_05-equilibrium-examples-.html#ggb_5-2",
  "type": "Figure",
  "number": "5.7.2",
  "title": "",
  "body": " Cantilever beam   "
},
{
  "id": "ggb_5-3",
  "level": "2",
  "url": "Chapter_05-equilibrium-examples-.html#ggb_5-3",
  "type": "Figure",
  "number": "5.7.3",
  "title": "",
  "body": " Beam with concentrated load   "
},
{
  "id": "ggb_5-4",
  "level": "2",
  "url": "Chapter_05-equilibrium-examples-.html#ggb_5-4",
  "type": "Figure",
  "number": "5.7.4",
  "title": "",
  "body": " Beam with concentrated force and couple moment   "
},
{
  "id": "Chapter_05-10",
  "level": "1",
  "url": "Chapter_05-10.html",
  "type": "Exercises",
  "number": "5.8",
  "title": "Exercises (Ch. 5)",
  "body": " Exercises (Ch. 5)   "
},
{
  "id": "Chapter_06-structures",
  "level": "1",
  "url": "Chapter_06-structures.html",
  "type": "Section",
  "number": "6.1",
  "title": "Structures",
  "body": " Structures  Structures fall into three broad categories: trusses, frames, and machines, and you should be able to identify which is which.  A truss is a multi-body structure made up of long slender members connected at their ends in triangular subunits. Truss members carry axial forces only. Trusses are commonly used for spanning large distances without interruption: bridges, roof systems, stadiums, aircraft hangers, auditoriums for example. They are also used for crane booms, radio towers and the like. Trusses are lightweight and relatively strong. Over the years many unique truss designs have been developed and are often named after the original designer.  A frame is a multi-part, rigid, stationary structure primarily designed to support some type of load. A frame contains at least one multi-force member, which a truss never has. This means that, unlike trusses, frame members must support bending moments as well as shear and normal forces. Many common items can be considered frames. Some examples: building structures, bike frames, ladders, scaffolding, and more.  A machine is very similar to a frame, except that it includes some moving parts. The purpose of a machine is usually to provide a mechanical advantage and multiply forces. Pliers, scissors jacks, automobile suspensions, and construction equipment are all examples of machines.    Scissors and bridges are examples of engineering structures. Scissors are machines with three interconnected parts. The bridge is a truss.    Scissors   CC-BY-SA     A truss bridge   Simon (pixabay.com)  CC-0       Solving a structure means determining all forces acting on all of its parts. The solution typically begins by determining the global equilibrium of the entire structure, then breaking it into parts and analyzing each separate part. The specific process will depend on the type of structure, but will always follow the principles covered in the previous chapters.   Two-force Members  Many structures contain at least one two-force member, and trusses consist of two-force members exclusively. Recall from that a two-force body is an object subjected to exactly two forces. Two-force members are not required to be slender or straight but can be recognized because they connect to other bodies or supports at exactly two points, and have no other loading unless it is also applied at those points.  Identifying two-force members is helpful when solving structures because they automatically establish the line of action of the two forces. For a two-force body to be in equilibrium, the forces acting on it must be equal in magnitude, opposite in direction, and act along a line passing through the points where the two forces are applied. Since these points are known, the direction of the line of action is readily found.  The common way to express the force of a two-force member is with a magnitude and a sense, where the sense is either tension or compression. If the two forces tend to stretch the object we say it is in tension ; if they act the other way and squash the object, it is in compression . The usual approach is to assume that a two-force member is in tension, then draw the free-body diagram and write the equilibrium equations accordingly. If the analysis shows that the forces are negative then they actually act with the opposite sense, compression.   Two-force members in tension and compression.   A horizontal two-force member with forces pointing away from each other (tension) and a second with forces pointing towards each other (compression).   CC-BY-SA      "
},
{
  "id": "Chapter_06-structures-3",
  "level": "2",
  "url": "Chapter_06-structures.html#Chapter_06-structures-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truss "
},
{
  "id": "Chapter_06-structures-4",
  "level": "2",
  "url": "Chapter_06-structures.html#Chapter_06-structures-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "frame "
},
{
  "id": "Chapter_06-structures-5",
  "level": "2",
  "url": "Chapter_06-structures.html#Chapter_06-structures-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "machine "
},
{
  "id": "scissors",
  "level": "2",
  "url": "Chapter_06-structures.html#scissors",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": " Scissors and bridges are examples of engineering structures. Scissors are machines with three interconnected parts. The bridge is a truss.    Scissors   CC-BY-SA     A truss bridge   Simon (pixabay.com)  CC-0      "
},
{
  "id": "Chapter_06-structures-8",
  "level": "2",
  "url": "Chapter_06-structures.html#Chapter_06-structures-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solving "
},
{
  "id": "Chapter_06-structures-9-5",
  "level": "2",
  "url": "Chapter_06-structures.html#Chapter_06-structures-9-5",
  "type": "Figure",
  "number": "6.1.2",
  "title": "",
  "body": " Two-force members in tension and compression.   A horizontal two-force member with forces pointing away from each other (tension) and a second with forces pointing towards each other (compression).   CC-BY-SA    "
},
{
  "id": "Chapter_06-interactions-between-members",
  "level": "1",
  "url": "Chapter_06-interactions-between-members.html",
  "type": "Section",
  "number": "6.2",
  "title": "Interactions between members",
  "body": " Interactions between members   When analyzing structures we are dealing with multi-body systems and need to recall , For every action, there is an equal and opposite reaction.  This law applies to multi-body systems wherever one body connects to another. At any interaction point, forces are transferred from one body to the interacting body as equal and opposite action-reaction pairs. These forces cancel out and are invisible when the structure is intact. Only when we cut through a member or joint in the isolation step of creating a free-body diagram, do we expose the interaction forces. When drawing free-body diagrams of the components of structures, it is critically important to represent these action-reaction pairs consistently. You may assume either direction for one, but the other must be equal and opposite.  For example, look at the members and joints in the truss below. Diagram (a) shows the truss members held together by pins at , , and . The forces holding the parts together cancel and are not shown. In the exploded view (b), the parts have been separated and the action-reaction pairs are exposed. Member is in tension, and the forces acting on it, also called , oppose each other and tend to stretch the member. These stretching forces are accompanied by equal and opposite forces, also called acting on pins and . Tensile forces and compressive forces behave similarly.   External load and global reactions in red. Internal action-reaction pairs in blue.    Whole Truss   A three-member truss with loads shown at the pins.     Exploded   A three-member truss separated at the pins with external loads shown acting only on the pins.       Multi-body systems  When a multipart structure is in equilibrium, each part of the structure is also in equilibrium. For example in the truss below, each member of the truss, each joint, and each portion of the truss is also in equilibrium. This continues all the way down to the atoms of the structure. This universal equilibrium across spatial scales allows us to break multi-body systems into smaller solvable parts.    Possible free-body diagrams     Complete Truss     Member       Truss joints     Section       You will see in this chapter that we have the freedom to isolate free-body diagrams at any scale to expose our target unknowns.     Load Paths  Load paths can help you think about structural systems. Load paths show how applied forces like the floor load in the image below pass through the interconnected members of the structure until they end up at the fixed support reactions. All structural systems, whether non-moving frames or moving machines have some sort of load path. When analyzing all structures, you computationally move from known values through the interconnected bodies of the system, following the load path, solving for unknowns as you go.   Load paths   Load on a floor shown pointing down at the center. The load is directed through the floor and down into the columns and footings supporting the load.   William Haynes  CC-BY-SA      "
},
{
  "id": "joints-members",
  "level": "2",
  "url": "Chapter_06-interactions-between-members.html#joints-members",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " External load and global reactions in red. Internal action-reaction pairs in blue.    Whole Truss   A three-member truss with loads shown at the pins.     Exploded   A three-member truss separated at the pins with external loads shown acting only on the pins.     "
},
{
  "id": "Chapter_06-interactions-between-members-2-5",
  "level": "2",
  "url": "Chapter_06-interactions-between-members.html#Chapter_06-interactions-between-members-2-5",
  "type": "Thinking Deeper",
  "number": "6.2.2",
  "title": "Multi-body systems.",
  "body": " Multi-body systems  When a multipart structure is in equilibrium, each part of the structure is also in equilibrium. For example in the truss below, each member of the truss, each joint, and each portion of the truss is also in equilibrium. This continues all the way down to the atoms of the structure. This universal equilibrium across spatial scales allows us to break multi-body systems into smaller solvable parts.    Possible free-body diagrams     Complete Truss     Member       Truss joints     Section       You will see in this chapter that we have the freedom to isolate free-body diagrams at any scale to expose our target unknowns.  "
},
{
  "id": "load_paths",
  "level": "2",
  "url": "Chapter_06-interactions-between-members.html#load_paths",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": " Load paths   Load on a floor shown pointing down at the center. The load is directed through the floor and down into the columns and footings supporting the load.   William Haynes  CC-BY-SA    "
},
{
  "id": "Chapter_06-trusses",
  "level": "1",
  "url": "Chapter_06-trusses.html",
  "type": "Section",
  "number": "6.3",
  "title": "Trusses",
  "body": " Trusses    What are simple trusses and how do they differ from other structural systems?  What are the benefits and dangers of simple trusses?  How can we determine the forces acting within simple truss systems?  For a truss in equilibrium, why is every individual member, joint, and section cut from the truss also in equilibrium?  How do we identify zero-force members in a truss and use their presence to simplify the analysis?     Introduction  A truss is a rigid engineering structure made up of long, slender members connected at their ends. Trusses are commonly used to span large distances with a strong, lightweight structure. Some familiar applications of trusses are bridges, roof structures, and pylons. Planar trusses are two-dimensional trusses built out of triangular subunits, while space trusses are three-dimensional, and the basic unit is a tetrahedron.  In this section, we will analyze a simplified approximation of a planar truss, called a simple truss and determine the forces the members individually support when the truss supports a load. Two different approaches will be presented: the method of sections , and the method of joints .    Simple Trusses  Truss members are connected to each other rigidly, by welding or joining the ends with a gusset plate. This makes the connecting joints rigid but also makes the truss difficult to analyze. To reduce the mathematical complexity in this text we will only consider simple trusses , which are a simplification appropriate for preliminary analysis.   Truss with riveted gusset plates.   Truss bridge with riveted gusset plates.   William Haynes  CC-BY-SA  Own work  Cape Cod Canal Railroad Bridge     Simple trusses are made of all two-force members and all joints are modeled as frictionless pins. All applied and reaction forces are applied only to these joints. Simple trusses, by their nature, are statically determinate, having a sufficient number of equations to solve for all unknown values. While the members of real-life trusses stretch and compress under load, we will continue to assume that all bodies we encounter are rigid.  Simple trusses are made of triangles, which makes them rigid when removed from supports. Simple trusses are determinate, having a balance of equations and unknowns, following the equation:   Commonly, rigid trusses have only three reaction forces, resulting in the equation:  Unstable trusses lack the structural members to maintain their rigidity when removed from their supports. They can also be recognized using the equation above having more system equations on the left side of the equation above than system unknowns on the right.  Truss systems with redundant members have fewer system equations on the left side of the equation above than the system unknowns on the right. While they are indeterminate in statics, in later courses you will learn to solve these trusses too, by taking into account the deformations of the truss members.   The Danger of Simple Trusses  Simple trusses have no structural redundancy, which makes them easy to solve using the techniques of this chapter, however, this simplicity also has a dark side.    US Department of Transportation NSTB   CC-0    These trusses are sometimes called fracture-critical trusses because the failure of a single component can lead to catastrophic failure of the entire structure. With no redundancy, there is no alternative load path for the forces that normally would be supported by that member. You can visualize the fracture-critical nature of simple trusses by thinking about a triangle with pinned corners. If one side of a triangle fails, the other two sides lose their support and will collapse. In a full truss made of only triangles, the collapse of one triangle starts a chain reaction which causes others to collapse as well.  While fracture-critical bridges are being replaced by more robust designs, there are still thousands in service across the United States. To read more about two specific fracture critical collapses search the internet for the Silver Bridge collapse, or the I-5 Skagit River Bridge collapse.     Solving Trusses  Solving a truss means identifying and determining the unknown forces carried by the members of the truss when supporting the assumed load. Because trusses contain only two-force members, these internal forces are all purely axial. Internal forces in frames and machines will additionally include traverse forces and bending moments, as you will see in .  Determining the internal forces is only the first step of a thorough analysis of a truss structure. Later steps would include refining the initial analysis by considering other load conditions, accounting for the weight of the members, relaxing the requirement that the members be connected with frictionless pins, and ultimately determining the stresses in the structural members and the dimensions required to prevent failure.  Two strategies to solve trusses will be covered in the following sections: the and the . Either method may be used, but the Method of Joints is usually easier when finding the forces in all the members, while the Method of Sections is a more efficient way to solve for specific members without solving the entire truss. It's also possible to mix and match methods.  The initial steps to solve a truss are the same for both methods. First, ensure that the structure can be modeled as a simple truss, then draw and label a sketch of the entire truss. Each joint should be labeled with a letter, and the members will be identified by their endpoints, so member is the member between joints and . This will help you keep everything organized and consistent in later analysis. Then, treat the entire truss as a rigid body and solve for the external reactions using the methods of . If the truss is cantilevered and unsupported at one end you may not actually need the reaction forces and may skip this step. The reaction forces can be used later to check your work.    Truss Labels.   A five-member truss with pin and roller connection. Pins labeled as single letters and members labeled with both pin letters.   CC-BY-SA      Free body diagram.   The same five-member truss free-body diagram. Truss is shown detached from its external connections with forces representing those reactions. Additional external force is shown on the top pin.   CC-BY-SA        Zero-Force Members  Sometimes a truss will contain one or more zero-force members. As the name implies, zero-force members carry no force and thus support no load. Zero-force members will be found when you apply equilibrium equations to the joints, but you can save some work if you can spot and eliminate them before you begin. Fortunately, zero-force members can easily be identified by inspection with two rules.  Rule 1: If two non-collinear members meet at an unloaded joint, then both are zero-force members.  Rule 2: If three forces (interaction, reaction, or applied forces) meet at a joint and two are collinear, then the third is a zero-force member.       William Haynes  CC-BY-SA     Consider the truss to the left. Assume that the dimensions, angles and the magnitude of force are given. At joint , there are two vertical collinear members as well as a third member which is horizontal, so Rule 2 should apply.  What does Rule 2 say about member ? Can it tell us anything about member ?      Cutting the members at the dotted boundary line exposes internal forces , and . These forces act along the axis of the corresponding members by the nature of two-force members, and for convenience have been assumed in tension although that may turn out to be incorrect.  Rule 2 applies here since and are collinear and is not.     William Haynes  CC-BY-SA       The free-body diagram of joint may be drawn by eliminating the cut members and only showing the forces themselves.  The situation is simple enough to apply the equilibrium equations in your head.     William Haynes  CC-BY-SA     Vertically, forces and must be equal, and horizontally, force must be zero to satisfy . We learn that member is a zero-force member.  While it is probably easiest to think about Rule 2 when the third member is perpendicular to the collinear pair, it doesn't have to be. Any perpendicular component must be zero which implies that the corresponding member is zero-force.    Finding zero-force members is an iterative process. If you determine that a member is zero-force, eliminate it and you may find others. Continuing the analysis at joint draw its free-body diagram. Keep in mind that if one end of a member is zero-force the whole member is zero-force. Since member is zero-force, horizontal force acting on joint is zero and need not be included on the free-body diagram, and the remaining three forces match the conditions to apply Rule 2.     William Haynes  CC-BY-SA     Analyzing the joint as before, but with a coordinate system aligned with the collinear pair,   This equation will be satisfied if or if but the second condition is only true when or , which is not the case here. Therefore, force must be zero, and we can conclude that member is a zero-force member as well.    Finally consider joint and draw its free-body diagram. Does either Rule apply to this joint? No. You will need to solve two equilibrium equations with this free-body diagram to find the magnitudes of forces and .  On the other hand, if the horizontal load was not present or if either or was zero-force, then Rule 1 would apply and the remaining members would also be zero-force.     William Haynes  CC-BY-SA        William Haynes  CC-BY-SA     The final truss after eliminating the zero-force members is shown to the left. Forces and and the members may be replaced with longer members and .  The original truss has been reduced to a simpler triangular structure with only three internal forces to be found. Once you learn to spot zero force members, this simplification can be made without drawing any diagrams or performing any calculations.     Why include Zero-Force Members?  You may be wondering what is the point of including a member in a truss if it supports no load. In our simplified example problems, they are unnecessary, but in the real world, zero-force members are important for several reasons:  We have assumed that all members have negligible weight or if not, applied half the weight to each pin. The actual weight of real members invalidates the two-force body assumption and leads to errors. Consider a vertical member -- the internal forces must at least support the member's weight.  Truss members are not actually rigid, and long slender members under compression will buckle and collapse. The so-called zero-force member will be engaged to prevent this buckling. In the previous example, members CD and DE are under compression and form an unstable equilibrium and would definitely buckle at pin if they were not replaced with a single member with sufficient rigidity.  Trusses are often used over a wide array of loading conditions. While a member may be zero-force for one loading condition, it will likely be engaged under a different condition think about how the load on a bridge shifts as a heavy truck drives across.    So finding a zero-force member in a determinate truss does not mean you can discard the member. Zero-force members can be thought of as removed from the analysis, but only for the loading you are currently analyzing. After removing zero-force members, you are left with the simplest truss which connects the reaction and applied forces with triangles. If you misinterpret the rules you may over-eliminate members and be left with missing legs of triangles or floating forces that have no load path to the foundation.    Zero-Force Member Example    Given the truss shown, eliminate all the zero-force members, and draw the remaining truss.    CC-BY-SA        There are seven zero-force members: , , , , , and .    Rule 1:  Due to two members meeting at unloaded joint , both members and are zero-force members  Due to two members meeting at unloaded joint , both members and are zero-force members    Rule 2:  Due to three forces meeting at joining , with two being collinear (internal forces in and ) then is a zero-force member.  Due to three forces meeting at joint , with two being collinear (internal forces in and ), then is a zero-force member. Note that member does not need to be perpendicular to the collinear members to be a zero force.  After removing zero-force members and , three forces remain at , with two being collinear (internal force in and external load ), making a zero-force member.     The remaining truss is shown. Note that once and are eliminated, you can effectively eliminate the joints and as the member forces in the collinear members will be equal. Also notice that the truss is still formed of triangles which fully support all of the applied forces.    CC-BY-SA        Try to find all the zero-force members in the truss in the interactive diagram below, once you believe you have found all of them, check out the step-by-step solution in the interactive.   Identify zero-force members.     "
},
{
  "id": "Chapter_06-trusses-2",
  "level": "2",
  "url": "Chapter_06-trusses.html#Chapter_06-trusses-2",
  "type": "Key Questions",
  "number": "6.3",
  "title": "",
  "body": "  What are simple trusses and how do they differ from other structural systems?  What are the benefits and dangers of simple trusses?  How can we determine the forces acting within simple truss systems?  For a truss in equilibrium, why is every individual member, joint, and section cut from the truss also in equilibrium?  How do we identify zero-force members in a truss and use their presence to simplify the analysis?   "
},
{
  "id": "intro-trusses-2",
  "level": "2",
  "url": "Chapter_06-trusses.html#intro-trusses-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truss Planar trusses space trusses "
},
{
  "id": "intro-trusses-3",
  "level": "2",
  "url": "Chapter_06-trusses.html#intro-trusses-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple truss method of sections method of joints "
},
{
  "id": "simple-trusses-2",
  "level": "2",
  "url": "Chapter_06-trusses.html#simple-trusses-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple trusses "
},
{
  "id": "simple-trusses-3",
  "level": "2",
  "url": "Chapter_06-trusses.html#simple-trusses-3",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": " Truss with riveted gusset plates.   Truss bridge with riveted gusset plates.   William Haynes  CC-BY-SA  Own work  Cape Cod Canal Railroad Bridge    "
},
{
  "id": "simple-trusses-10",
  "level": "2",
  "url": "Chapter_06-trusses.html#simple-trusses-10",
  "type": "Thinking Deeper",
  "number": "6.3.3",
  "title": "The Danger of Simple Trusses.",
  "body": " The Danger of Simple Trusses  Simple trusses have no structural redundancy, which makes them easy to solve using the techniques of this chapter, however, this simplicity also has a dark side.    US Department of Transportation NSTB   CC-0    These trusses are sometimes called fracture-critical trusses because the failure of a single component can lead to catastrophic failure of the entire structure. With no redundancy, there is no alternative load path for the forces that normally would be supported by that member. You can visualize the fracture-critical nature of simple trusses by thinking about a triangle with pinned corners. If one side of a triangle fails, the other two sides lose their support and will collapse. In a full truss made of only triangles, the collapse of one triangle starts a chain reaction which causes others to collapse as well.  While fracture-critical bridges are being replaced by more robust designs, there are still thousands in service across the United States. To read more about two specific fracture critical collapses search the internet for the Silver Bridge collapse, or the I-5 Skagit River Bridge collapse.  "
},
{
  "id": "joint-labels",
  "level": "2",
  "url": "Chapter_06-trusses.html#joint-labels",
  "type": "Figure",
  "number": "6.3.4",
  "title": "",
  "body": " Truss Labels.   A five-member truss with pin and roller connection. Pins labeled as single letters and members labeled with both pin letters.   CC-BY-SA    "
},
{
  "id": "truss_reactions",
  "level": "2",
  "url": "Chapter_06-trusses.html#truss_reactions",
  "type": "Figure",
  "number": "6.3.5",
  "title": "",
  "body": " Free body diagram.   The same five-member truss free-body diagram. Truss is shown detached from its external connections with forces representing those reactions. Additional external force is shown on the top pin.   CC-BY-SA    "
},
{
  "id": "zero-force-members-13",
  "level": "2",
  "url": "Chapter_06-trusses.html#zero-force-members-13",
  "type": "Thinking Deeper",
  "number": "6.3.6",
  "title": "Why include Zero-Force Members?",
  "body": " Why include Zero-Force Members?  You may be wondering what is the point of including a member in a truss if it supports no load. In our simplified example problems, they are unnecessary, but in the real world, zero-force members are important for several reasons:  We have assumed that all members have negligible weight or if not, applied half the weight to each pin. The actual weight of real members invalidates the two-force body assumption and leads to errors. Consider a vertical member -- the internal forces must at least support the member's weight.  Truss members are not actually rigid, and long slender members under compression will buckle and collapse. The so-called zero-force member will be engaged to prevent this buckling. In the previous example, members CD and DE are under compression and form an unstable equilibrium and would definitely buckle at pin if they were not replaced with a single member with sufficient rigidity.  Trusses are often used over a wide array of loading conditions. While a member may be zero-force for one loading condition, it will likely be engaged under a different condition think about how the load on a bridge shifts as a heavy truck drives across.    So finding a zero-force member in a determinate truss does not mean you can discard the member. Zero-force members can be thought of as removed from the analysis, but only for the loading you are currently analyzing. After removing zero-force members, you are left with the simplest truss which connects the reaction and applied forces with triangles. If you misinterpret the rules you may over-eliminate members and be left with missing legs of triangles or floating forces that have no load path to the foundation.  "
},
{
  "id": "Chapter_06-example-zero-force-member-example-",
  "level": "2",
  "url": "Chapter_06-trusses.html#Chapter_06-example-zero-force-member-example-",
  "type": "Example",
  "number": "6.3.7",
  "title": "Zero-Force Member Example.",
  "body": " Zero-Force Member Example    Given the truss shown, eliminate all the zero-force members, and draw the remaining truss.    CC-BY-SA        There are seven zero-force members: , , , , , and .    Rule 1:  Due to two members meeting at unloaded joint , both members and are zero-force members  Due to two members meeting at unloaded joint , both members and are zero-force members    Rule 2:  Due to three forces meeting at joining , with two being collinear (internal forces in and ) then is a zero-force member.  Due to three forces meeting at joint , with two being collinear (internal forces in and ), then is a zero-force member. Note that member does not need to be perpendicular to the collinear members to be a zero force.  After removing zero-force members and , three forces remain at , with two being collinear (internal force in and external load ), making a zero-force member.     The remaining truss is shown. Note that once and are eliminated, you can effectively eliminate the joints and as the member forces in the collinear members will be equal. Also notice that the truss is still formed of triangles which fully support all of the applied forces.    CC-BY-SA       "
},
{
  "id": "ggb_bf6c5jmx",
  "level": "2",
  "url": "Chapter_06-trusses.html#ggb_bf6c5jmx",
  "type": "Figure",
  "number": "6.3.8",
  "title": "",
  "body": " Identify zero-force members.   "
},
{
  "id": "method-of-joints",
  "level": "1",
  "url": "method-of-joints.html",
  "type": "Section",
  "number": "6.4",
  "title": "Method of Joints",
  "body": " Method of Joints    What are the important components to include on a free-body diagram of a joint in a truss?  How are the solutions found at one joint used to create an accurate free-body diagram of another joint?  How do we ensure that tension or compression in a member is properly represented?     The method of joints is a process used to solve for the unknown forces acting on members of a truss. The method centers on the joints or connection points between the members, and it is most useful when you need to solve for all the unknown forces in a truss structure.  The joints are treated as particles subjected to force by the connected members and any applied loads. As the joints are in equilibrium and the forces are concurrent, can be applied, but the equation provides no information.  For planar trusses, each joint yields two scalar equations, and , and so two unknowns can be found. Therefore, a joint can be solved when there are one or two unknown forces and at least one known force acting on it.  Forces are transferred from joint to joint by the connecting members, so when unknown forces on a joint are found, the corresponding forces on adjacent joints are also found.    Procedure  The procedure is a straightforward application of rigid body and particle equilibrium   Determine if the structure is a truss and if it is determinate. See    Identify and remove all zero-force members. This is not required but will eliminate unnecessary computations. See .    Determine if you need to find the external reactions. If you can identify a solvable joint immediately, then you do not need to find the external reactions.  A solvable joint includes one or more known forces and no more than two unknown forces. If there are no joints that satisfy this condition then you will need to find the external reactions before proceeding, using a free-body diagram of the entire truss.    Identify a solvable joint and solve it using the methods of . When drawing free-body diagrams of joints you should  Represent the joint as a dot.  Draw all known forces in their known directions with arrowheads indicating their sense. Known forces are the given loads and forces determined from previously solved joints.  Assume the sense of unknown forces. A common practice is to assume that all unknown forces are in tension, pulling away from the free-body diagram of the pin, and label them based on the member they represent.    Finally, write out and solve the force equilibrium equations for the joint. If you assumed that all forces were tensile earlier, negative answers indicate compression.    Once the unknown forces acting on a joint are determined, carry these values to the adjacent joints and repeat step four until all the joints have been solved. Take care when transferring forces to adjoining joints to maintain their sense either tension or compression.    If you solved for the reactions in step two, you will have more equations available than unknown forces when you reach the last joint. The extra equations can be used to check your work.     Rather than solving the joints sequentially, you could write out the equations for all the joints first and solve them simultaneously using a matrix solution, but only if you have a computer available as large matrices are not typically solvable with a calculator.  The interactive below shows a triangular truss supported by a pin at and a roller at , and loaded at joint . You can see how the reactions and internal forces adjust as you vary the load at . You can solve it by starting at joint and solving for and , then moving to joint and solving for Joint can be used to check your work.   Internal and external forces of a simple truss.     "
},
{
  "id": "method-of-joints-2",
  "level": "2",
  "url": "method-of-joints.html#method-of-joints-2",
  "type": "Key Questions",
  "number": "6.4",
  "title": "",
  "body": "  What are the important components to include on a free-body diagram of a joint in a truss?  How are the solutions found at one joint used to create an accurate free-body diagram of another joint?  How do we ensure that tension or compression in a member is properly represented?   "
},
{
  "id": "method-of-joints-3-1",
  "level": "2",
  "url": "method-of-joints.html#method-of-joints-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of joints "
},
{
  "id": "ggb_fvuugvb4",
  "level": "2",
  "url": "method-of-joints.html#ggb_fvuugvb4",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " Internal and external forces of a simple truss.   "
},
{
  "id": "method-of-sections",
  "level": "1",
  "url": "method-of-sections.html",
  "type": "Section",
  "number": "6.5",
  "title": "Method of Sections",
  "body": " Method of Sections    How do we determine an appropriate section to cut through a truss?  How are equilibrium equations applied to a section?     The method of sections is used to solve for the unknown forces within specific members of a truss without solving for them all. The method involves dividing the truss into sections by cutting through the selected members and analyzing the section as a rigid body. The advantage of the Method of Sections is that the only internal member forces exposed are those which you have cut through, the remaining internal forces are not exposed and thus ignored.    Procedure  The procedure to solve for unknown forces using the method of sections is   Determine if a truss can be modeled as a simple truss .    Identify and eliminate all zero-force members . Removing zero-force members is not required but may eliminate unnecessary computations.    Solve for the external reactions, if necessary. Reactions will be necessary if the reaction forces act on the section of the truss you choose to solve below.    Use your imaginary chain saw to cut the truss into two pieces by cutting through some or all of the members you are interested in. The cut does not need to be a straight line.  Every cut member exposes an unknown internal force, so if you cut three members you'll expose three unknowns. Exposing more than three members is not advised because you create more unknowns than available equilibrium equations.    Select the easier of the two halves of the truss and draw its free-body diagram.   Include all applied and reaction forces acting on the section, and show known forces acting in their known directions.    Draw unknown forces in assumed directions and label them. A common practice is to assume that all unknown forces are in tension and label them based on the endpoints of the member they represent.       Write out and solve the equilibrium equations for your chosen section. If you assumed that unknown forces were tensile, negative answers indicate compression.    If you have not found all the required forces with one section cut, repeat the process using another imaginary cut or proceed with the method of joints if it is more convenient.     The interactive below demonstrates the method of sections. The internal forces in the truss members are exposed by cutting through the truss at three locations. The known loads are shown in red, and the unknown reactions , and , and unknown member forces are shown in blue. All members are assumed to be in tension. In this situation, it is not necessary to find the reactions if the section to the right of the cut is selected.    Method of sections demonstration.      "
},
{
  "id": "method-of-sections-2",
  "level": "2",
  "url": "method-of-sections.html#method-of-sections-2",
  "type": "Key Questions",
  "number": "6.5",
  "title": "",
  "body": "  How do we determine an appropriate section to cut through a truss?  How are equilibrium equations applied to a section?   "
},
{
  "id": "method-of-sections-3-1",
  "level": "2",
  "url": "method-of-sections.html#method-of-sections-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of sections "
},
{
  "id": "ggb_wxh9nsbc",
  "level": "2",
  "url": "method-of-sections.html#ggb_wxh9nsbc",
  "type": "Figure",
  "number": "6.5.1",
  "title": "",
  "body": " Method of sections demonstration.   "
},
{
  "id": "frames-and-machines",
  "level": "1",
  "url": "frames-and-machines.html",
  "type": "Section",
  "number": "6.6",
  "title": "Frames and Machines",
  "body": " Frames and Machines    How are frames and machines different from trusses?  Why are the methods of joints and sections not appropriate for frames and machines?  How do we identify if a structure is independently rigid?  How do we apply equilibrium equations to each member of the structure, and ensure that the sense of a force appearing on multiple free-body diagrams is consistent?     Frame and machines are engineering structures that contain at least one multi-force member. As their name implies, multi-force members have more than two concentrated loads, distributed loads, and\/or couples applied to them and therefore are not two-force members. Note that all bodies we investigated in were all multi-force bodies.  Frames are rigid, stationary structures designed to support loads and must include at least one multi-force member.  Machines are non-rigid structures where the parts can move relative to one another. Generally, they have an input and an output force and are designed to produce a mechanical advantage. Note that all machines in this text are in static equilibrium by their interacting and applied forces.  Though there is a design difference between frames and machines they are grouped together because they can both be analyzed using the same process, which is the subject of this section.    Frames are rigid objects containing multi-force members.   A kitchen stool is an example of a frame.    BY-SA  Sebastien Rivory      Machines contain multi-force members that can move relative to one another.   A set of locking pliers is an example of a machine.    CC-BY-SA        Analyzing Frames and Machines   Analyzing a frame or machine means determining all applied, reaction, and internal forces and couples acting on the structure and all of its parts.  Multi-part structures are analyzed by mentally taking them apart and analyzing the entire structure and each part separately. Each component is analyzed as a separate rigid body using the techniques we have already seen.  Although we can separate the structure into parts, the parts are not independent since, by Newton's Third Law, every interaction is half of a complementary pair. For every force or moment of body on there is an equal-and-opposite force or moment of body on body and the free-body diagrams must reflect this. Incorrect representation of these interacting pairs on free-body diagrams is a common source of student errors.  Once the frame or machine is disassembled and free-body diagrams have been drawn, the structure is analyzed by applying equations of equilibrium to free-body diagrams, exactly as you have done before there's nothing new here.  The difficulty arises first in selecting objects and drawing correct free-body diagrams and second, in identifying an efficient solution strategy since you usually won't be able to completely solve a diagram without first finding the value of an unknown force from another diagram.  In we saw that each two-dimensional free-body diagram results in up to three linearly independent equations. By disassembling the structure we create new free-body diagrams that can be used to determine more unknown values. Here are a few more details on the number of equations that come from each type of two-dimensional free-body diagram:   Two-force members  One equation. Two-force members can be recognized as either a cable or a weightless link with all forces coming from two frictionless pins. The force at one pin is equal and opposite to the force on the other placing the body in tension or compression.    Objects with concurrent forces and no couple-moments  Two equations. These are the problems you solved in . There are two equations available and .    Multi-force rigid body with non-concurrent forces and\/or couples  Three equations. These are the most general body types. Use , , and to solve for three unknowns.       Procedure  The process used to analyze frames and machines is outlined below   Determine if the entire structure is independently rigid. An independently rigid structure will hold it shape even when separated from its supports. Look for triangles formed among the members, as triangles are inherently rigid. If it is not independently rigid, the structure will collapse when the supports are removed.  If the structure is not independently rigid, skip to the next step. Otherwise, model it as a single rigid body and determine the external reaction forces.    Draw a free-body diagram for each of the members in the structure. You must represent all forces acting on each member, including:  Applied forces and couples and the weights of the components if non-negligible.  Interaction forces due to two-force members. There will be a force of unknown magnitude but the known direction at points connected to two-force members. The forces will act along the line between the two connection points.  All reaction forces and moments at the connection points between members. Forces with an unknown magnitude and direction are usually represented by unknown and components, but can also be represented as a force of unknown magnitude acting in an unknown direction.    All interaction forces and moments between connected bodies must be shown as equal-and-opposite action-reaction pairs.    Free-body diagram of a rigid frame with pin at , roller at , and load at .   A frame of three members shaped like the capital letter A. Pin A is bottom left, and continuing clockwise are pins B, C, D and E.   William Haynes  CC-BY-SA      Free body diagrams of the individual components. External forces are in red, and exposed action-reaction pairs are in blue.   Members of the frame are shown separately. Separated pin connections are shown with equal and opposite forces acting on the previously connected members.   William Haynes  CC-BY-SA        Write out the equilibrium equations for each free-body diagram.    Solve the equilibrium equations for the unknowns. You can do this algebraically, solving for one variable at a time, or you can use matrix equations to solve for everything at once. Negative magnitudes indicate that the assumed direction of that term was incorrect, and the actual force\/moment is opposite the assumed direction.     In the following example, we'll discuss how to select objects, distinguish external and internal loads, draw consistent and correct free-body diagrams, and identify a good solution strategy.    Free-body diagram of structures  Drawing free-body diagrams of complex frames and machines can be tricky. In this section, we will walk through the process of selecting appropriate objects and drawing consistent and correct free-body diagrams to solve a typical machine problem.  The toggle clamp shown in is used to quickly secure wooden furniture parts to the bedplate of a CNC router in order to cut mortise and tenon joints. The component parts are shown and named in .    Original diagram   Illustrated image of a toggle clamp.   Anna Howard  CC-BY-SA      Component parts.   Component parts are shown as separated from each other.   Dan Baker  CC-BY-SA      This original diagram is not a free-body diagram because all the forces necessary to hold the objects in equilibrium are not indicated. The only force shown is which is supplied by some external agent, presumably the machine operator. We must assume that the wall and floor are still attached to the world and held fixed.  To perform an equilibrium analysis, we need to develop one or more free-body diagrams and apply the equations of equilibrium to them. Free-body diagrams can be drawn for the entire structure, each individual part, and any combination of connected parts. Not all these diagrams will be needed, and part of the challenge of solving these problems is selecting and drawing only the diagrams you need. In any event, a clear decision must always be made about what is part of the free body and what is not.  When we separate one body from another loads will appear on both bodies which act to constrain them as they were constrained before the separation. These forces and moments must be represented on the free-body diagrams consistently as halves of equal-and-opposite action-reaction pairs.  For this discussion, we will progressively exclude parts from the original structure and draw the free-body diagram of what remains. In so doing we will clarify the difference between internal and external forces, recognize and take advantage of two-force bodies, and provide some tips for drawing correct free-body diagrams. In an actual situation, you will not need to draw all these diagrams, instead, you should think through the situation and draw only the diagrams you will need for a solution.  It is helpful to consider which loads are known and which are unknown as you prepare free-body diagrams. In planar problems, a free-body diagram with three or fewer unknowns may be solved immediately. When there are more than three unknowns, you must incorporate information from other diagrams to complete the solution.   Exclude the floor  To begin, we can remove the floor from the system. Everything except the floor is now included as our body; only the floor is excluded. The floor was in contact with the wooden block and connected to the wall.  Since we don't know how the wall and the floor are connected we will assume a rigid, fixed connection. We also have to model how the wall is attached to the rest of the world. The fixed support from wall-to-world and wall-to-floor can be combined to be a single set of three loads which we represent as horizontal and vertical forces and , and a concentrated moment .    Free-body Diagram 1    The toggle clamp is shown separated from the floor, with the external force applied to the handle, and the reaction force of the floor on the base of the assembly.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link , Wooden Block, Roller , Wall, Bearing    Floor       The effect of the floor on the block is represented by a single vertical force which holds the block the same way the floor was previously supporting it; the loads you add must constrain your object the same way they were constrained in the real world. This representation is a simplification of the actual situation since the force of the floor is distributed over the bottom surface of the block; however, this simplification is justified in much the same way as we represent the weight of an object as a single force acting at its center of gravity.   Tips    Include friction if it's given or obvious.  Internal forces in rigid bodies should be modeled as a fixed support.  If you need info that you don't have, select a variable to act as its name.       Exclude the wall  If you next remove the wall, forces and remain from before, but we now expose four loads from where the wall was connected to what is now our body; a normal force at the roller and three loads from the fixed support between the bearing block and the wall , , and .   Free-body diagram 2    Toggle clamp assembly is now separated from the wall, with external forces from the wall shown acting on the assembly.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link , Wooden Block, Roller , Bearing    Floor, Wall       Note that the reactions between the wall and the floor are no longer included in the free-body diagram because they are both on the same side of the included-excluded table. Only loads that cross from included to excluded produce a load on the free-body diagram.   Tips    Every force needs a point of application and a clear arrowhead.  Indicate any distances and angles needed and not available on the original diagram.  Define the direction of forces that are not vertical or horizontal with an angle from a reference direction.  Define a coordinate system unless you are using the standard - axes.  Do not add forces that don't act on your body.       Exclude the bearing at  We are not interested in the loads between the bearing block and the wall , , and and further, the free-body diagram still includes too many unknowns to solve.  After removing the bearing we reduce the unknowns at to two because the bearing block and the lever are connected with a pin while the bearing block and wall were connected with a fixed support. The loads , , and and , , and are not included on this free-body diagram because they don't act on this object.   Free-body diagram 3    The bearing is removed since it has equal and opposite forces on the top member.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link , Wooden Block, Roller ,    Floor, Wall, Bearing       The load from the short link at does not appear on this free-body diagram because it is internal. Internal loads connect two parts of the body together. They should not be included in the free-body diagram because they always occur in equal and opposite pairs which cancel each other out.   Tips    Look for free-body diagrams that include only three unknowns in two dimensions or six unknowns in three.  Don't include internal loads on your free-body diagrams.       Examine the wooden block   Free-body diagram 4 (block)    FBD of the block at the base of the clamp.   Anna Howard  CC-BY-SA     A free-body diagram of the block shows the clamping force Q, which we are seeking.  Note that . These forces are given different names since they may have different magnitudes. If the weight of the block is small (less than about 0.1%) in comparison to the other forces acting on the object it may be neglected, in which case and they could be given the same name.      Tips    If the two forces are not the same don't identify them by the same name.  Make as few assumptions as you possibly can. Make a note of any assumptions you make.  In textbook problems, if the weight of an object is not mentioned it may be neglected.       Exclude the wooden block  We can further simplify the diagram by removing the wooden block, leaving only the roller, short link and lever.   Free-body diagram 5 (lever and link)    FBD of the toggle clamp with wooden block removed.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link , Roller    Floor, Wall, Bearing , Wooden Block         Examine the short link  The short link is a two-force body and as discussed in can only be in equilibrium if the forces at and are equal-and-opposite and act along a line passing through these two points. This means that the 24:7 slope of the link determines the direction of force .   Free-body diagram 6 (short link)    The short link of toggle clamp (a two-force member).   Anna Howard  CC-BY-SA    When drawing free-body diagrams, forces with known directions should be drawn pointing in that direction rather than breaking them into components, otherwise, you may lose track of the fact that the and components are not independent but are actually related by the direction of the force.    Here we have assumed that the forces acting on the link are compressive. If the equilibrium equations produce a positive value for our assumption is proved correct, while a negative result indicates that we were wrong and the link is actually in tension.   Tips    A short-link is a two-force body.  Recognize two-force bodies because they give you information about direction.  Represent the force of a two-force body as a force with unknown magnitude acting along a known line of action, not as and components.  If you don't know the sense of a force along its line of action, assume one. If you guess wrong, the analysis will give you a negative value.       Examine the roller at   Free-body diagram 7 (roller)    FBD of the roller.   Anna Howard  CC-BY-SA    Note that the force acting on the roller is shown pointing down and to the left. This is equal and opposite to the force acting on the link at , which points up and to the right. These two must act in opposite directions because they are an action-reaction pair.    The roller is a three-force body, so the lines of action of , , and are coincident and it may be treated as a particle. Equilibrium analysis shows that and must oppose the horizontal and vertical components of force .  The clamping force produced by the toggle clamp appears on this free-body diagram so it will be important later for the solution.   Tips    Recognize three-force bodies and use their special properties to your advantage.  Use the same name for the exposed forces on interacting bodies since they are equal-and-opposite halves of an action-reaction pair.       Exclude the roller  We can further simplify the free-body diagram by removing the roller. The roller and short link are connected with a pin but, for equilibrium, the forces acting on a short link (or any two-force body) must share the same line of action the line connecting its endpoints; otherwise, components perpendicular to this line would produce an unbalanced moment about the other endpoint.   Free-body diagram 8    FBD of toggle clamp without the roller.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link    Floor, Wall, Bearing , Wooden Block, Roller         Exclude the short link  The previous free-body diagram has three unknowns and can be solved but the free-body diagram of the lever by itself is also correct, and this is the free-body diagram that most people begin with.   Free-body diagram 9 (lever)    FBD of the single remaining member of the toggle clamp assembly.   Anna Howard  CC-BY-SA        Included  Excluded     Lever    Floor, Wall, Bearing , Wooden Block, Roller , Short Link       The load acting on the lever in this diagram has the same magnitude, direction, and line of action as the load acting on the short link at , so this can be thought of as sliding a force along its line of action an equivalent transformation.  The following loads are not shown here because they act between two objects that are not part of the body:  the loads between the bearing block and the wall , , and ,  the loads between the floor and the wall , , and ,  the load between the block and the floor , and  the load between the roller and the wall .     All of the free-body diagrams we have drawn are correct, though not all are necessary. Generally, we only draw the free-body diagrams needed for the solution. These diagrams form a chain that connects the known input forces to the desired output forces. When solving frames and machines, think carefully about what you know and what you need to solve for: that determines which free-body diagrams you will need. Taking a few moments to consider what unknowns you'd have at each step can help you optimize your problem-solving effort.  You should recognize that it is possible to draw incorrect free-body diagrams which produce correct results. Consider the diagram below.   Free-body diagram 10 (Subtly incorrect)    A FBD that is incorrect because it does not include the correct reaction at the bottom pin.   Anna Howard  CC-BY-SA    This diagram doesn't accurately represent what is happening at pin .    Forces and do not actually act on the short link at . Force acts between the roller and the wall and clearly this diagram doesn't include the roller. Similarly acts between the block and the roller. These forces don't belong on the free-body diagram even though they are equal to the and components of force . Only forces that cross the imaginary boundary between the object and the rest of the world belong on the free-body diagram.  Students are inclined to argue that this free-body diagram is statically equivalent to and it produces the correct answer so it must be OK. It isn't correct because it reflects a misunderstanding about what you are modeling and what you aren't. Other engineers using your FBDs need to know what you are modeling. The FBD is the key to your analysis of the real world.   Toggle Clamp   Knowing that angle , find the vertical clamping force acting on the piece at and the magnitude of the force exerted on member at pin in terms of force applied to the clamp arm at .          For this problem, we need two free-body diagrams. The first links the input force to the link force and the second links to the clamping force .      FBD I   FBD of the multi-force member of the toggle clam;.   Dan Baker  CC-BY-SA      FBD II   FBD of the roller from the toggle clamp assembly.   Anna Howard  CC-BY-SA       We will assume the two-force member is in compression based on the physical situation. The forces acting on the link, lever and roller are all directed along a line of action defined by a 7-24-25 triangle. Similar triangles give .  Applying at to the free-body diagram of the lever gives in terms of .   The positive sign on the answer reveals that our assumption that member was in compression was correct.  Applying to the free-body diagram of the roller will give in terms of .   While you could certainly find , and using other equilibrium equations they weren't asked for and we don't bother to find them.     Why does the Method of Joints work on trusses but not on Frames or Machines?  We can solve trusses using the methods of joints and method of sections because all members of a simple truss are two-force bodies. Cutting a truss member exposes an internal force that has an unknown scalar magnitude, but a known line of action. The force acts along the axis of the member and causes no bending if the member is straight. Cutting a truss member exposes one unknown.  Frames and machines are made of multi-force members and cutting these, in general, exposes:  A force with an unknown magnitude acting in an unknown direction, and  A bending moment at the plane of the cut.    Cutting a two-dimensional multi-force member exposes three unknowns, and six are exposed for a three-dimensional body. The number of unknowns quickly exceeds the available equations rendering the problem impossible to solve.  Bottom line: use the method of sections and joints only for trusses made of two-force straight members; for all other multi-force rigid body systems draw and analyze free-body diagrams of the components.     "
},
{
  "id": "frames-and-machines-2",
  "level": "2",
  "url": "frames-and-machines.html#frames-and-machines-2",
  "type": "Key Questions",
  "number": "6.6",
  "title": "",
  "body": "  How are frames and machines different from trusses?  Why are the methods of joints and sections not appropriate for frames and machines?  How do we identify if a structure is independently rigid?  How do we apply equilibrium equations to each member of the structure, and ensure that the sense of a force appearing on multiple free-body diagrams is consistent?   "
},
{
  "id": "frames-and-machines-3-2",
  "level": "2",
  "url": "frames-and-machines.html#frames-and-machines-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Frames "
},
{
  "id": "frames-and-machines-3-3",
  "level": "2",
  "url": "frames-and-machines.html#frames-and-machines-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Machines "
},
{
  "id": "stool",
  "level": "2",
  "url": "frames-and-machines.html#stool",
  "type": "Figure",
  "number": "6.6.1",
  "title": "",
  "body": " Frames are rigid objects containing multi-force members.   A kitchen stool is an example of a frame.    BY-SA  Sebastien Rivory    "
},
{
  "id": "vice-grips-photo",
  "level": "2",
  "url": "frames-and-machines.html#vice-grips-photo",
  "type": "Figure",
  "number": "6.6.2",
  "title": "",
  "body": " Machines contain multi-force members that can move relative to one another.   A set of locking pliers is an example of a machine.    CC-BY-SA    "
},
{
  "id": "frame-example-fbd",
  "level": "2",
  "url": "frames-and-machines.html#frame-example-fbd",
  "type": "Figure",
  "number": "6.6.3",
  "title": "",
  "body": " Free-body diagram of a rigid frame with pin at , roller at , and load at .   A frame of three members shaped like the capital letter A. Pin A is bottom left, and continuing clockwise are pins B, C, D and E.   William Haynes  CC-BY-SA    "
},
{
  "id": "frame-example-exploded",
  "level": "2",
  "url": "frames-and-machines.html#frame-example-exploded",
  "type": "Figure",
  "number": "6.6.4",
  "title": "",
  "body": " Free body diagrams of the individual components. External forces are in red, and exposed action-reaction pairs are in blue.   Members of the frame are shown separately. Separated pin connections are shown with equal and opposite forces acting on the previously connected members.   William Haynes  CC-BY-SA    "
},
{
  "id": "toggle-clamp-01",
  "level": "2",
  "url": "frames-and-machines.html#toggle-clamp-01",
  "type": "Figure",
  "number": "6.6.5",
  "title": "",
  "body": " Original diagram   Illustrated image of a toggle clamp.   Anna Howard  CC-BY-SA    "
},
{
  "id": "toggle-clamp-02",
  "level": "2",
  "url": "frames-and-machines.html#toggle-clamp-02",
  "type": "Figure",
  "number": "6.6.6",
  "title": "",
  "body": " Component parts.   Component parts are shown as separated from each other.   Dan Baker  CC-BY-SA    "
},
{
  "id": "toggle-clamp-03",
  "level": "2",
  "url": "frames-and-machines.html#toggle-clamp-03",
  "type": "Figure",
  "number": "6.6.7",
  "title": "",
  "body": " Free-body Diagram 1    The toggle clamp is shown separated from the floor, with the external force applied to the handle, and the reaction force of the floor on the base of the assembly.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link , Wooden Block, Roller , Wall, Bearing    Floor      "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-11-3",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-11-3",
  "type": "Figure",
  "number": "6.6.8",
  "title": "",
  "body": " Free-body diagram 2    Toggle clamp assembly is now separated from the wall, with external forces from the wall shown acting on the assembly.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link , Wooden Block, Roller , Bearing    Floor, Wall      "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-12-4",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-12-4",
  "type": "Figure",
  "number": "6.6.9",
  "title": "",
  "body": " Free-body diagram 3    The bearing is removed since it has equal and opposite forces on the top member.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link , Wooden Block, Roller ,    Floor, Wall, Bearing      "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-13-2",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-13-2",
  "type": "Figure",
  "number": "6.6.10",
  "title": "",
  "body": " Free-body diagram 4 (block)    FBD of the block at the base of the clamp.   Anna Howard  CC-BY-SA     A free-body diagram of the block shows the clamping force Q, which we are seeking.  Note that . These forces are given different names since they may have different magnitudes. If the weight of the block is small (less than about 0.1%) in comparison to the other forces acting on the object it may be neglected, in which case and they could be given the same name.    "
},
{
  "id": "toggle-clamp-06",
  "level": "2",
  "url": "frames-and-machines.html#toggle-clamp-06",
  "type": "Figure",
  "number": "6.6.11",
  "title": "",
  "body": " Free-body diagram 5 (lever and link)    FBD of the toggle clamp with wooden block removed.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link , Roller    Floor, Wall, Bearing , Wooden Block      "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-15-3",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-15-3",
  "type": "Figure",
  "number": "6.6.12",
  "title": "",
  "body": " Free-body diagram 6 (short link)    The short link of toggle clamp (a two-force member).   Anna Howard  CC-BY-SA    When drawing free-body diagrams, forces with known directions should be drawn pointing in that direction rather than breaking them into components, otherwise, you may lose track of the fact that the and components are not independent but are actually related by the direction of the force.   "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-16-2",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-16-2",
  "type": "Figure",
  "number": "6.6.13",
  "title": "",
  "body": " Free-body diagram 7 (roller)    FBD of the roller.   Anna Howard  CC-BY-SA    Note that the force acting on the roller is shown pointing down and to the left. This is equal and opposite to the force acting on the link at , which points up and to the right. These two must act in opposite directions because they are an action-reaction pair.   "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-17-3",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-17-3",
  "type": "Figure",
  "number": "6.6.14",
  "title": "",
  "body": " Free-body diagram 8    FBD of toggle clamp without the roller.   Anna Howard  CC-BY-SA        Included  Excluded     Lever , Short Link    Floor, Wall, Bearing , Wooden Block, Roller      "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-18-3",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-18-3",
  "type": "Figure",
  "number": "6.6.15",
  "title": "",
  "body": " Free-body diagram 9 (lever)    FBD of the single remaining member of the toggle clamp assembly.   Anna Howard  CC-BY-SA        Included  Excluded     Lever    Floor, Wall, Bearing , Wooden Block, Roller , Short Link      "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-21",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-21",
  "type": "Figure",
  "number": "6.6.16",
  "title": "",
  "body": " Free-body diagram 10 (Subtly incorrect)    A FBD that is incorrect because it does not include the correct reaction at the bottom pin.   Anna Howard  CC-BY-SA    This diagram doesn't accurately represent what is happening at pin .   "
},
{
  "id": "Chapter_06-example-toggle-clamp",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-example-toggle-clamp",
  "type": "Example",
  "number": "6.6.17",
  "title": "Toggle Clamp.",
  "body": " Toggle Clamp   Knowing that angle , find the vertical clamping force acting on the piece at and the magnitude of the force exerted on member at pin in terms of force applied to the clamp arm at .          For this problem, we need two free-body diagrams. The first links the input force to the link force and the second links to the clamping force .      FBD I   FBD of the multi-force member of the toggle clam;.   Dan Baker  CC-BY-SA      FBD II   FBD of the roller from the toggle clamp assembly.   Anna Howard  CC-BY-SA       We will assume the two-force member is in compression based on the physical situation. The forces acting on the link, lever and roller are all directed along a line of action defined by a 7-24-25 triangle. Similar triangles give .  Applying at to the free-body diagram of the lever gives in terms of .   The positive sign on the answer reveals that our assumption that member was in compression was correct.  Applying to the free-body diagram of the roller will give in terms of .   While you could certainly find , and using other equilibrium equations they weren't asked for and we don't bother to find them.   "
},
{
  "id": "Chapter_06-free-body-diagram-of-structures-25",
  "level": "2",
  "url": "frames-and-machines.html#Chapter_06-free-body-diagram-of-structures-25",
  "type": "Thinking Deeper",
  "number": "6.6.19",
  "title": "Why does the Method of Joints work on trusses but not on Frames or Machines?",
  "body": " Why does the Method of Joints work on trusses but not on Frames or Machines?  We can solve trusses using the methods of joints and method of sections because all members of a simple truss are two-force bodies. Cutting a truss member exposes an internal force that has an unknown scalar magnitude, but a known line of action. The force acts along the axis of the member and causes no bending if the member is straight. Cutting a truss member exposes one unknown.  Frames and machines are made of multi-force members and cutting these, in general, exposes:  A force with an unknown magnitude acting in an unknown direction, and  A bending moment at the plane of the cut.    Cutting a two-dimensional multi-force member exposes three unknowns, and six are exposed for a three-dimensional body. The number of unknowns quickly exceeds the available equations rendering the problem impossible to solve.  Bottom line: use the method of sections and joints only for trusses made of two-force straight members; for all other multi-force rigid body systems draw and analyze free-body diagrams of the components.  "
},
{
  "id": "Chapter_06-summary",
  "level": "1",
  "url": "Chapter_06-summary.html",
  "type": "Section",
  "number": "6.7",
  "title": "Summary",
  "body": " Summary  The various equilibrium topics we have covered and the associated problem-solving techniques are summarized below.  You should be able to recognize these situations, draw the associated free-body diagrams and solve for the unknowns of each case.   Particle Equilibrium  An object may be treated as a particle when the forces acting on it are coincident, that is, all of their lines of action intersect at a common point. In this case, they produce no moment to rotate the object, and is not helpful. The applicable equation is , which produces two scalar equations in two dimensions and three scalar equations in three dimensions.    Rigid Body Equilibrium  A rigid body can rotate and translate so both force and moment equilibrium must be considered.   In two dimensions, these equations produce two scalar force equations and one scalar moment equation. Up to three unknowns can be determined.  In three dimension, they produce three scalar force equations and three scalar moment equations. Up to six unknowns can be determined.    Trusses  A truss is a structure that consists entirely of two-force members and only carries forces at the joints connecting members. Two-force members and loading at joints allow free-body diagrams of the joints to expose the axial loads in members.  In addition to the equations provided by treating the entire truss as a rigid body, each joint provides two additional equations for two-dimensional trusses, and three for non-planar trusses.    Frames and Machines  Frames and machines are structures that contain multiple rigid body systems. Frames don't move and are designed to support loads. Machines are generally designed to multiply forces and usually have moving parts. Both frames and machines can be solved using the same methods.  All interactions between bodies are equal and opposite action-reaction pairs.  When solving frames and machines  Two-force members provide one useful equilibrium equation and can determine one unknown.  In two dimensions, rigid bodies result in two scalar force equations and one scalar moment equation. Up to three unknowns can be determined.  In three dimensions, rigid bodies produce three scalar force equations and scalar three moment equations. Up to six unknowns can be determined.     "
},
{
  "id": "Chapter_06-10",
  "level": "1",
  "url": "Chapter_06-10.html",
  "type": "Exercises",
  "number": "6.8",
  "title": "Exercises (Ch. 6)",
  "body": " Exercises (Ch. 6)   "
},
{
  "id": "weghted-average",
  "level": "1",
  "url": "weghted-average.html",
  "type": "Section",
  "number": "7.1",
  "title": "Weighted Averages",
  "body": " Weighted Averages  You certainly know how to find the average of several numbers by adding them up and dividing by the number of values, so for example the average of the first four positive integers is  More formally, if is a set with elements then the average, or mean, value is . This average is also called the arithmetic mean . When calculating an arithmetic mean, each number is equally important when evaluating the average. The overbar symbol is often used to indicate that a quantity is a mean value.  In situations where some values are more important than others, we use a weighted average . A familiar example is your grade point average. Your GPA is calculated by weighting your grade for each class by the credits for that class, then dividing by the total credits you have taken. The credit values are called the weighting factors .  In general terms a weighted average is Where are the values we are averaging and are the corresponding weighting factors. The weighting factors may be different for each item being averaged, so is the weighting factor for value . In this book we will not write the limits on the sums, and understand that the intent is always to sum over all the values. Notice that if the weighting factors are all identical, they can be factored out of the sums so the weighted average and the arithmetic mean will be the same.  Weighted averaging is used to find centroids, centers of gravity and centers of mass, the subject of this chapter. All three are points located at the center the object, but the meaning of center depends on the weighting factors. Area or volume are the factors used for centroids, weight for center of gravity, and mass for center of mass.   Course Grades   The mechanics syllabus says that there are two exams worth 25% each, homework is 10%, and the final is worth 40%. You have a 40 on the first exam, a 80 on the second exam, and your homework grade is 90.  What do you have to earn on the final exam to get a 70 in the class?    You need a 77.5 on the final to get a 70 for the class.    Your known grades and the weighting factors are   Find final exam score so that your average grade is 70%. .    "
},
{
  "id": "weghted-average-3",
  "level": "2",
  "url": "weghted-average.html#weghted-average-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arithmetic mean "
},
{
  "id": "weghted-average-4",
  "level": "2",
  "url": "weghted-average.html#weghted-average-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weighted average weighting factors "
},
{
  "id": "Chapter_07-example-course-grades",
  "level": "2",
  "url": "weghted-average.html#Chapter_07-example-course-grades",
  "type": "Example",
  "number": "7.1.1",
  "title": "Course Grades.",
  "body": " Course Grades   The mechanics syllabus says that there are two exams worth 25% each, homework is 10%, and the final is worth 40%. You have a 40 on the first exam, a 80 on the second exam, and your homework grade is 90.  What do you have to earn on the final exam to get a 70 in the class?    You need a 77.5 on the final to get a 70 for the class.    Your known grades and the weighting factors are   Find final exam score so that your average grade is 70%. .   "
},
{
  "id": "Chapter_07-center-of-gravity",
  "level": "1",
  "url": "Chapter_07-center-of-gravity.html",
  "type": "Section",
  "number": "7.2",
  "title": "Center of Gravity",
  "body": " Center of Gravity  So far in this book we have always taken the weight of an object to act at a point at its center. This is the center of gravity : the point where all of an object's weight may be concentrated and still have the same external effect on the body. In this chapter we will learn to actually locate this point.    We will indicate the center of gravity with a circle with black and white quadrants, and call its coordinates or . This point represents the average location of all the particles which make up the body.    The center of gravity of a body is fixed with respect to the body, but the coordinates depend on the choice of coordinate system. For example, in the center of gravity of the block is at its geometric center meaning that and are positive, but if the block is moved to the left of the axis, or the coordinate system is translated to the right of the block, would then become negative.   Location of the centroid, measured from the origin.   Square shape shown on x-y plane in Quadrant I. x-bar is distance of centroid from y axis, and y-bar is distance of centroid from x-axis.     Lets explore the center of gravity of a familiar object. Take a pencil and try to balance it on your finger. How do you decide where to place it? You likely supported it roughly in the middle, then adjusted it until it balanced. You found the point where the moments of the weights on either side of your finger were in equilibrium.  Let's develop this balanced moment idea mathematically.  Assume that the two halves of the pencil have known weights acting at points 1 and 2. How could we replace the two weights with a single statically equivalent force? Recall from that statically equivalent systems produce the same external effect on the object the net force on the object, and the net moment about any point don't change. An upward force at this point will support the pencil without tipping.  To be equivalent, the total weight must equal the total weight of the parts. . Common sense also tells us that will act somewhere between and .    (top) Side view of a pencil representing each half as a particle. (middle) A force diagram showing the weights of the two particles. (bottom) An equivalent system consisting of a single weight acting at the pencil's center of gravity.           A pen with split into two parts with two centers of gravity. The distances from the tip of the pen to the CG are x1 and x2. Lastly, an equivalent system consisting of a single weight acting at the pencil's center of gravity x-bar.   Dan Baker  CC-BY-SA       Next, let's do the mathematical equivalent of sliding your finger back and forth until a balance point is located. Pick any point to be the origin, then calculate the total moment about due to the two weights.  The sum of moments around point can be written as:   Notice that the moment of both forces are clockwise around point , so the signs are negative according to the right-hand rule. We want a single equivalent force acting at the (unknown) center of gravity. Call the distance from the origin to the center of gravity .  represents the mean distance of the weight, mass, or area depending on the context of the problem. We are evaluating weights in this problem, so represents the distance from to the center of gravity.  The sum of moments around point for the equivalent system can be written as:  The moment of total weight is also clockwise around point , so the sign of moment will also be negative according to the right-hand rule. Since the two representation are equivalent we can equate them and solve for .    This result is exactly in the form of where the value being averaged is distance and the weighting factor is the weight of part and the result is the mean distance .  The pencil was made up of two halves, but this equation can easily be extended discrete parts. The resulting general definition of the centroidal coordinate is: where:   is the weight of part ,    is the coordinate of the center of gravity of element , and    is understood to mean sum all parts so there is no need to write .     The numerator is the first moment of force which is literally a moment of force as we defined it in . The denominator is the sum of the weights of the pieces, which is the weight of the whole object. We will soon also see first moments of mass and first moments of area and in , we will introduce second moments , which are the integral of some quantity like area, multiplied by a distance squared .  We treated the pencil as a one-dimensional object, so this discussion focused on . There are similar formula for the other dimensions as well .   In words, these equations say  They apply to any object which can be divided into discrete parts, and they produce the coordinates of the object's center of gravity.    Can you explain why the center of gravity of a symmetrical object will always fall on the axis of symmetry?    If the object is symmetrical, every subpart on the positive side of the axis of symmetry will be balanced by an identical part on the negative side. The first moment for the entire shape about the axis will sum to zero, meaning that . In other words, the distance from the axis of symmetry of the shape to the centroid is zero.     Simple Center of Gravity   Three boxes are distributed along the axis as shown.      Find the distance from the origin to the center of gravity of the system.    How would the center of gravity change if the origin was moved to the right-hand box?            The center of gravity does not change, however when measured from the new origin, .      The center of gravity of the system is the point where the total weight can be considered to act.  The total weight is , and it acts at the point where it produces the same total moment as the individual weights. In other words, it is an equivalent system . The moment comparison may be taken about any point, so for convenience we choose the origin.  Let represent the -coordinates of the individual weights, and represent the -coordinate of the center of gravity. For both systems to be equivalent:   If the origin was moved to the right-hand box, the center of gravity would not change; however, the coordinate of the center of gravity would be different. The distance to the center of gravity from the new origin would be:    "
},
{
  "id": "Chapter_07-center-of-gravity-2",
  "level": "2",
  "url": "Chapter_07-center-of-gravity.html#Chapter_07-center-of-gravity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "center of gravity "
},
{
  "id": "centroid_def",
  "level": "2",
  "url": "Chapter_07-center-of-gravity.html#centroid_def",
  "type": "Figure",
  "number": "7.2.1",
  "title": "",
  "body": " Location of the centroid, measured from the origin.   Square shape shown on x-y plane in Quadrant I. x-bar is distance of centroid from y axis, and y-bar is distance of centroid from x-axis.   "
},
{
  "id": "pen1",
  "level": "2",
  "url": "Chapter_07-center-of-gravity.html#pen1",
  "type": "Figure",
  "number": "7.2.2",
  "title": "",
  "body": " (top) Side view of a pencil representing each half as a particle. (middle) A force diagram showing the weights of the two particles. (bottom) An equivalent system consisting of a single weight acting at the pencil's center of gravity.           A pen with split into two parts with two centers of gravity. The distances from the tip of the pen to the CG are x1 and x2. Lastly, an equivalent system consisting of a single weight acting at the pencil's center of gravity x-bar.   Dan Baker  CC-BY-SA      "
},
{
  "id": "Chapter_07-center-of-gravity-21",
  "level": "2",
  "url": "Chapter_07-center-of-gravity.html#Chapter_07-center-of-gravity-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first moment second moments "
},
{
  "id": "Chapter_07-center-of-gravity-26",
  "level": "2",
  "url": "Chapter_07-center-of-gravity.html#Chapter_07-center-of-gravity-26",
  "type": "Question",
  "number": "7.2.3",
  "title": "",
  "body": "  Can you explain why the center of gravity of a symmetrical object will always fall on the axis of symmetry?    If the object is symmetrical, every subpart on the positive side of the axis of symmetry will be balanced by an identical part on the negative side. The first moment for the entire shape about the axis will sum to zero, meaning that . In other words, the distance from the axis of symmetry of the shape to the centroid is zero.   "
},
{
  "id": "Chapter_07-example-simple-center-of-gravity",
  "level": "2",
  "url": "Chapter_07-center-of-gravity.html#Chapter_07-example-simple-center-of-gravity",
  "type": "Example",
  "number": "7.2.4",
  "title": "Simple Center of Gravity.",
  "body": " Simple Center of Gravity   Three boxes are distributed along the axis as shown.      Find the distance from the origin to the center of gravity of the system.    How would the center of gravity change if the origin was moved to the right-hand box?            The center of gravity does not change, however when measured from the new origin, .      The center of gravity of the system is the point where the total weight can be considered to act.  The total weight is , and it acts at the point where it produces the same total moment as the individual weights. In other words, it is an equivalent system . The moment comparison may be taken about any point, so for convenience we choose the origin.  Let represent the -coordinates of the individual weights, and represent the -coordinate of the center of gravity. For both systems to be equivalent:   If the origin was moved to the right-hand box, the center of gravity would not change; however, the coordinate of the center of gravity would be different. The distance to the center of gravity from the new origin would be:   "
},
{
  "id": "Chapter_07-center-of-mass",
  "level": "1",
  "url": "Chapter_07-center-of-mass.html",
  "type": "Section",
  "number": "7.3",
  "title": "Center of Mass",
  "body": " Center of Mass  The center of mass is the mean location of the mass of an object, and is related to the center of gravity by Newton's Second Law because , where is the local strength of the gravitational field. In this course you may take in the SI system, or in the US customary system as reasonable approximations for objects on the surface of the earth.  Substituting in gives the equations for the center of mass. .  By our assumption that is constant on the surface of the earth, can be factored out of the sums and drops out of the equation completely. .  These equations give the coordinates of the center of mass. The numerator contains the first moment of mass , and the denominator contains the total mass of the object. As long as the assumption that is constant is valid, the center of mass and the center of gravity are identical points and the two terms may be used interchangeably.  "
},
{
  "id": "Chapter_07-center-of-mass-2",
  "level": "2",
  "url": "Chapter_07-center-of-mass.html#Chapter_07-center-of-mass-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "center of mass "
},
{
  "id": "Chapter_07-center-of-mass-5",
  "level": "2",
  "url": "Chapter_07-center-of-mass.html#Chapter_07-center-of-mass-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first moment of mass "
},
{
  "id": "Chapter_07-centroids",
  "level": "1",
  "url": "Chapter_07-centroids.html",
  "type": "Section",
  "number": "7.4",
  "title": "Centroids",
  "body": " Centroids    What is the difference between a centroid, center of gravity and a center of mass?  When will the centroid, center of gravity and center of mass refer to the same point?  Why do the equations for the center of gravity, mass, volume, and area all have the same structure?     A centroid is a weighted average like the center of gravity, but weighted with a geometric property like area or volume, and not a physical property like weight or mass. This means that centroids are properties of pure shapes, not physical objects. They represent the coordinates of the middle of the shape.  The defining equations for centroids are similar to the equations for Centers of Gravity but with volume used as the weighting factor for three-dimensional shapes , and area for two-dimensional shapes .  We will see how to use these equations on complex shapes later in this chapter, but centroids of some simple shapes can be easily found using symmetry.  If the shape has an axis of symmetry, every point on one side of the axis is mirrored by another point equidistant on the other side. One has a positive distance from the axis, and the other is the same distance away in the negative direction. These two points will add to zero the numerator, as will every other point making up the shape, and the first moment will be zero. This means that the centroid must lie along the line of symmetry if there is one. If a shape has multiple symmetry lines, then the centroid must exist at their intersection.   Centroids lie upon axes of symmetry.   A triangle, a half circle, and a rectangle with lines of symmetry shown.    Since rectangles, circles, cubes, spheres, have multiple lines of symmetry, their centroids must be exactly in the center as we would expect.      What are the coordinates of the centroid of the I beam section shown?   Symmetrical I-beam shown with width of the flange 7 cm, height of 7 cm, width of the beam and height of flanges of 1 cm.         The cross section is symmetrical about both a vertical and horizontal centerline. The centroid is at the intersection, in the middle. The coordinates are measured from the origin, in the bottom left of the diagram.      Properties of Common Shapes  We will learn how to find centroids of other shapes in using integration, but in the mean time several common shapes are recorded in the table below. This information in this table will be needed in the next section.    Centroids of Common Shapes         Shape    Area              A rectangle with width of b and height of h, centroid at (x-bar,y-bar).                 A right triangle with right angle at the origin. Width of b and height of h, centroid at (x-bar,y-bar).                 A trapezoid with bottom width of b, top width of a, and height of h, centroid at (x-bar,y-bar).                 A circle with radius of r, centroid at (x-bar,y-bar)=(r,r).                 A semicircle with radius of r, centroid at (x-bar,y-bar)=(r,4r\/(3*pi)).            See for proof.         A quarter circle with radius of r. The center of curvature is at the origin. Centroid at (x-bar,y-bar)=(4r\/(3*pi),4r\/(3*pi)).            In this table, all centroids are measured from the indicated origin. You must make the appropriate adjustments when the origin of your coordinate system is located elsewhere.     Relations between Centroids and Center of Gravity  The equations we have been discussing , , and are all variations on the general weighted average formula .  Here represents the distance in one of the coordinate directions such as , is the mean distance in the direction to the middle of the whole object, and is the weighting factor. The only difference between them is the choice of weighting factor. For center of gravity, the weighting factor is the weight, for center of mass, it is the mass, for three dimensional centroids it is the volume, and for two dimensional centroids it is area.    To understand how these equations relate to one another consider a plate with a cross-sectional area , divided into pieces with volume .  The weight of part is the product of its specific weight and volume.    Plate with variable thickness , divided into many volume elements .   Plate with variable thickness t.   William Haynes  CC-BY-SA      In the most general case, all of these terms might depend on the position of the part, but if any are constant they can be factored out and simplify the formulas.  For a homogeneous flat plate with uniform thickness, like a piece of plywood, the density, thickness and are all constant so .  The two dimensional centroid equations are sufficient to find the center of gravity of a three dimensional object.   "
},
{
  "id": "Chapter_07-centroids-2",
  "level": "2",
  "url": "Chapter_07-centroids.html#Chapter_07-centroids-2",
  "type": "Key Questions",
  "number": "7.4",
  "title": "",
  "body": "  What is the difference between a centroid, center of gravity and a center of mass?  When will the centroid, center of gravity and center of mass refer to the same point?  Why do the equations for the center of gravity, mass, volume, and area all have the same structure?   "
},
{
  "id": "Chapter_07-centroids-3-5",
  "level": "2",
  "url": "Chapter_07-centroids.html#Chapter_07-centroids-3-5",
  "type": "Figure",
  "number": "7.4.1",
  "title": "",
  "body": " Centroids lie upon axes of symmetry.   A triangle, a half circle, and a rectangle with lines of symmetry shown.   "
},
{
  "id": "Chapter_07-centroids-3-7",
  "level": "2",
  "url": "Chapter_07-centroids.html#Chapter_07-centroids-3-7",
  "type": "Question",
  "number": "7.4.2",
  "title": "",
  "body": "   What are the coordinates of the centroid of the I beam section shown?   Symmetrical I-beam shown with width of the flange 7 cm, height of 7 cm, width of the beam and height of flanges of 1 cm.         The cross section is symmetrical about both a vertical and horizontal centerline. The centroid is at the intersection, in the middle. The coordinates are measured from the origin, in the bottom left of the diagram.   "
},
{
  "id": "centroid-table-3",
  "level": "2",
  "url": "Chapter_07-centroids.html#centroid-table-3",
  "type": "Table",
  "number": "7.4.3",
  "title": "Centroids of Common Shapes",
  "body": " Centroids of Common Shapes         Shape    Area              A rectangle with width of b and height of h, centroid at (x-bar,y-bar).                 A right triangle with right angle at the origin. Width of b and height of h, centroid at (x-bar,y-bar).                 A trapezoid with bottom width of b, top width of a, and height of h, centroid at (x-bar,y-bar).                 A circle with radius of r, centroid at (x-bar,y-bar)=(r,r).                 A semicircle with radius of r, centroid at (x-bar,y-bar)=(r,4r\/(3*pi)).            See for proof.         A quarter circle with radius of r. The center of curvature is at the origin. Centroid at (x-bar,y-bar)=(4r\/(3*pi),4r\/(3*pi)).          "
},
{
  "id": "centroid-table-4",
  "level": "2",
  "url": "Chapter_07-centroids.html#centroid-table-4",
  "type": "Note",
  "number": "7.4.4",
  "title": "",
  "body": " In this table, all centroids are measured from the indicated origin. You must make the appropriate adjustments when the origin of your coordinate system is located elsewhere.  "
},
{
  "id": "flat-plate",
  "level": "2",
  "url": "Chapter_07-centroids.html#flat-plate",
  "type": "Figure",
  "number": "7.4.5",
  "title": "",
  "body": " Plate with variable thickness , divided into many volume elements .   Plate with variable thickness t.   William Haynes  CC-BY-SA    "
},
{
  "id": "composite-parts",
  "level": "1",
  "url": "composite-parts.html",
  "type": "Section",
  "number": "7.5",
  "title": "Centroids using Composite Parts",
  "body": " Centroids using Composite Parts    How do you calculate the center of gravity of a system of separate objects?  Where do the equations for the shapes in areas and centroids table come from?  When finding the centroid, what do you do with a cut-out area of a composite part?  Does it matter whether a distance to the centroid of a part is positive or negative from the axis system?     In this section we will discuss how to find centroids of two-dimensional shapes by first dividing them into pieces with known properties, and then combining the pieces to find the centroid of the original shape. This method will work when the geometric properties of all the sub-shapes are known or can be easily determined. If the shape can't be decomposed this way, perhaps because it has a curved boundary, you will need to use integration to find the centroid. Integration will be covered in .  For convenience, the properties of several common shapes can be found here .    Composite Parts Method  The equations we will use for this approach are where,   , and are the coordinates of the centroid of the entire shape.    is the area of composite part .    , and are the coordinates of the centroid of composite part .       The steps to finding a centroid using the composite parts method are:  Break the overall shape into simpler parts.  Collect the areas and centroid coordinates, and  Apply to combine to find the coordinates of the centroid of the original shape.     As a simple example, consider the L-shaped area shown, which has been divided into two rectangles. The areas of the rectangles are The origin is located at the lower left, so the coordinates of the centroids of the two rectangles are   L-shaped object comprised of two rectangles. Bottom is 7 in wide, 2 in tall. The vertical part is 6 in tall and 3 in wide.    The centroid of the whole shape is found by applying    For more complex shapes, the usual practice is to set up a table to organize the information needed to calculate the centroid, as we will now show. The process can be broken into three steps.     Break the overall shape into simpler parts  We begin with a sketch of the shape and establish a coordinate system. It is critical that all measurements are made from a common origin, and the results will be measured from this origin as well. A careful choice of origin can simplify the problem, so give it some thought.  Then divide the shape into several simpler shapes. The sub-shapes may include holes, which are treated as negative areas. You must know how to calculate the area and locate the centroid of any sub-shape you use.  Consider the complex shape below.   A rectangle has its bottom left corner at the origin, and top right at (5, 4). The left side of a right triangle of height 4 cm and width 6 cm is flush with the right side of the rectangle. A circle of r = 1.5 cm is cut out of the rectangle, with it's center at (3, 2).   There are often several ways to divide a shape, but it's best to use as few parts as possible to minimize your computations and opportunities for error. For example, you could choose to break this shape into either a rectangle, a right triangle, and an circular hole,   Rectangle plus triangle minus circle   or a large rectangle, an circular hole, and a right triangle subtracted from the large rectangle.   Rectangle of width 11 cm and height 4 cm minus right triangle with vertices at (5,4) and (11,0) minus circle.   Both options will give the same results, and in this case there is no particular advantage to one choice over the other. However, it would be silly and unnecessary to break this into more than three parts, and it would not be a good idea to divide this into a trapezoid minus a hole, unless you know geometric properties of a trapezoid, which are not available in . Be sure your sub-shapes don't overlap and don't get counted more than once.     Collect the areas and centroid coordinates  Once the complex shape has been divided into parts, the next step is to determine the area and centroidal coordinates for each part. You can use the properties in for rectangles, triangles, circles, semi-circles and quarter circles but you will need to use integration if other shapes are involved. Any holes or removed shapes should be treated as negative areas.  Record the information you gather in a table like the one below. The table should include a row containing column headings and units, one row for each part, and a summary row. The first column identifies the part by number or sketch, the second contains the areas, and the third and fourth contains the centroidal coordinates of the parts.    Part                        1  20  2.5  2  50  40    2  12  7  4\/3  84  16    3  2.25   2  -6.75  -4.5     24.93    112.8  41.86    The last two columns of the table contain the first moments of area and , and are easily filled in by multiplying the values in columns two to four. Be sure to attend to positive and negative signs when multiplying. Note that the moment of area with respect to the axis uses the distance from the axis, which is , and vice-versa.  The final row of the table are total values, calculated by summing the entries for , and , so for example the total area of the shape is Don't sum columns three or four, since and are meaningless.    Combine the pieces to find the overall centroid  After you have filled in the whole table, you can find the coordinates of the centroid by applying with the summary values from the last row.   Finally, plot the centroid on the diagram. If you have made a calculation error it will usually be obvious, because the centroid location won't feel right.     The next interactive shows a composite shape consisting of a large rectangle with a smaller rectangle subtracted. You can change the location and size of the rectangles by moving the red points. Use this to visualize how the centroids of the whole is related to the centroid of the parts. Note that for objects divided into two pieces, the centroid of the whole always falls on the line connecting the centroids of the parts.    Centroid of Composite Rectangles        Centroid of a body consisting of a rectangle, triangle and a circular hole.        Centroids of 3D objects    How do you divide a composite solid into parts and compute the volume\/mass and centroidal distances of each part?  What is the technique to compute the overall center of volume\/mass for a composite solid?    The centroid of a three-dimensional volume is found similarly to two-dimensional centroids, but with volume used instead of area for the weighting factor. The centroid of a volume and the center of mass or gravity for a homogenous solid are identical.   Where,   , , and are the coordinates of the centroid of the overall volume. is the volume of composite part .    , , and is the coordinates of the centroid of composite part .     Many three-dimensional shapes are just prismatic extrusions of the shapes. The volume of a prism is the product of the cross-sectional area and the length of the prism and is easily calculated. For example, the volume of a circular cylinder with radius and length is .  If the density varies for each part of a composite solid, we can find the center of mass by dividing the first moment of mass by the total mass. You can also compute the center of gravity by replacing the mass terms in the equations below with weight terms. Here is the mass of composite part .  You must always use the same weighting factor (area, volume, mass, weight, etc) in both the numerator and denominator of the center of area\/volume\/mass\/weight equations.   3D Center of Mass     A composite solid consists of a rectangular block of lightweight concrete and a triangular wedge of steel with dimensions as shown. The rectangular block has a radius circular hole, centered and drilled through its full depth, perpendicular to the front and back faces.  Assume , and .  Find the center of mass of this composite solid.     Dan Baker                 Part                                        block  216  125  27000  -3  2  4.5  -81000  54000  121500    hole  -50.27  125  -6283  -3  2  6  18850  -12566  -37699    wedge  12  493  5916  -4  4.67  1  -23664  27608  5916       26633     -85814  69042  89717        We have actually found the coordinates of the center of gravity, but since is constant they are also coordinates of the center of mass.     "
},
{
  "id": "composite-parts-2",
  "level": "2",
  "url": "composite-parts.html#composite-parts-2",
  "type": "Key Questions",
  "number": "7.5",
  "title": "",
  "body": "  How do you calculate the center of gravity of a system of separate objects?  Where do the equations for the shapes in areas and centroids table come from?  When finding the centroid, what do you do with a cut-out area of a composite part?  Does it matter whether a distance to the centroid of a part is positive or negative from the axis system?   "
},
{
  "id": "two-rectangles-centroid",
  "level": "2",
  "url": "composite-parts.html#two-rectangles-centroid",
  "type": "Figure",
  "number": "7.5.1",
  "title": "",
  "body": " Centroid of Composite Rectangles    "
},
{
  "id": "trapezoid-with-hole",
  "level": "2",
  "url": "composite-parts.html#trapezoid-with-hole",
  "type": "Figure",
  "number": "7.5.2",
  "title": "",
  "body": " Centroid of a body consisting of a rectangle, triangle and a circular hole.    "
},
{
  "id": "Chapter_07-centroids-of-3d-objects-2",
  "level": "2",
  "url": "composite-parts.html#Chapter_07-centroids-of-3d-objects-2",
  "type": "Key Questions",
  "number": "7.5.2",
  "title": "",
  "body": "  How do you divide a composite solid into parts and compute the volume\/mass and centroidal distances of each part?  What is the technique to compute the overall center of volume\/mass for a composite solid?   "
},
{
  "id": "Chapter_07-example-3d-center-of-mass",
  "level": "2",
  "url": "composite-parts.html#Chapter_07-example-3d-center-of-mass",
  "type": "Example",
  "number": "7.5.3",
  "title": "3D Center of Mass.",
  "body": " 3D Center of Mass     A composite solid consists of a rectangular block of lightweight concrete and a triangular wedge of steel with dimensions as shown. The rectangular block has a radius circular hole, centered and drilled through its full depth, perpendicular to the front and back faces.  Assume , and .  Find the center of mass of this composite solid.     Dan Baker                 Part                                        block  216  125  27000  -3  2  4.5  -81000  54000  121500    hole  -50.27  125  -6283  -3  2  6  18850  -12566  -37699    wedge  12  493  5916  -4  4.67  1  -23664  27608  5916       26633     -85814  69042  89717        We have actually found the coordinates of the center of gravity, but since is constant they are also coordinates of the center of mass.   "
},
{
  "id": "Chapter_07-average-value-of-a-function",
  "level": "1",
  "url": "Chapter_07-average-value-of-a-function.html",
  "type": "Section",
  "number": "7.6",
  "title": "Average Value of a Function",
  "body": " Average Value of a Function  The weighted average technique discussed in are a fine for averaging several discrete values, but what do we do if we need to find the average of an infinite number of values or values which change continuously?  Consider a function over some interval from to . How can we find the average value of the function over that interval? To understand what is meant by the average value of a function, look at the interactive below. There, the function is the red curve, and which you can change if you like. The blue dots and mark the beginning and end of the interval and are also adjustable.  The area under this curve between and is shaded with gray, and we can find it using a definite integral The blue hatched rectangle has the same area as the gray shaded region, and because the areas are the same, the height of the rectangle , is the average value of .   The average value of a function between and .    With this in mind, we can calculate the average value of by equating the area under the curve with the area of the rectangle and solving for .   This is a weighted average like but instead of summing discrete values, we integrate of an infinite number of infinitesimal values. is the value being averaged and the weighting function is .  This approach is true for any choice of weighting function. To find for a two dimensional area, the value to be averaged is and the weighting function is , so replacing with and with ,   In other words, to transform a discrete summation to an equivalent continuous integral form you:   Replace the summation with integration, .    Replace the discrete weighting factor with the corresponding differential element,    Rename the value being averaged to eliminate the index . We often use as a subscript when referring to a differential element.     The two-dimensional centroid equations become, , and in the same way the center of gravity equations become .    How far is it from the earth to the sun?    92,958,412 miles    Siri says that The average distance from the earth to the sun is 92,958,412 miles.  That's a pretty exact answer. What does it mean, exactly? From what point on the earth to what point on the sun?  If the earth and sun were perfect spheres, we could use the distance between their centroids. With more information about shape and density, we could find their centers of mass and measure between those points.  The bigger problem is that this distance changes continuously as the earth revolves around the sun. How can we find an average value for something which is continuously changing?  We need to use the methods described here, integrating the distance as a function of time over the course of a year.       "
},
{
  "id": "function-average",
  "level": "2",
  "url": "Chapter_07-average-value-of-a-function.html#function-average",
  "type": "Figure",
  "number": "7.6.1",
  "title": "",
  "body": " The average value of a function between and .   "
},
{
  "id": "Chapter_07-average-value-of-a-function-11",
  "level": "2",
  "url": "Chapter_07-average-value-of-a-function.html#Chapter_07-average-value-of-a-function-11",
  "type": "Question",
  "number": "7.6.2",
  "title": "",
  "body": "  How far is it from the earth to the sun?    92,958,412 miles    Siri says that The average distance from the earth to the sun is 92,958,412 miles.  That's a pretty exact answer. What does it mean, exactly? From what point on the earth to what point on the sun?  If the earth and sun were perfect spheres, we could use the distance between their centroids. With more information about shape and density, we could find their centers of mass and measure between those points.  The bigger problem is that this distance changes continuously as the earth revolves around the sun. How can we find an average value for something which is continuously changing?  We need to use the methods described here, integrating the distance as a function of time over the course of a year.   "
},
{
  "id": "centroids-by-integration",
  "level": "1",
  "url": "centroids-by-integration.html",
  "type": "Section",
  "number": "7.7",
  "title": "Centroids using Integration",
  "body": " Centroids using Integration    How do you find the centroid of an area using integration?  What is a differential quantity?  Why are double integrals required for square elements and single integrals required for rectangular elements?     In this section we will use the integral form of to find the centroids of non-homogenous objects or shapes with curved boundaries.   With the integral equations we are mathematically breaking up a shape into an infinite number of infinitesimally small pieces and adding them together by integrating. This powerful method is conceptually identical to the discrete sums we introduced first.    Integration Process  Determining the centroid of a area using integration involves finding weighted average values and , by evaluating these three integrals, , where   is a differential bit of area called the element .    is the total area enclosed by the shape, and is found by evaluating the first integral.    and are the coordinates of the centroid of the element . These are frequently functions of or , not constant values.    and are the First moments of Area with respect to the and axis.     The procedure for finding centroids with integration can be broken into three steps:   Set up the integrals  Usually this is the hardest step.  You should always begin by drawing a sketch of the problem and reviewing the given information.  You will need to understand the boundaries of the shape, which may be lines or functions. You may need to know some math facts, like the definition of slope, or the equation of a line or parabola. A bounding function may be given as a function of , but you want it as a function of or vice-versa or it may have a constant which you will need to determine.  You will need to choose an element of area . There are several choices available, including vertical strips, horizontal strips, or square elements; or in polar coordinates, rings, wedges or squares. There really is no right or wrong choice; they will all work, but one may make the integration easier than another. The best choice depends on the nature of the problem, and it takes some experience to predict which it will be.   Differential Elements of Area     Square element   Square differential element of width dx, height dy, located at (x, y).     Vertical strip   Vertical differential element of width dx, height y.     Horizontal strip   Horizontal differential element of width x, height dy.      The two most common choices for differential elements are:   Square elements and double integrals  If you choose an infinitesimal square element , you must integrate twice, over and over between the appropriate integration limits. The position of the element typically designated .    Rectangular elements and single integrals  If you choose rectangular strips you eliminate the need to integrate twice. You may select a vertical element with a different width , and a height extending from the lower to the upper bound, or a horizontal strip with a differential height and a width extending from the left to the right boundaries. Either way, you only integrate once to cover the enclosed area.  When finding the area enclosed by a single function , and the and axes represents a point on the function and for vertical strips, or for horizontal strips.     You must find expressions for the area and centroid of the element in terms of the bounding functions. This is how we turn an integral over an area into a definite integral which can be integrated.  When you have established all these items, you can substitute them into and proceed to the integration step.    Solve the integrals  This step is pure mathematics.  Here are some tips if you are doing integration by hand . Be neat, work carefully, and check your work as you go along. Use proper mathematics notation: don't lose the differential or before the integration step, and don't include it afterwords. Don't forget to use equals signs between steps. Simplify as you go and don't substitute numbers or other constants too soon. Pay attention to units: Area should have units of and the first moments of area and should have units of . If your units aren't consistent, then you have made a mistake.    Evaluate the centroid  After you have evaluated the integrals you will have expressions or values for , , and . All that remains is to substitute these into the defining equations for and and simplify. Notice the goes into the equation, and vice-versa.   Finally, plot the centroid at on your sketch and decide if your answer makes sense for area.      What is ?  is just an area, but an extremely tiny one!  It's an example of an differential quantity also called an infinitesimal . A differential quantity is a value which is as close to zero as it can possibly be without actually being zero. You can think of its value as . Integration is the process of adding up an infinite number of infinitesimal quantities.  Some other differential quantities we will see in statics are , and , which are infinitesimal increments of distance; , which is a differential volume; , a differential weight; , a differential mass, and so on.  Any product involving a differential quantity is itself a differential quantity, so if the area of a vertical strip is given by then, even though height is a real number, the area is a differential because is differential.  If you like, you can pronounce the as the little bit of so reads The little bit of area is the height times a little bit of . and reads The total area is the sum of the little bits of area.     Area of a General Spandrel  In this section we will use the integration process describe above to calculate the area of the general spandrel shown in . A spandrel is the area between a curve and a rectangular frame. This is a general spandrel because the curve is defined by the function , where is not specified. If the function is constant, if then it is a straight line, it's a parabola, . You can change the slider to see the effect of different values of .       A general spandrel of the form    Begin by identifying the bounding functions. From the diagram, we see that the boundaries are the function, the axis and, the vertical line . The function has a constant which has not been specified, but which is not arbitrary. The diagram indicates that the function passes through the origin and point , and there is only one value of which will cause this. We can find by substituting and into the function for and then solving for it.   Next, choose a differential area. For this problem a vertical strip works well. A vertical strip has a width , and extends from the bottom boundary to the top boundary. Any point on the curve is and a point directly below it on the axis is . This means that the height of the strip is and the area of the strip is (base height), so .  The limits on the integral are from on the left to on the right since we are integrating with respect to .  With these details established, the next step is to set up and evaluate the integral . This is the familiar formula from calculus for the area under a curve. Proceeding with the integration   This result is not a number, but a general formula for the area under a curve in terms of , , and . Explore with the interactive, and notice for instance that when , the shape is a rectangle and ; when the shape is a triangle and the ; when the shape is a parabola and etc. This single formula gives the equation for the area under a whole family of curves.   Which is better, horizontal or vertical elements?  Recall that the first moment of area is the distance weighted area as measured from a desired axis. The distance term is the distance from the desired axis to the centroid of each differential element of area, .      If you're using a single integral with a vertical element and the horizontal distance from the axis to the centroid of would simply be     It is also possible to find using a horizontal element but the computations are a bit more challenging. First the equation for changes to .     Additionally, the distance to the centroid of each element, , must measure to the middle of the horizontal element. For this triangle, .  We find a similar contrast to finding the vertical centroidal distance where it is easier to use a element to find than it is to use a element.      The interactive below compares horizontal and vertical strips for a shape bounded by the parabola and the diagonal line . Horizontal strips are a better choice in this case, because the left and right boundaries are easy to express as functions of . If vertical strips are chosen, the parabola must be expressed as two different functions of , and two integrals are needed to cover the area, the first from to , and the second from to .   Function demonstrating good and bad choices of differential elements.       Examples  This section contains several examples of finding centroids by integration, starting with very simple shapes and getting progressively more difficult. All the examples include interactive diagrams to help you visualize the integration process, and to see how is related to or .  The first two examples are a rectangle and a triangle evaluated three different ways: with vertical strips, horizontal strips, and using double integration. The different approaches produce identical results, as you would expect. You should try to decide which method is easiest for a particular situation.   Centroid of a rectangle   Use integration to show that the centroid of a rectangle with a base and a height of is at its center.           This solution demonstrates solving integrals using vertical rectangular strips. Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions in this example are vertical lines and , and horizontal lines and .  The strip extends from on the axis to on the top of the rectangle, and has a differential width .  The area of the strip is the base times the height, so .  The centroid of the strip is located at its midpoint so, by inspection   With vertical strips the variable of integration is , and the limits on run from at the left to on the right. For a rectangle, both 0 and are constants, but in other situations, and the left or right limits may be functions of .    Solve the integrals  Substitute , , and into and integrate.   Unsurprisingly, we learn that the area of a rectangle is base times height. Since the area formula is well known, it was not really necessary to solve the first integral. Note that has units of , and and have units of .    Find the centroid  Substituting the results into the definitions gives .       This solution demonstrates solving integrals using horizontal rectangular strips. Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions , , and .  The strip extends from on the axis to on the right, and has a differential height .  The area of the strip is the base times the height, so .  The centroid of the strip is located at its midpoint so, by inspection   With horizontal strips the variable of integration is , and the limits on run from at the bottom to at the top.  For a rectangle, both 0 and are constants, but in other situations, and the upper or lower limits may be functions of .    Solve the integrals  Substitute , , and into and integrate. The results are the same as we found using vertical strips.     Find the centroid  Substituting the results into the definitions gives .       This solution demonstrates solving integrals using square elements and double integrals. Set the slider on the diagram to to see a representative element.     Set up the integrals  Set the slider on the diagram to to see a representative element.  The bounding functions , , and .  Instead of strips, the integrals will be evaluated using square elements with width and height located at .  The area of the square element is the base times the height, so .  The centroid of the strip is located at its midpoint so, by inspection   We will integrate twice, first with respect to and then with respect to . The limits on the first integral are to and to on the second. For a rectangle, both and are constants. In other situations, the upper or lower limits may be functions of or .    Solve the integrals  Substitute , , and into and integrate the inside integral, then the outside integral. The results are the same as before.     Find the centroid  Substituting the results into the definitions gives .        Centroid of a triangle   Use integration to locate the centroid of a triangle with base and height of oriented as shown in the interactive.           This solution demonstrates finding the centroid of the triangle using vertical strips . Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions in this example are the axis, the vertical line , and the straight line through the origin with a slope of . Using the slope-intercept form of the equation of a line, the upper bounding function is and any point on this line is designated .  The strip extends from on the axis to on the function, has a height of , and a differential width . The area of this strip is .  The centroid of the strip is located at its midpoint so, by inspection   With vertical strips the variable of integration is , and the limits are to .    Solve the integrals  Substitute , , and into and integrate. In contrast to the rectangle example both and are functions of , and will have to be integrated accordingly.   We learn that the area of a triangle is one half base times height. Since the area formula is well known, it would have been more efficient to skip the first integral. Note that has units of , and and have units of .    Find the Centroid  Substituting the results into the definitions gives .       This solution demonstrates solving integrals using horizontal rectangular strips. Set the slider on the diagram to to see a representative element.     Set up the integrals  As before, the triangle is bounded by the axis, the vertical line , and the line .  To integrate using horizontal strips, the function must be inverted to express in terms of . Solving for for gives . The limits on the integral are from to .  The strip extends from to , has a height of , and a length of , therefore the area of this strip is .  The coordinates of the midpoint of the element are .  These expressions are recognized as the average of the and coordinates of strip's endpoints.  A common student mistake is to use , and . These would be correct if you were looking for the properties of the area to the left of the curve.    Solve the integrals  Substitute , , and into the definitions of and and integrate. The results are the same as we found using vertical strips. There in no need to evaluate since we know that for a triangle.   It makes solving these integrals easier if you avoid prematurely substituting in the function for and if you factor out constants whenever possible. Here it was not substituted until the fourth line.    Find the centroid  Substituting the results into the definitions gives .       This solution demonstrates solving integrals using square elements and double integrals. Set the slider on the diagram to or to see a representative element.     Set up the integrals  As before, the triangle is bounded by the axis, the vertical line , and the line .  In this solution the integrals will be evaluated using square differential elements located at .  With double integration, you must take care to evaluate the limits correctly, since the limits on the inside integral are functions of the variable of integration of the outside integral. The inside integral essentially stacks the elements into strips and the outside integral adds all the strips to cover the area.  Choosing to express as means that the integral over will be conducted first. The limits on the inside integral are from to . Then, the limits on the outside integral are from to  Using would reverse the order of integration, so the inside integral's limits would be from to , and the limits on the outside integral would be to . Either choice will give the same results if you don't make any errors!  The area of the square element is the base times the height, so . The centroid of the square is located at its midpoint so, by inspection     Solve the integrals  Substitute , , and into and integrate the inside integral, then the outside integral. The results are the same as before.     Find the centroid  Substituting Q_x and along with into the centroid definitions gives .       The next two examples involve areas with functions for both boundaries,   Centroid of a semi-parabola   Find the coordinates of the centroid of a parabolic spandrel bounded by the axis, a horizontal line passing through the point and a parabola with a vertex at the origin and passing through the same point. and are positive integers.           We will use with vertical strips to find the centroid of a spandrel.     Set up the integrals  Determining the bounding functions and setting up the integrals is usually the most difficult part of problems like this. Begin by drawing and labeling a sketch of the situation.    Place a point in the first quadrant and label it . This point is in the first quadrant and fixed since we are told that and are positive integers  Place a horizontal line through to make the upper bound.  Sketch in a parabola with a vertex at the origin and passing through and shade in the enclosed area.  Decide which differential element you intend to use. For this example we choose to use vertical strips, which you can see if you tick show strips in the interactive above. Horizontal strips would give the same result, but you would need to define the equation for the parabola in terms of .    Determining the equation of the parabola and expressing it in terms of and any known constants is a critical step. You should remember from algebra that the general equation of parabola with a vertex at the origin is , where is a constant which determines the shape of the parabola. If , the parabola opens upward and if , the parabola opens downward.  To find the value of , substitute the coordinates of into the general equation, then solve for .   The resulting function of the parabola is .  To perform the integrations, express the area and centroidal coordinates of the element in terms of the points at the top and bottom of the strip. The area of the strip is its height times its base, so . If you incorrectly used , you would find the centroid of the spandrel below the curve.  For vertical strips, the bottom is at on the parabola, and the top is directly above at . The strip has a differential width . The centroid of the strip is located at its midpoint and the coordinates are found by averaging the and coordinates of the points at the top and bottom.   For vertical strips, the integrations are with respect to , and the limits on the integrals are on the left to on the right.    Solve the integrals  We have already established that where . To simplify the algebra, it is best not to prematurely substitute y(x) and , but you must substitute in any functions of before you do the integration step.     The area of the spandrel is of the area of the enclosing rectangle and the moments of area have units of .    Find the centroid  Substituting the results into the definitions gives .  is of the width and is of the height of the enclosing rectangle.        Centroid of an area between two curves   Use integration to locate the centroid of the area bounded by .      Find the centroid location of the shaded area between the two curves below.       This solution demonstrates finding the centroid of the area between two functions using vertical strips . Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions in this example are the axis, the vertical line , and the straight line through the origin with a slope of . Using the slope-intercept form of the equation of a line, the upper bounding function is and any point on this line is designated .  The strip extends from on the axis to on the function, has a height of , and a differential width . The area of this strip is .  The centroid of the strip is located at its midpoint so, by inspection   With vertical strips the variable of integration is , and the limits are to .    Solve the integrals  Substitute , , and into and integrate. In contrast to the rectangle example both and are functions of , and will have to be integrated accordingly.      Find the Centroid  Substituting the results into the definitions gives .       This solution demonstrates finding the centroid of the area between two functions using vertical strips . Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions in this example are the axis, the vertical line , and the straight line through the origin with a slope of . Using the slope-intercept form of the equation of a line, the upper bounding function is and any point on this line is designated .  The strip extends from on the axis to on the function, has a height of , and a differential width . The area of this strip is .  The centroid of the strip is located at its midpoint so, by inspection   With vertical strips the variable of integration is , and the limits are to .    Solve the integrals  Substitute , , and into and integrate. In contrast to the rectangle example both and are functions of , and will have to be integrated accordingly.      Find the Centroid  Substituting the results into the definitions gives .       The last example demonstrates using double integration with polar coordinates.   Centroid of a semi-circle   Find the coordinates of the top half of a circle with radius , centered at the origin.        The centroid of a semicircle with radius , centered at the origin is    We will use with polar coordinates to solve this problem because they are a natural fit for the geometry. In polar coordinates, the equation for the bounding semicircle is simply .  Normally this involves evaluating three integrals but as you will see, we can take some shortcuts in this problem. Otherwise we will follow the same procedure as before.     Set up the integrals  Divide the semi-circle into \"rectangular\" differential elements of area , as shown in the interactive when you select Show element . This shape is not really a rectangle, but in the limit as and approach zero, it doesn't make any difference.  The radial height of the rectangle is and the tangential width is the arc length . The product is the differential area . .  The differential element is located at in polar coordinates. Expressing this point in rectangular coordinates gives .    Solve the integrals  The area of a semicircle is well known, so there is no need to actually evaluate , .  Since the semi-circle is symmetrical about the axis, . This is because each element of area to the right of the axis is balanced by a corresponding element the same distance the left which cancel each other out in the sum.  All that remains is to evaluate the integral in the numerator of  The differential area is the product of two differential quantities, we will need to perform a double integration.     Find the centroid  Substituting the results into the definitions gives .  So and lies on the axis of symmetry, and above the diameter.  This result can be extended by noting that a semi-circle is mirrored quarter-circles on either side of the axis. These must have the same value as the semi-circle. Further, quarter-circles are symmetric about a line, so for the quarter-circle in the first quadrant, .        "
},
{
  "id": "centroids-by-integration-2",
  "level": "2",
  "url": "centroids-by-integration.html#centroids-by-integration-2",
  "type": "Key Questions",
  "number": "7.7",
  "title": "",
  "body": "  How do you find the centroid of an area using integration?  What is a differential quantity?  Why are double integrals required for square elements and single integrals required for rectangular elements?   "
},
{
  "id": "Chapter_07-integration-process-2",
  "level": "2",
  "url": "centroids-by-integration.html#Chapter_07-integration-process-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": ""
},
{
  "id": "Chapter_07-integration-process-3-1-1-6",
  "level": "2",
  "url": "centroids-by-integration.html#Chapter_07-integration-process-3-1-1-6",
  "type": "Figure",
  "number": "7.7.1",
  "title": "",
  "body": " Differential Elements of Area     Square element   Square differential element of width dx, height dy, located at (x, y).     Vertical strip   Vertical differential element of width dx, height y.     Horizontal strip   Horizontal differential element of width x, height dy.     "
},
{
  "id": "Chapter_07-integration-process-4",
  "level": "2",
  "url": "centroids-by-integration.html#Chapter_07-integration-process-4",
  "type": "Thinking Deeper",
  "number": "7.7.2",
  "title": "What is <span class=\"process-math\">\\(dA\\text{?}\\)<\/span>",
  "body": " What is ?  is just an area, but an extremely tiny one!  It's an example of an differential quantity also called an infinitesimal . A differential quantity is a value which is as close to zero as it can possibly be without actually being zero. You can think of its value as . Integration is the process of adding up an infinite number of infinitesimal quantities.  Some other differential quantities we will see in statics are , and , which are infinitesimal increments of distance; , which is a differential volume; , a differential weight; , a differential mass, and so on.  Any product involving a differential quantity is itself a differential quantity, so if the area of a vertical strip is given by then, even though height is a real number, the area is a differential because is differential.  If you like, you can pronounce the as the little bit of so reads The little bit of area is the height times a little bit of . and reads The total area is the sum of the little bits of area.  "
},
{
  "id": "area-of-a-general-spandrel-2",
  "level": "2",
  "url": "centroids-by-integration.html#area-of-a-general-spandrel-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spandrel "
},
{
  "id": "general-spandrel-ggb",
  "level": "2",
  "url": "centroids-by-integration.html#general-spandrel-ggb",
  "type": "Figure",
  "number": "7.7.3",
  "title": "",
  "body": " A general spandrel of the form   "
},
{
  "id": "area-of-a-general-spandrel-9",
  "level": "2",
  "url": "centroids-by-integration.html#area-of-a-general-spandrel-9",
  "type": "Thinking Deeper",
  "number": "7.7.4",
  "title": "Which is better, horizontal or vertical elements?",
  "body": " Which is better, horizontal or vertical elements?  Recall that the first moment of area is the distance weighted area as measured from a desired axis. The distance term is the distance from the desired axis to the centroid of each differential element of area, .      If you're using a single integral with a vertical element and the horizontal distance from the axis to the centroid of would simply be     It is also possible to find using a horizontal element but the computations are a bit more challenging. First the equation for changes to .     Additionally, the distance to the centroid of each element, , must measure to the middle of the horizontal element. For this triangle, .  We find a similar contrast to finding the vertical centroidal distance where it is easier to use a element to find than it is to use a element.      The interactive below compares horizontal and vertical strips for a shape bounded by the parabola and the diagonal line . Horizontal strips are a better choice in this case, because the left and right boundaries are easy to express as functions of . If vertical strips are chosen, the parabola must be expressed as two different functions of , and two integrals are needed to cover the area, the first from to , and the second from to .   Function demonstrating good and bad choices of differential elements.    "
},
{
  "id": "Chapter_07-example-centroid-of-a-rectangle",
  "level": "2",
  "url": "centroids-by-integration.html#Chapter_07-example-centroid-of-a-rectangle",
  "type": "Example",
  "number": "7.7.6",
  "title": "Centroid of a rectangle.",
  "body": " Centroid of a rectangle   Use integration to show that the centroid of a rectangle with a base and a height of is at its center.           This solution demonstrates solving integrals using vertical rectangular strips. Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions in this example are vertical lines and , and horizontal lines and .  The strip extends from on the axis to on the top of the rectangle, and has a differential width .  The area of the strip is the base times the height, so .  The centroid of the strip is located at its midpoint so, by inspection   With vertical strips the variable of integration is , and the limits on run from at the left to on the right. For a rectangle, both 0 and are constants, but in other situations, and the left or right limits may be functions of .    Solve the integrals  Substitute , , and into and integrate.   Unsurprisingly, we learn that the area of a rectangle is base times height. Since the area formula is well known, it was not really necessary to solve the first integral. Note that has units of , and and have units of .    Find the centroid  Substituting the results into the definitions gives .       This solution demonstrates solving integrals using horizontal rectangular strips. Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions , , and .  The strip extends from on the axis to on the right, and has a differential height .  The area of the strip is the base times the height, so .  The centroid of the strip is located at its midpoint so, by inspection   With horizontal strips the variable of integration is , and the limits on run from at the bottom to at the top.  For a rectangle, both 0 and are constants, but in other situations, and the upper or lower limits may be functions of .    Solve the integrals  Substitute , , and into and integrate. The results are the same as we found using vertical strips.     Find the centroid  Substituting the results into the definitions gives .       This solution demonstrates solving integrals using square elements and double integrals. Set the slider on the diagram to to see a representative element.     Set up the integrals  Set the slider on the diagram to to see a representative element.  The bounding functions , , and .  Instead of strips, the integrals will be evaluated using square elements with width and height located at .  The area of the square element is the base times the height, so .  The centroid of the strip is located at its midpoint so, by inspection   We will integrate twice, first with respect to and then with respect to . The limits on the first integral are to and to on the second. For a rectangle, both and are constants. In other situations, the upper or lower limits may be functions of or .    Solve the integrals  Substitute , , and into and integrate the inside integral, then the outside integral. The results are the same as before.     Find the centroid  Substituting the results into the definitions gives .      "
},
{
  "id": "Chapter_07-example-centroid-of-a-triangle",
  "level": "2",
  "url": "centroids-by-integration.html#Chapter_07-example-centroid-of-a-triangle",
  "type": "Example",
  "number": "7.7.8",
  "title": "Centroid of a triangle.",
  "body": " Centroid of a triangle   Use integration to locate the centroid of a triangle with base and height of oriented as shown in the interactive.           This solution demonstrates finding the centroid of the triangle using vertical strips . Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions in this example are the axis, the vertical line , and the straight line through the origin with a slope of . Using the slope-intercept form of the equation of a line, the upper bounding function is and any point on this line is designated .  The strip extends from on the axis to on the function, has a height of , and a differential width . The area of this strip is .  The centroid of the strip is located at its midpoint so, by inspection   With vertical strips the variable of integration is , and the limits are to .    Solve the integrals  Substitute , , and into and integrate. In contrast to the rectangle example both and are functions of , and will have to be integrated accordingly.   We learn that the area of a triangle is one half base times height. Since the area formula is well known, it would have been more efficient to skip the first integral. Note that has units of , and and have units of .    Find the Centroid  Substituting the results into the definitions gives .       This solution demonstrates solving integrals using horizontal rectangular strips. Set the slider on the diagram to to see a representative element.     Set up the integrals  As before, the triangle is bounded by the axis, the vertical line , and the line .  To integrate using horizontal strips, the function must be inverted to express in terms of . Solving for for gives . The limits on the integral are from to .  The strip extends from to , has a height of , and a length of , therefore the area of this strip is .  The coordinates of the midpoint of the element are .  These expressions are recognized as the average of the and coordinates of strip's endpoints.  A common student mistake is to use , and . These would be correct if you were looking for the properties of the area to the left of the curve.    Solve the integrals  Substitute , , and into the definitions of and and integrate. The results are the same as we found using vertical strips. There in no need to evaluate since we know that for a triangle.   It makes solving these integrals easier if you avoid prematurely substituting in the function for and if you factor out constants whenever possible. Here it was not substituted until the fourth line.    Find the centroid  Substituting the results into the definitions gives .       This solution demonstrates solving integrals using square elements and double integrals. Set the slider on the diagram to or to see a representative element.     Set up the integrals  As before, the triangle is bounded by the axis, the vertical line , and the line .  In this solution the integrals will be evaluated using square differential elements located at .  With double integration, you must take care to evaluate the limits correctly, since the limits on the inside integral are functions of the variable of integration of the outside integral. The inside integral essentially stacks the elements into strips and the outside integral adds all the strips to cover the area.  Choosing to express as means that the integral over will be conducted first. The limits on the inside integral are from to . Then, the limits on the outside integral are from to  Using would reverse the order of integration, so the inside integral's limits would be from to , and the limits on the outside integral would be to . Either choice will give the same results if you don't make any errors!  The area of the square element is the base times the height, so . The centroid of the square is located at its midpoint so, by inspection     Solve the integrals  Substitute , , and into and integrate the inside integral, then the outside integral. The results are the same as before.     Find the centroid  Substituting Q_x and along with into the centroid definitions gives .      "
},
{
  "id": "Chapter_07-example-centroid-of-a-semi-parabola",
  "level": "2",
  "url": "centroids-by-integration.html#Chapter_07-example-centroid-of-a-semi-parabola",
  "type": "Example",
  "number": "7.7.10",
  "title": "Centroid of a semi-parabola.",
  "body": " Centroid of a semi-parabola   Find the coordinates of the centroid of a parabolic spandrel bounded by the axis, a horizontal line passing through the point and a parabola with a vertex at the origin and passing through the same point. and are positive integers.           We will use with vertical strips to find the centroid of a spandrel.     Set up the integrals  Determining the bounding functions and setting up the integrals is usually the most difficult part of problems like this. Begin by drawing and labeling a sketch of the situation.    Place a point in the first quadrant and label it . This point is in the first quadrant and fixed since we are told that and are positive integers  Place a horizontal line through to make the upper bound.  Sketch in a parabola with a vertex at the origin and passing through and shade in the enclosed area.  Decide which differential element you intend to use. For this example we choose to use vertical strips, which you can see if you tick show strips in the interactive above. Horizontal strips would give the same result, but you would need to define the equation for the parabola in terms of .    Determining the equation of the parabola and expressing it in terms of and any known constants is a critical step. You should remember from algebra that the general equation of parabola with a vertex at the origin is , where is a constant which determines the shape of the parabola. If , the parabola opens upward and if , the parabola opens downward.  To find the value of , substitute the coordinates of into the general equation, then solve for .   The resulting function of the parabola is .  To perform the integrations, express the area and centroidal coordinates of the element in terms of the points at the top and bottom of the strip. The area of the strip is its height times its base, so . If you incorrectly used , you would find the centroid of the spandrel below the curve.  For vertical strips, the bottom is at on the parabola, and the top is directly above at . The strip has a differential width . The centroid of the strip is located at its midpoint and the coordinates are found by averaging the and coordinates of the points at the top and bottom.   For vertical strips, the integrations are with respect to , and the limits on the integrals are on the left to on the right.    Solve the integrals  We have already established that where . To simplify the algebra, it is best not to prematurely substitute y(x) and , but you must substitute in any functions of before you do the integration step.     The area of the spandrel is of the area of the enclosing rectangle and the moments of area have units of .    Find the centroid  Substituting the results into the definitions gives .  is of the width and is of the height of the enclosing rectangle.      "
},
{
  "id": "Chapter_07-example-centroid-of-an-area-between-two-curves",
  "level": "2",
  "url": "centroids-by-integration.html#Chapter_07-example-centroid-of-an-area-between-two-curves",
  "type": "Example",
  "number": "7.7.12",
  "title": "Centroid of an area between two curves.",
  "body": " Centroid of an area between two curves   Use integration to locate the centroid of the area bounded by .      Find the centroid location of the shaded area between the two curves below.       This solution demonstrates finding the centroid of the area between two functions using vertical strips . Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions in this example are the axis, the vertical line , and the straight line through the origin with a slope of . Using the slope-intercept form of the equation of a line, the upper bounding function is and any point on this line is designated .  The strip extends from on the axis to on the function, has a height of , and a differential width . The area of this strip is .  The centroid of the strip is located at its midpoint so, by inspection   With vertical strips the variable of integration is , and the limits are to .    Solve the integrals  Substitute , , and into and integrate. In contrast to the rectangle example both and are functions of , and will have to be integrated accordingly.      Find the Centroid  Substituting the results into the definitions gives .       This solution demonstrates finding the centroid of the area between two functions using vertical strips . Set the slider on the diagram to to see a representative element.     Set up the integrals  The bounding functions in this example are the axis, the vertical line , and the straight line through the origin with a slope of . Using the slope-intercept form of the equation of a line, the upper bounding function is and any point on this line is designated .  The strip extends from on the axis to on the function, has a height of , and a differential width . The area of this strip is .  The centroid of the strip is located at its midpoint so, by inspection   With vertical strips the variable of integration is , and the limits are to .    Solve the integrals  Substitute , , and into and integrate. In contrast to the rectangle example both and are functions of , and will have to be integrated accordingly.      Find the Centroid  Substituting the results into the definitions gives .      "
},
{
  "id": "four-r-three-pi",
  "level": "2",
  "url": "centroids-by-integration.html#four-r-three-pi",
  "type": "Example",
  "number": "7.7.14",
  "title": "Centroid of a semi-circle.",
  "body": " Centroid of a semi-circle   Find the coordinates of the top half of a circle with radius , centered at the origin.        The centroid of a semicircle with radius , centered at the origin is    We will use with polar coordinates to solve this problem because they are a natural fit for the geometry. In polar coordinates, the equation for the bounding semicircle is simply .  Normally this involves evaluating three integrals but as you will see, we can take some shortcuts in this problem. Otherwise we will follow the same procedure as before.     Set up the integrals  Divide the semi-circle into \"rectangular\" differential elements of area , as shown in the interactive when you select Show element . This shape is not really a rectangle, but in the limit as and approach zero, it doesn't make any difference.  The radial height of the rectangle is and the tangential width is the arc length . The product is the differential area . .  The differential element is located at in polar coordinates. Expressing this point in rectangular coordinates gives .    Solve the integrals  The area of a semicircle is well known, so there is no need to actually evaluate , .  Since the semi-circle is symmetrical about the axis, . This is because each element of area to the right of the axis is balanced by a corresponding element the same distance the left which cancel each other out in the sum.  All that remains is to evaluate the integral in the numerator of  The differential area is the product of two differential quantities, we will need to perform a double integration.     Find the centroid  Substituting the results into the definitions gives .  So and lies on the axis of symmetry, and above the diameter.  This result can be extended by noting that a semi-circle is mirrored quarter-circles on either side of the axis. These must have the same value as the semi-circle. Further, quarter-circles are symmetric about a line, so for the quarter-circle in the first quadrant, .      "
},
{
  "id": "distributed-loads",
  "level": "1",
  "url": "distributed-loads.html",
  "type": "Section",
  "number": "7.8",
  "title": "Distributed Loads",
  "body": " Distributed Loads    What is a distributed load?  Given a distributed load, how do we find the magnitude of the equivalent concentrated force?  Given a distributed load, how do we find the location of the equivalent concentrated force?     Distributed loads are forces which are spread out over a length, area, or volume. Most real-world loads are distributed, including the weight of building materials and the force of wind, water, or earth pushing on a surface. Pressure, load, weight density and stress are all names commonly used for distributed loads. Distributed load is a force per unit length or force per unit area depicted with a series of force vectors joined together at the top, and will be designated as to indicate that the distributed loading is a function of .  For example, although a shelf of books could be treated as a collection of individual forces, it is more common and convenient to represent the weight of the books as a uniformly distributed load . A uniformly distributed load is a load which has the same value everywhere, , a constant.       A shelf of books with various weights.   Shelf of books.       Each book represented as an individual weight   Shelf with books represented by different individual weights.       All the books represented as a distributed load.   All books represented as distributed load       We can use the computational tools discussed in the previous chapters to handle distributed loads if we first convert them to equivalent point forces. This equivalent replacement must be the resultant of the distributed loading, as discussed in . Recall that this resultant force has the same external effect on the object as the original system of forces did.  To be equivalent, the point force must have a:  Magnitude equal to the area or volume under the distributed load function.  Line of action that passes through the centroid of the distributed load distribution.    The next two sections will explore how to find the magnitude and location of the equivalent point force for a distributed load.    Equivalent Magnitude  The magnitude of the distributed load of the books is the total weight of the books divided by the length of the shelf . It represents the average book weight per unit length. Similarly, the total weight of the books is equal to the value of the distributed load times the length of the shelf or   This total load is simply the area under the curve , and has units of force. If the loading function is not uniform, integration may be necessary to find the area.    Bookshelf   A common paperback is about thick and weighs approximately .  What is the loading function for a shelf full of paperbacks and what is the total weight of paperback books on a shelf?         The weight of one paperback over its thickness is the load intensity , so .  The total weight is the area under the load intensity diagram, which in this case is a rectangle. So, a bookshelf covered with paperbacks would have to support .  The line of action of this equivalent load passes through the centroid of the rectangular loading, so it acts at .        Equivalent Location  To use a distributed load in an equilibrium problem, you must know the equivalent magnitude to sum the forces, and also know the position or line of action to sum the moments.  The line of action of the equivalent force acts through the centroid of area under the load intensity curve. For a rectangular loading, the centroid is in the center. We know the vertical and horizontal coordinates of this centroid, but since the equivalent point force's line of action is vertical and we can slide a force along its line of action, the vertical coordinate of the centroid is not important in this context.  Similarly, for a triangular distributed load also called a uniformly varying load the magnitude of the equivalent force is the area of the triangle, and the line of action passes through the centroid of the triangle. The horizontal distance from the larger end of the triangle to the centroid is .  Essentially, we're finding the balance point so that the moment of the force to the left of the centroid is the same as the moment of the force to the right.  The examples below will illustrate how you can combine the computation of both the magnitude and location of the equivalent point force for a series of distributed loads.   Uniformly Varying Load     Horizontal beam with width of 6 ft fixed on the left end. Distributed load starts at 0 and increases to 10 lb\/ft at the right end.   Find the equivalent point force and its point of application for the distributed load shown.     The equivalent load is downward force acting from the left end.     The equivalent load is the area under the triangular load intensity curve and it acts straight down at the centroid of the triangle. This triangular loading has a base and a height so . and the centroid is located of the way from the left end so, .    Distributed loads may be any geometric shape or defined by a mathematical function. If the load is a combination of common shapes, use the properties of the shapes to find the magnitude and location of the equivalent point force using the methods of . If the distributed load is defined by a mathematical function, integrate to find their area using the methods of .   A few things to note:  You can include the distributed load or the equivalent point force on your free-body diagram, but not both !  Since you're calculating an area, you can divide the area up into any shapes you find convenient. So, if you don't recall the area of a trapezoid off the top of your head, break it up into a rectangle and a triangle.      Distributed Load Applications  Once you convert distributed loads to the resultant point force, you can solve problem in the same manner that you have other problems in previous chapters of this book. Note that while the resultant forces are externally equivalent to the distributed loads, they are not internally equivalent, as will be shown .   Cantilever Beam     Cantilever beam fixed on left end and length of 6 m. Uniform distributed load of 4 N\/m begins at 2 m from left end and continues to the right end.   Find the reactions at the fixed connection at .           Draw a free-body diagram with the distributed load replaced with an equivalent concentrated load, then apply the equations of equilibrium.    Horizontal beam 44 in long. Distributed load of 12 lb\/in from left end to 10 in. Pin A at 10 in. Downward force of 100 lb at 16 in. Downward force of 150 lb at 22 in. Downward force of 100 lb at 28 in. Roller support at 28 in. Uniform distributed load of 12 lb\/in starting at 34 in and ending at 44 in.          Beam Reactions     Find the reactions at the supports for the beam shown.         Start by drawing a free-body diagram of the beam with the two distributed loads replaced with equivalent concentrated loads. The two distributed loads are each.   Then apply the equations of equilibrium.      "
},
{
  "id": "distributed-loads-2",
  "level": "2",
  "url": "distributed-loads.html#distributed-loads-2",
  "type": "Key Questions",
  "number": "7.8",
  "title": "",
  "body": "  What is a distributed load?  Given a distributed load, how do we find the magnitude of the equivalent concentrated force?  Given a distributed load, how do we find the location of the equivalent concentrated force?   "
},
{
  "id": "distributed-loads-3-1",
  "level": "2",
  "url": "distributed-loads.html#distributed-loads-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Distributed loads "
},
{
  "id": "distributed-loads-3-2",
  "level": "2",
  "url": "distributed-loads.html#distributed-loads-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniformly distributed load "
},
{
  "id": "distributed-loads-3-3",
  "level": "2",
  "url": "distributed-loads.html#distributed-loads-3-3",
  "type": "Figure",
  "number": "7.8.1",
  "title": "",
  "body": "     A shelf of books with various weights.   Shelf of books.       Each book represented as an individual weight   Shelf with books represented by different individual weights.       All the books represented as a distributed load.   All books represented as distributed load      "
},
{
  "id": "distributed-loads-3-4",
  "level": "2",
  "url": "distributed-loads.html#distributed-loads-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "resultant "
},
{
  "id": "bookshelf-example",
  "level": "2",
  "url": "distributed-loads.html#bookshelf-example",
  "type": "Example",
  "number": "7.8.2",
  "title": "Bookshelf.",
  "body": " Bookshelf   A common paperback is about thick and weighs approximately .  What is the loading function for a shelf full of paperbacks and what is the total weight of paperback books on a shelf?         The weight of one paperback over its thickness is the load intensity , so .  The total weight is the area under the load intensity diagram, which in this case is a rectangle. So, a bookshelf covered with paperbacks would have to support .  The line of action of this equivalent load passes through the centroid of the rectangular loading, so it acts at .     "
},
{
  "id": "Chapter_07-equivalent-location-4",
  "level": "2",
  "url": "distributed-loads.html#Chapter_07-equivalent-location-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniformly varying load "
},
{
  "id": "Chapter_07-example-uniformly-varying-load",
  "level": "2",
  "url": "distributed-loads.html#Chapter_07-example-uniformly-varying-load",
  "type": "Example",
  "number": "7.8.3",
  "title": "Uniformly Varying Load.",
  "body": " Uniformly Varying Load     Horizontal beam with width of 6 ft fixed on the left end. Distributed load starts at 0 and increases to 10 lb\/ft at the right end.   Find the equivalent point force and its point of application for the distributed load shown.     The equivalent load is downward force acting from the left end.     The equivalent load is the area under the triangular load intensity curve and it acts straight down at the centroid of the triangle. This triangular loading has a base and a height so . and the centroid is located of the way from the left end so, .   "
},
{
  "id": "Chapter_07-example-cantilever-beam",
  "level": "2",
  "url": "distributed-loads.html#Chapter_07-example-cantilever-beam",
  "type": "Example",
  "number": "7.8.4",
  "title": "Cantilever Beam.",
  "body": " Cantilever Beam     Cantilever beam fixed on left end and length of 6 m. Uniform distributed load of 4 N\/m begins at 2 m from left end and continues to the right end.   Find the reactions at the fixed connection at .           Draw a free-body diagram with the distributed load replaced with an equivalent concentrated load, then apply the equations of equilibrium.    Horizontal beam 44 in long. Distributed load of 12 lb\/in from left end to 10 in. Pin A at 10 in. Downward force of 100 lb at 16 in. Downward force of 150 lb at 22 in. Downward force of 100 lb at 28 in. Roller support at 28 in. Uniform distributed load of 12 lb\/in starting at 34 in and ending at 44 in.        "
},
{
  "id": "Chapter_07-example-beam-reactions",
  "level": "2",
  "url": "distributed-loads.html#Chapter_07-example-beam-reactions",
  "type": "Example",
  "number": "7.8.5",
  "title": "Beam Reactions.",
  "body": " Beam Reactions     Find the reactions at the supports for the beam shown.         Start by drawing a free-body diagram of the beam with the two distributed loads replaced with equivalent concentrated loads. The two distributed loads are each.   Then apply the equations of equilibrium.    "
},
{
  "id": "Chapter_07-fluid-statics",
  "level": "1",
  "url": "Chapter_07-fluid-statics.html",
  "type": "Section",
  "number": "7.9",
  "title": "Fluid Statics",
  "body": " Fluid Statics    What is the basic relationship between depth and pressure?  How are absolute and relative pressure different?  How can use our knowledge of centroids to compute the equivalent point forces of fluids?     Pressure is the term used for a force distributed over an area . We will consider the effect of fluid pressure on underwater surfaces, including slanted or curved objects. In all cases we will simply ask the question: what is the pressure at each point and how does it change along the surface?  Pressure can be measured in two different ways  Absolute pressure is the pressure measured above an absolute or perfect vacuum. The absolute pressure of the surrounding atmosphere is approximately or , and a perfect vacuum is 0 psi or 0 kPa.  Gage pressure is the pressure indicated by a standard pressure gage. The gage reads zero when exposed directly to the atmosphere, positive when the pressure is higher than atmospheric pressure, and negative pressure indicates a vacuum. In effect, pressure gages ignores the pressure of the atmosphere which surrounds us.    We will use gage pressure for the remainder of the chapter.  Commonly used pressure units include:  1 pascals (Pa) = 1  1 kilopascal (kPa) = 1000  1 pound per square inch (psi) =  1 kip per square inch (ksi) = 1000  1 pound per square foot (psf) = 1      Principles of Fluid Statics  A fluid, like water or air exerts a pressure on its surroundings. This pressure applies a distributed load on surfaces surrounding the fluid, like the face of a dam, an irrigation control gate, a teakettle, or the drum of a steam boiler.  When you dive underwater, the pressure you feel in your ears increases with depth. At the surface, the gage pressure is zero no matter which unit system you use. As you descend, the fluid pressure increases with depth according to the equation , where:  is the density of a fluid,  is gravitational acceleration, and  is the height of fluid above the point of interest.    Since fluid pressure increases linearly with depth, it behaves as a distributed load which increases linearly from 0 at the surface to at depth , acting normal to the surface. The pressure can be replaced with an equivalent force acting through the centroid of the triangular loading, with a magnitude equal to the triangular area. The pressure on horizontal surfaces is constant, and it is normal to all surfaces.   Pressure on submerged surfaces.    Distributed pressure.   Vertical submerged wall of height h. Pressure is a function of height p(y) = rho*g*y.     Equivalent force.   Vertical submerged wall of height h. Distributed load of water pressure is shown as (1\/2)*rho*g*h at a depth of (2\/3)*h.     Pressure is perpendicular to the surface.   Submerged trapezoid shape illustrating pressure is perpendicular to each surface.      Some points to remember when solving fluid pressure problems.  The pressure due to the fluid always acts perpendicular the surface.  A particle underwater will feel the same pressure from all directions.  Pressure increases linearly with depth.  assumes a constant density and thus is valid only for incompressible fluids like water or oil, but not for compressible fluids like air.  In English units, specific weight is often used instead of density to describe fluids. Specific weight is the weight per unit volume of a substance, while density is its mass per unit volume. The two properties are related by . The specific weight of freshwater at room temperature is about .  Gage pressure is the pressure above the surrounding atmospheric pressure. Atmospheric pressure is approximately or , but since this pressure acts on everything equally and from all directions, the pressure scale can be offset to make the pressure of the surroundings , gage.      Does fluid pressure depend on the surface area of the container? For instance, is the pressure below the Atlantic Ocean less than the pressure below the Pacific Ocean since the Pacific is larger?    No. Fluid pressure is a function of density and depth only, so the surface area of an ocean or tank is insignificant. . Assuming that the density of seawater and are the same everywhere under the ocean, the gage pressure depends on depth only.      Compare the pressure at three feet and thirty feet below the surface of freshwater to the atmospheric pressure.    The gage pressure at is .  This is , approximately 9% greater than atmospheric pressure.  At below the surface, the pressure is 10 times higher, which is nearly twice atmospheric pressure.      Fluid Statics Applications   Force on a submerged window     An aquarium tank has a window AB for viewing the inhabitants. The tank contains water with density .  Find the force of the water on the window, and the location of the equivalent point load.    Vertical submerged wall of height h. pressure is a function of height p(y) = rho*g*y.       acting above point or below the surface of the water.    Begin by drawing a diagram of the window showing the load intensity and the equivalent concentrated force.   Schematic of aquarium. Wall of aquarium descends 2 m from top. A glass window goes from 2 m in depth to 5 m in depth.   The pressure at the top and the bottom of the window are   Since the loading is linear, the average pressure acting on the window is   The total force acting on the window is the average pressure times the area of the window   This force may also be visualized as the volume of a trapezoidal prism with a depth into the page.   The line of action of the equivalent force passes through the centroid of the trapezoid, which may be calculated using composite areas, see .  Dividing the trapezoid into a triangle and a rectangle and measuring down from the surface of the tank, the distance to the equivalent force is If you prefer, you may use the formula from the Centroid table to locate the centroid of the trapezoid instead.     Mud on Concrete Wall     A concrete retaining wall tall and thick encloses wet clay mud.  Find the maximum depth of mud that can be retained without tipping the wall.  Assume the density of mud is and the density of concrete is .    Retaining wall is 3 m high and 0.8 m wide. The mud is shown to the right of the wall at height of h.         Begin by drawing free-body diagram of the wall, showing the forces acting on it: the weight of the concrete , acting at the center of gravity of the rectangular wall, the horizontal force due to the mud, and the reaction components at . Define symbol for the unspecified length of the wall into the page.   The weight of the concrete is found by multiplying the weight density of concrete by the volume of the rectangular wall.   The horizontal force is caused by the hydraulic pressure of the mud on the submerged face of the wall. The pressure is a distributed load that increases linearly from zero at the surface to at depth . Since the loading is triangular, the average pressure is one-half the maximum pressure, and the resulting force is:   The wall will tip if the counter-clockwise moment due to is greater than the clockwise moment caused by the concrete's weight. By taking moments about point , we can find the maximum allowable height of the mud, . Note that the length of the dam and appear on both sides and cancel out.      Sea Gate     A sea gate is hinged at point and is designed to rotate and release the water when the depth exceeds a certain value.  The gate extends into the page. The mass density of the water is .  What depth will cause the gate to open?    A vertical sea gate holds back water of depth d on its right. The gate is hinged at 500 mm from the floor of the sea. A stopper is at the bottom of the gate on the right to prevent the gate from rotating counter clockwise.          For the gate to tip, the equivalent force of the water must act at or above . That happens when the centroid of the load intensity diagram of the water is at or above , so .     Gate with Horizontal Surface     A gate at the end of a freshwater channel is fabricated from three , rectangular steel plates. The gate is hinged at and rests against a frictionless support at . The depth of the water is .  Draw the free-body diagram and determine the reactions at and .               A free-body diagram of a cross section of the gate is shown. For simplicity the thickness of the steel plates has been ignored. You should ensure that sufficient distances are provided to locate the loads.  The easiest way to solve this is to apply the principle of transmissibility: slide the lower trapezoid left until it aligns with the upper triangle and makes a triangular loading.    A sea gate holds back water of depth d. Pin A is at the sea floor at the origin. The gate goes up vertically to point (0, 0.6). The gate continues horizontally from (0, 0.6) to (-0.6, 0.6). Then the gate continues vertically up to point D. A roller is on the left end of point D to prevent the gate from rotating counter clockwise.    The total horizontal force from the water will be acting to the right above point .  The total vertical load from the water is acting upward to the left of .  Each plate weighs .  From here solve the equilibrium equations to find the reactions. You should complete this for practice.      "
},
{
  "id": "Chapter_07-fluid-statics-2",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-fluid-statics-2",
  "type": "Key Questions",
  "number": "7.9",
  "title": "",
  "body": "  What is the basic relationship between depth and pressure?  How are absolute and relative pressure different?  How can use our knowledge of centroids to compute the equivalent point forces of fluids?   "
},
{
  "id": "Chapter_07-fluid-statics-3-2",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-fluid-statics-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Absolute pressure Gage pressure "
},
{
  "id": "Chapter_07-principles-of-fluid-statics-5",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-principles-of-fluid-statics-5",
  "type": "Figure",
  "number": "7.9.1",
  "title": "",
  "body": " Pressure on submerged surfaces.    Distributed pressure.   Vertical submerged wall of height h. Pressure is a function of height p(y) = rho*g*y.     Equivalent force.   Vertical submerged wall of height h. Distributed load of water pressure is shown as (1\/2)*rho*g*h at a depth of (2\/3)*h.     Pressure is perpendicular to the surface.   Submerged trapezoid shape illustrating pressure is perpendicular to each surface.     "
},
{
  "id": "Chapter_07-principles-of-fluid-statics-7",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-principles-of-fluid-statics-7",
  "type": "Question",
  "number": "7.9.2",
  "title": "",
  "body": "  Does fluid pressure depend on the surface area of the container? For instance, is the pressure below the Atlantic Ocean less than the pressure below the Pacific Ocean since the Pacific is larger?    No. Fluid pressure is a function of density and depth only, so the surface area of an ocean or tank is insignificant. . Assuming that the density of seawater and are the same everywhere under the ocean, the gage pressure depends on depth only.   "
},
{
  "id": "Chapter_07-principles-of-fluid-statics-8",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-principles-of-fluid-statics-8",
  "type": "Question",
  "number": "7.9.3",
  "title": "",
  "body": "  Compare the pressure at three feet and thirty feet below the surface of freshwater to the atmospheric pressure.    The gage pressure at is .  This is , approximately 9% greater than atmospheric pressure.  At below the surface, the pressure is 10 times higher, which is nearly twice atmospheric pressure.   "
},
{
  "id": "Chapter_07-example-force-on-a-submerged-window",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-example-force-on-a-submerged-window",
  "type": "Example",
  "number": "7.9.4",
  "title": "Force on a submerged window.",
  "body": " Force on a submerged window     An aquarium tank has a window AB for viewing the inhabitants. The tank contains water with density .  Find the force of the water on the window, and the location of the equivalent point load.    Vertical submerged wall of height h. pressure is a function of height p(y) = rho*g*y.       acting above point or below the surface of the water.    Begin by drawing a diagram of the window showing the load intensity and the equivalent concentrated force.   Schematic of aquarium. Wall of aquarium descends 2 m from top. A glass window goes from 2 m in depth to 5 m in depth.   The pressure at the top and the bottom of the window are   Since the loading is linear, the average pressure acting on the window is   The total force acting on the window is the average pressure times the area of the window   This force may also be visualized as the volume of a trapezoidal prism with a depth into the page.   The line of action of the equivalent force passes through the centroid of the trapezoid, which may be calculated using composite areas, see .  Dividing the trapezoid into a triangle and a rectangle and measuring down from the surface of the tank, the distance to the equivalent force is If you prefer, you may use the formula from the Centroid table to locate the centroid of the trapezoid instead.   "
},
{
  "id": "Chapter_07-example-mud-on-concrete-wall",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-example-mud-on-concrete-wall",
  "type": "Example",
  "number": "7.9.5",
  "title": "Mud on Concrete Wall.",
  "body": " Mud on Concrete Wall     A concrete retaining wall tall and thick encloses wet clay mud.  Find the maximum depth of mud that can be retained without tipping the wall.  Assume the density of mud is and the density of concrete is .    Retaining wall is 3 m high and 0.8 m wide. The mud is shown to the right of the wall at height of h.         Begin by drawing free-body diagram of the wall, showing the forces acting on it: the weight of the concrete , acting at the center of gravity of the rectangular wall, the horizontal force due to the mud, and the reaction components at . Define symbol for the unspecified length of the wall into the page.   The weight of the concrete is found by multiplying the weight density of concrete by the volume of the rectangular wall.   The horizontal force is caused by the hydraulic pressure of the mud on the submerged face of the wall. The pressure is a distributed load that increases linearly from zero at the surface to at depth . Since the loading is triangular, the average pressure is one-half the maximum pressure, and the resulting force is:   The wall will tip if the counter-clockwise moment due to is greater than the clockwise moment caused by the concrete's weight. By taking moments about point , we can find the maximum allowable height of the mud, . Note that the length of the dam and appear on both sides and cancel out.    "
},
{
  "id": "Chapter_07-example-sea-gate",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-example-sea-gate",
  "type": "Example",
  "number": "7.9.6",
  "title": "Sea Gate.",
  "body": " Sea Gate     A sea gate is hinged at point and is designed to rotate and release the water when the depth exceeds a certain value.  The gate extends into the page. The mass density of the water is .  What depth will cause the gate to open?    A vertical sea gate holds back water of depth d on its right. The gate is hinged at 500 mm from the floor of the sea. A stopper is at the bottom of the gate on the right to prevent the gate from rotating counter clockwise.          For the gate to tip, the equivalent force of the water must act at or above . That happens when the centroid of the load intensity diagram of the water is at or above , so .   "
},
{
  "id": "Chapter_07-example-gate-with-horizontal-surface",
  "level": "2",
  "url": "Chapter_07-fluid-statics.html#Chapter_07-example-gate-with-horizontal-surface",
  "type": "Example",
  "number": "7.9.7",
  "title": "Gate with Horizontal Surface.",
  "body": " Gate with Horizontal Surface     A gate at the end of a freshwater channel is fabricated from three , rectangular steel plates. The gate is hinged at and rests against a frictionless support at . The depth of the water is .  Draw the free-body diagram and determine the reactions at and .               A free-body diagram of a cross section of the gate is shown. For simplicity the thickness of the steel plates has been ignored. You should ensure that sufficient distances are provided to locate the loads.  The easiest way to solve this is to apply the principle of transmissibility: slide the lower trapezoid left until it aligns with the upper triangle and makes a triangular loading.    A sea gate holds back water of depth d. Pin A is at the sea floor at the origin. The gate goes up vertically to point (0, 0.6). The gate continues horizontally from (0, 0.6) to (-0.6, 0.6). Then the gate continues vertically up to point D. A roller is on the left end of point D to prevent the gate from rotating counter clockwise.    The total horizontal force from the water will be acting to the right above point .  The total vertical load from the water is acting upward to the left of .  Each plate weighs .  From here solve the equilibrium equations to find the reactions. You should complete this for practice.    "
},
{
  "id": "Chapter_07-12",
  "level": "1",
  "url": "Chapter_07-12.html",
  "type": "Exercises",
  "number": "7.10",
  "title": "Exercises (Ch. 7)",
  "body": " Exercises (Ch. 7)   "
},
{
  "id": "Chapter_08-internal-forces",
  "level": "1",
  "url": "Chapter_08-internal-forces.html",
  "type": "Section",
  "number": "8.1",
  "title": "Internal Forces",
  "body": " Internal Forces  In you were introduced to axial loadings, which were either tension or compression, or possibly zero. This section will explain two other internal forces found in two-dimensional systems, the internal shear and internal bending moment .  Internal forces are present at every point within a rigid body, but they always occur in equal-and-opposite pairs which cancel each other out, so they're not obvious. They're there however, and when an object is cut (in your imagination) into two parts the internal forces become visible and can be determined.  You are familiar with straight, two-force members which only exist in equilibrium if equal and opposite forces act on either end. Now imagine that we cut the member at some point along its length. To maintain equilibrium, forces must exist at the cut, equal and opposite to the external forces. These forces are internal forces.    Internal forces in a straight two-force member.    Now let's examine the two-force member shown in . This time, the member is L shaped, not straight, but the external forces must still share the same line of action to maintain equilibrium. If you cut across the object, you will obtain two rigid bodies which must also be in equilibrium. However, adding an equal and opposite horizontal force at the cut won't produce static equilibrium because the two forces form a couple which causes the piece to rotate. This means that something is missing!   A horizontal force alone does not create equilibrium.   L-shaped beam turned 45 degrees with force applied horizontally to each end. If the beam is split on one leg, a horizontal force alone does not result in equilibrium; a moment is necessary.   Dan Baker       Two-dimensional rigid bodies have three degrees-of-freedom and require three equilibrium equations to satisfy static equilibrium in order to prevent translation in the direction, the direction, and to prevent rotation about the axis.  Assuming the material is rigid, the connection between the two halves must resist both translation and rotation, so we can model this connection as a fixed support and replace the removed half of the link with a force reaction and a couple-moment reaction as shown in the free-body diagrams of . This internal loading is actually a simplification of a more complex loading distributed across the section plane. The couple represents the net rotational effect of the force system on the surface of the cut.   The internal forces are represented as an equal and opposite force and a bending moment   The L-shaped beam from previous figure shown with resultant force and moment achieve equilibrium.   Dan Baker      The horizontal force can also be resolved into orthogonal components parallel and perpendicular to the cut. These components have special names in the context of internal forces.   The internal forces are represented as a normal force , a shear force , and bending moment   The L-shaped beam from previous figure shown with resultant force broken into normal and shear components, as well as the bending moment.   Dan Baker       The internal force component perpendicular to the cut is called the normal force . This is the same internal tension or compression force that we assumed to be the only significant internal load for trusses. If the object has an axis, and the cut is perpendicular to it, the normal force may also be properly called an axial force .  The internal force component parallel to the cut is called the shear force . The word shear refers to the shearing that occurs between adjacent planes due to this force. You can get a feel for shearing adjacent planes by sliding two pieces of paper together.  The internal couple-moment is called the bending moment because it tends to bend the material by rotating the cut surface.  The shear force is often simply referred to as shear, and the bending moment as moment ; together with the normal or axial force the three together are referred to as the internal forces . The symbol is commonly chosen for the shear force, and , or for the normal force and for the bending moment.    Internal Loading in a L shaped member.     Deformation  The controlling design parameter for most engineering systems is deformation. Thankfully, due to a property called elasticity, most materials will bend, stretch, and compress, long before they ultimately break. For example, when designing the floor in a new building, the floor is often limited to deflecting less than the length of the span in inches, divided by 360. Any more deformation than this would be considered disconcerting to the building residents and also start damaging surface materials like drywall. For example, for a span, the deflection would need to be less than .   To meet this deformation limit, we need to consider the magnitude and location of applied loads, the size and shape of the floor beams, and the material the floor beams are made from. As deflection is an internal property of the flooring materials, the first step is to determine the internal forces that arise from the externally applied loads, using the methods of this chapter.   "
},
{
  "id": "Chapter_08-internal-forces-2",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#Chapter_08-internal-forces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "internal shear internal bending moment "
},
{
  "id": "ggb_tension_compression",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#ggb_tension_compression",
  "type": "Figure",
  "number": "8.1.1",
  "title": "",
  "body": " Internal forces in a straight two-force member.   "
},
{
  "id": "dogleg_cut",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#dogleg_cut",
  "type": "Figure",
  "number": "8.1.2",
  "title": "",
  "body": " A horizontal force alone does not create equilibrium.   L-shaped beam turned 45 degrees with force applied horizontally to each end. If the beam is split on one leg, a horizontal force alone does not result in equilibrium; a moment is necessary.   Dan Baker     "
},
{
  "id": "dogleg-internal",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#dogleg-internal",
  "type": "Figure",
  "number": "8.1.3",
  "title": "",
  "body": " The internal forces are represented as an equal and opposite force and a bending moment   The L-shaped beam from previous figure shown with resultant force and moment achieve equilibrium.   Dan Baker     "
},
{
  "id": "Chapter_08-internal-forces-14",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#Chapter_08-internal-forces-14",
  "type": "Figure",
  "number": "8.1.4",
  "title": "",
  "body": " The internal forces are represented as a normal force , a shear force , and bending moment   The L-shaped beam from previous figure shown with resultant force broken into normal and shear components, as well as the bending moment.   Dan Baker     "
},
{
  "id": "Chapter_08-internal-forces-16",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#Chapter_08-internal-forces-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal force axial force "
},
{
  "id": "Chapter_08-internal-forces-17",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#Chapter_08-internal-forces-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shear force "
},
{
  "id": "Chapter_08-internal-forces-18",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#Chapter_08-internal-forces-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bending moment "
},
{
  "id": "Chapter_08-internal-forces-19",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#Chapter_08-internal-forces-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shear, moment "
},
{
  "id": "ggb_bell_crank",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#ggb_bell_crank",
  "type": "Figure",
  "number": "8.1.5",
  "title": "",
  "body": " Internal Loading in a L shaped member.   "
},
{
  "id": "Chapter_08-internal-forces-22",
  "level": "2",
  "url": "Chapter_08-internal-forces.html#Chapter_08-internal-forces-22",
  "type": "Thinking Deeper",
  "number": "8.1.6",
  "title": "Deformation.",
  "body": " Deformation  The controlling design parameter for most engineering systems is deformation. Thankfully, due to a property called elasticity, most materials will bend, stretch, and compress, long before they ultimately break. For example, when designing the floor in a new building, the floor is often limited to deflecting less than the length of the span in inches, divided by 360. Any more deformation than this would be considered disconcerting to the building residents and also start damaging surface materials like drywall. For example, for a span, the deflection would need to be less than .   To meet this deformation limit, we need to consider the magnitude and location of applied loads, the size and shape of the floor beams, and the material the floor beams are made from. As deflection is an internal property of the flooring materials, the first step is to determine the internal forces that arise from the externally applied loads, using the methods of this chapter.  "
},
{
  "id": "VM_sign_convention",
  "level": "1",
  "url": "VM_sign_convention.html",
  "type": "Section",
  "number": "8.2",
  "title": "Sign Conventions",
  "body": " Sign Conventions  When talking about internal forces our standard sign convention for forces and moments is not good enough. We can't, for instance, just call a vertical shear force positive if it points up and negative if it points down, because internal forces always occur in pairs so at any given point a shear force is both up and down. The direction of the internal force at a point depends on which side of the cut you're looking at.  So to define the state of internal forces at a point we need a better sign convention. Although the choice is somewhat arbitrary, agreeing on a standard sign convention allows us to have consistency across our calculations and to communicate the internal state clearly to others. The standard sign conventions defined here are used for internal loadings at a point and also for the shear and bending moment diagrams which are discussed in .  Be aware that although this new sign convention applies to internal forces, it doesn't change the sign convention for the equations of equilibrium at all, so you will continue to solve them in the same way you always have.  The standard sign convention used for shear force, normal force, and bending moment is shown below.   Positive Shear    Rectangular element illustrating that positive shear force tends to skew or shear the object.   William Haynes  CC-0    Positive shear forces tend to skew an object as shown, positive shear forces push down when looking from the right, and up when looking from the left.     Positive Normal Force    Rectangular element illustrating that positive normal forces tend to stretch the object.   William Haynes  CC-0    Positive normal forces tend to stretch the object.     Positive Bending Moment    Rectangular element illustrating that positive bending moments tend to deform an object with upward curvature.   William Haynes  CC-0    Positive bending moments tend to deform the object with an upward curvature.       We have defined positive internal forces by looking at the front side of the object. Would the results change if you walked around the object and analyzed it from the other side?   "
},
{
  "id": "VM_sign_convention-6",
  "level": "2",
  "url": "VM_sign_convention.html#VM_sign_convention-6",
  "type": "Question",
  "number": "8.2.1",
  "title": "",
  "body": " We have defined positive internal forces by looking at the front side of the object. Would the results change if you walked around the object and analyzed it from the other side?  "
},
{
  "id": "internal_force_at_point",
  "level": "1",
  "url": "internal_force_at_point.html",
  "type": "Section",
  "number": "8.3",
  "title": "Internal Forces at a Point",
  "body": " Internal Forces at a Point   This section covers the procedure to compute the internal normal force, shear force, and bending moment at a designated point in a multi-force rigid body.    Consider the frame shown in consisting of two-force members and , and multi-force members and . Since no information is provided, we can assume that the components have negligible weight. The internal loading within the two-force members is purely axial, but the multi-force members will be subject to the complete set of shear force, normal force, and bending moment.  To find the internal forces at a specified point within one of the members, we make an imaginary cut there.  shows the free-body diagram of member , with a proposed cut between points and . The free-body diagram is shown with reactions for pinned connections at and and forces from the two-force members at locations and .  We then separate the free-body diagram of the member into two independent free-body diagrams, one above the cut and one below. This is analogous to the Method of Sections technique of . The free-body diagrams for the two sections of the member are shown in . The three internal forces are exposed and labeled , , and . Either free-body diagram can be used to solve for the internal forces, so it is wise to choose the easier one. Recognizing which one is easier takes practice, but look for the piece with more known and fewer unknown values.  Note that the internal forces at the cut are drawn in the positive direction according to the sign conventions for internal forces, that they act in opposite direction either side of the cut, and they cancel out if the object is put back together.  This technique can be used to find the internal forces at any point within any object. In the examples below we will find the internal loadings at a specific point in load carrying beams.        A frame supporting a load at .   Vertical column pinned at its base and anchored by a cable to the ground. The column has a horizontal beam supported by an angled beam. A force F is applied at the end of the horizontal beam.   Dan Baker         Wavy line indicates the location of the imaginary cut.   FBD of the vertical column from previous image. The internal load will be determined at an imaginary \"cut\".   Dan Baker         Internal forces are exposed by the cut.   The two sections of the column from the previous figure are shown separated. Each is a FBD with the internal loads shown as reactions at each of the cut surfaces.   Dan Baker           Internal forces in a simply supported beam     A beam of length is supported by a pin at and a roller at and is subjected to a horizontal force applied to point and a uniformly distributed load over its entire length. The intensity of the distributed load is with units of [force\/length].    A beam of length L is supported by a pin at A on the left side and a roller at B on the right. It is subjected to a horizontal force F applied to point B and a uniformly distributed load over its entire length is w with units [force\/length].   Dan Baker       Find the internal forces at the midpoint of the beam.    At the midpoint of the beam,          Find the external reactions      Begin by drawing a free-body diagram of the entire beam, simplified by replacing the distributed load with an equivalent concentrated load at the centroid of the rectangle.    Dan Baker      The magnitude of the equivalent load is equal to the area under the rectangular loading curve.  Then apply and simplify the equations of equilibrium to find the external reactions at and .     Cut the beam  Cut the beam at the point of interest and separate the beam into two sections. Notice that as the beam is cut in two, the distributed load is cut as well. Each of these distributed load halves will support equivalent point loads of acting through the centroid of each cut half.    Dan Baker       Dan Baker       Add the internal forces  At each cut, a shear force, a normal force, and a bending moment will be exposed, and these need to be included on the free-body diagram.  At this point, we don't know the actual directions of the internal forces, but we do know that they act in opposite directions. We will assume that they act in the positive sense as defined by the standard sign convention .  Axial forces are positive in tension and act in opposite directions on the two halves of the cut beam.  Positive shear forces act down when looking at the cut from the right, and up when looking at the cut from the left. An alternate definition of positive shears is that the positive shears cause clockwise rotation. This definition is useful if you are dealing with a vertical column instead of a horizontal beam.   Bending moments are positive when the moment tends to bend the beam into a smiling U-shape. Negative moments bend the beam into a frowning shape.  For vertical columns, positive bending moments bend a beam into a C shape and negative into a backward C-shape.  The final free-body diagrams look like this.    Dan Baker     Horizontal beams should always have assumed internal loadings in these directions at the cut, indicating that you have assumed positive shear, positive normal force and positive bending moments at that point.    Solve for the internal forces  You may uses either FBD to find the internal forces using the techniques you have already learned. So, with a standard coordinate system, forces to the right or up are positive when summing forces and counter-clockwise moments are positive when summing moments.  Using the left free-body diagram and substituting in the reactions, we get:   Using the right side free-body diagram we get:        Regardless of which side is chosen, we get the same results for the internal forces at the chosen point.  When you solve for the internal forces, the results can be either positive, negative, or sometimes zero. Negative values indicate that the actual direction of the load is opposite to the assumed direction. Since we assumed all three internal forces were positive as defined by the standard sign convention , a negative answer means that the load actually acts in the opposite direction to the vector shown on the free-body diagram.   Internal forces in a cantilever beam    Consider a cantilever beam which is supported by a fixed connection at , and loaded by a vertical force and horizontal force at the free end . Determine the internal forces at a point a distance from the left end.   A cantilever beam is supported by a fixed connection at A on the left, and loaded by a vertical force P and horizontal force F at the free end on the right.   Dan Baker        If you think ahead, you may not need to find the reactions at .            Determine the reactions   Draw an FBD of the entire, uncut beam and determine the reactions.    Dan Baker      Notice that only the applied loads and support reactions are included on this uncut beam FBD . The internal forces are only exposed and shown on a FBD after the beam is cut.  Use this free-body diagram and the equations of equilibrium to determine the external reaction forces.     Section the beam  Take a cut at the point of interest and draw a FBD of either or both parts. Try to choose the simpler free-body diagram. If one side has no external reactions, then you can skip the previous step if you choose that side.    Dan Baker     The free-body diagrams of both portions have been drawn with the internal forces and moments drawn in the positive direction defined by the standard sign convention .  The axial force is shown in tension on both parts. This force has been named so its name doesn't conflict with the forces at point .  The shear force is positive when the shear is down on the right face of the cut and up on the left face.  The bending moment is positive if the bending direction would tend to bend the beam into a concave upward curve.  Always assume that the unknown internal forces act in the positive direction as defined by the standard sign convention.    Solve for the internal forces  Selecting the right hand diagram and solving for the unknown internal forces gives: . Solving the other free-body diagram would produce the same results  Once you have found the reactions and drawn a free-body diagram of the simpler portion with the normal force, shear force, and bending moment assumed positive, you then solve for the unknown values and signs just like any other equilibrium problem.       This workflow typically includes:  Establishing a horizontal and vertical coordinate system.  Taking a cut at the point of interest.  Assuming that the internal forces act in the positive direction and drawing a free-body diagram accordingly  Using , , and to solve for the three unknown internal forces.    The shear force , normal force , and bending moment are scalar components and they may be positive, zero, or negative depending on the applied loads. The signs of the scalar components together with the sign convention for internal forces establish the actual directions of the shear force, normal force and bending moment vectors.    Interactive Internal Forces  The internal forces and bending moments inside a beam depend on the load that the beam is supporting and differ from point to point. This simply supported beam supports a uniformly varying load. The interactive traces out the value of the shear and bending moment as you move point . Can you deduce the relation between the triangular loading and the value of the shear and bending moment?    Internal forces in a beam with a uniformly varying load.     "
},
{
  "id": "internal_force_at_point-2-2-2",
  "level": "2",
  "url": "internal_force_at_point.html#internal_force_at_point-2-2-2",
  "type": "Figure",
  "number": "8.3.1",
  "title": "",
  "body": "     A frame supporting a load at .   Vertical column pinned at its base and anchored by a cable to the ground. The column has a horizontal beam supported by an angled beam. A force F is applied at the end of the horizontal beam.   Dan Baker         Wavy line indicates the location of the imaginary cut.   FBD of the vertical column from previous image. The internal load will be determined at an imaginary \"cut\".   Dan Baker         Internal forces are exposed by the cut.   The two sections of the column from the previous figure are shown separated. Each is a FBD with the internal loads shown as reactions at each of the cut surfaces.   Dan Baker        "
},
{
  "id": "Chapter_08-example-internal-forces-in-a-simply-supported-beam",
  "level": "2",
  "url": "internal_force_at_point.html#Chapter_08-example-internal-forces-in-a-simply-supported-beam",
  "type": "Example",
  "number": "8.3.2",
  "title": "Internal forces in a simply supported beam.",
  "body": " Internal forces in a simply supported beam     A beam of length is supported by a pin at and a roller at and is subjected to a horizontal force applied to point and a uniformly distributed load over its entire length. The intensity of the distributed load is with units of [force\/length].    A beam of length L is supported by a pin at A on the left side and a roller at B on the right. It is subjected to a horizontal force F applied to point B and a uniformly distributed load over its entire length is w with units [force\/length].   Dan Baker       Find the internal forces at the midpoint of the beam.    At the midpoint of the beam,          Find the external reactions      Begin by drawing a free-body diagram of the entire beam, simplified by replacing the distributed load with an equivalent concentrated load at the centroid of the rectangle.    Dan Baker      The magnitude of the equivalent load is equal to the area under the rectangular loading curve.  Then apply and simplify the equations of equilibrium to find the external reactions at and .     Cut the beam  Cut the beam at the point of interest and separate the beam into two sections. Notice that as the beam is cut in two, the distributed load is cut as well. Each of these distributed load halves will support equivalent point loads of acting through the centroid of each cut half.    Dan Baker       Dan Baker       Add the internal forces  At each cut, a shear force, a normal force, and a bending moment will be exposed, and these need to be included on the free-body diagram.  At this point, we don't know the actual directions of the internal forces, but we do know that they act in opposite directions. We will assume that they act in the positive sense as defined by the standard sign convention .  Axial forces are positive in tension and act in opposite directions on the two halves of the cut beam.  Positive shear forces act down when looking at the cut from the right, and up when looking at the cut from the left. An alternate definition of positive shears is that the positive shears cause clockwise rotation. This definition is useful if you are dealing with a vertical column instead of a horizontal beam.   Bending moments are positive when the moment tends to bend the beam into a smiling U-shape. Negative moments bend the beam into a frowning shape.  For vertical columns, positive bending moments bend a beam into a C shape and negative into a backward C-shape.  The final free-body diagrams look like this.    Dan Baker     Horizontal beams should always have assumed internal loadings in these directions at the cut, indicating that you have assumed positive shear, positive normal force and positive bending moments at that point.    Solve for the internal forces  You may uses either FBD to find the internal forces using the techniques you have already learned. So, with a standard coordinate system, forces to the right or up are positive when summing forces and counter-clockwise moments are positive when summing moments.  Using the left free-body diagram and substituting in the reactions, we get:   Using the right side free-body diagram we get:       "
},
{
  "id": "Chapter_08-example-internal-forces-in-a-cantilever-beam",
  "level": "2",
  "url": "internal_force_at_point.html#Chapter_08-example-internal-forces-in-a-cantilever-beam",
  "type": "Example",
  "number": "8.3.3",
  "title": "Internal forces in a cantilever beam.",
  "body": " Internal forces in a cantilever beam    Consider a cantilever beam which is supported by a fixed connection at , and loaded by a vertical force and horizontal force at the free end . Determine the internal forces at a point a distance from the left end.   A cantilever beam is supported by a fixed connection at A on the left, and loaded by a vertical force P and horizontal force F at the free end on the right.   Dan Baker        If you think ahead, you may not need to find the reactions at .            Determine the reactions   Draw an FBD of the entire, uncut beam and determine the reactions.    Dan Baker      Notice that only the applied loads and support reactions are included on this uncut beam FBD . The internal forces are only exposed and shown on a FBD after the beam is cut.  Use this free-body diagram and the equations of equilibrium to determine the external reaction forces.     Section the beam  Take a cut at the point of interest and draw a FBD of either or both parts. Try to choose the simpler free-body diagram. If one side has no external reactions, then you can skip the previous step if you choose that side.    Dan Baker     The free-body diagrams of both portions have been drawn with the internal forces and moments drawn in the positive direction defined by the standard sign convention .  The axial force is shown in tension on both parts. This force has been named so its name doesn't conflict with the forces at point .  The shear force is positive when the shear is down on the right face of the cut and up on the left face.  The bending moment is positive if the bending direction would tend to bend the beam into a concave upward curve.  Always assume that the unknown internal forces act in the positive direction as defined by the standard sign convention.    Solve for the internal forces  Selecting the right hand diagram and solving for the unknown internal forces gives: . Solving the other free-body diagram would produce the same results  Once you have found the reactions and drawn a free-body diagram of the simpler portion with the normal force, shear force, and bending moment assumed positive, you then solve for the unknown values and signs just like any other equilibrium problem.      "
},
{
  "id": "ggb_internal_loading",
  "level": "2",
  "url": "internal_force_at_point.html#ggb_internal_loading",
  "type": "Figure",
  "number": "8.3.4",
  "title": "",
  "body": " Internal forces in a beam with a uniformly varying load.   "
},
{
  "id": "VM_diagrams",
  "level": "1",
  "url": "VM_diagrams.html",
  "type": "Section",
  "number": "8.4",
  "title": "Shear and Bending Moment Diagrams",
  "body": " Shear and Bending Moment Diagrams   Beams are structural elements primarily designed to support vertical loads. When designing a beam it is important to locate the points of maximum shear and maximum moment and their magnitudes because that's where the beam is most likely to fail. To find these critical points, we need to check the shear force and bending moment at every point along the beam's full length.  The previous section presented a method to find the shear and bending moment at a single point, which is useful; but in order to find the shear and moment at every point in the object you will need a more powerful approach. This can be done by creating a shear and bending moment diagram. This section will discuss three related but different methods to produce shear and bending moment diagrams, and conclude with a comparison of the advantages and disadvantages of each approach.    Shear and Bending Moment Diagrams  Shear and moment diagrams are graphs which show the internal shear and bending moment plotted along the length of the beam. They allow us to see where the maximum loads occur so that we can optimize the design to prevent failures and reduce the overall weight and cost of the structure.  Since beams primarily support vertical loads the axial forces are usually small, so they will not be considered in this section.  Beams can be supported in a variety of ways as shown in . The common support methods are  Simply Supported Supported by a pin on one end and a roller at the other.  Cantilevered Fixed at one end, and unsupported at the other.  Overhanging One or both ends overhang the supports.      Beam Supports    Simply Supported   Simply supported beam.   Dan Baker       Cantilevered   Cantilevered beam.   Dan Baker       Overhanging   Overhanging beam.   Dan Baker         "
},
{
  "id": "Chapter_08-shear-and-bending-moment-diagrams-4",
  "level": "2",
  "url": "VM_diagrams.html#Chapter_08-shear-and-bending-moment-diagrams-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simply Supported Cantilevered Overhanging "
},
{
  "id": "beam_supports",
  "level": "2",
  "url": "VM_diagrams.html#beam_supports",
  "type": "Figure",
  "number": "8.4.1",
  "title": "",
  "body": " Beam Supports    Simply Supported   Simply supported beam.   Dan Baker       Cantilevered   Cantilevered beam.   Dan Baker       Overhanging   Overhanging beam.   Dan Baker       "
},
{
  "id": "section_cut_method",
  "level": "1",
  "url": "section_cut_method.html",
  "type": "Section",
  "number": "8.5",
  "title": "Section Cut Method",
  "body": " Section Cut Method  In this section we'll extend the method of where we found the shear force and bending moment at a specific point to make shear and bending moment diagrams. The procedure is similar except that the cut is taken at a variable position designated by instead of at a specified point. The analysis produces equations for shear and bending moments as functions of . Shear and bending moment diagrams are plots of these equations, and the internal forces at any particular point can be found by substituting the point's location into the equations.   As an example, we will use a cantilevered beam fixed to a wall on its left end and subject to a vertical force on its right end as an example. Global equilibrium requires that the reactions at the fixed support at are a vertical force , and a counter-clockwise moment .   Cantilevered beam of length L fixed to a wall at A on its left end and subject to a vertical force P on its right end.    By taking a cut at a distance from the left we can draw two free-body diagrams with lengths and . This beam has one loading segment, because no matter where is chosen, the free-body diagrams shown in (b) and (c) are correct. The internal loadings are named and to indicate that they are functions of .      Cut at position .   FBD of system from previous figure, with an imaginary cut at some distance x from the left end.     Left FBD .   FBD of the left side of the beam.     Right FBD .   FBD of the right side of the beam.      To find the shear and bending moment functions, we apply the equilibrium to one of the free-body diagrams. Either side will work, so we'll select the right-hand portion as it doesn't require us to find the reactions at . Letting be the length of the beam and the length of the right portion, we find       The same FBD of the right side of the beam.    The plots of the equations for and are shown below in . These equations indicate that the shear force is constant over the length of the beam and the moment is a linear function of the position of the cut, starting at at and linearly increasing to zero at . Note that the graphs are only valid from , so the curves outside this range is show as dotted lines. These two graphs are usually drawn stacked beneath the diagram of the beam and loading.   Shear and Bending Moment Diagrams    vs.   Shear diagram for the previous FBD. V(x)=P from x=0 to x=L.     vs.   Moment diagram for the previous FBD. M(x) starts at (0,-PL) and ends at (L,0).      The previous example was simple because only one FBD was necessary for any point on the beam, but many beams are more complex. Beams with multiple loads must be divided into loading segments between the points where loads are applied or where distributed loads begin or end.   Consider the simply supported beam with a uniformly distributed load over the first segment from to , and two vertical loads and .   Simply supported beam AD of length 3 units with a uniformly distributed load w from A to B (1 unit length). Two vertical loads are at B and at C (1 unit to the right of B).    This beam has three loading segments so you must draw three free-body diagrams and analyze each segment independently. For each, make an imaginary cut through the segment, then draw a new free-body diagram of the portion to the left (or right) of the cut. Always assume that the exposed internal shear force and internal bending moment act in the positive direction according to the sign convention .        FBD of the simply supported beam to determine V(x) and M(x) for 0 less than x less than 1.       FBD of the simply supported beam to determine V(x) and M(x) for 1 less than x less than 2.       FBD of the simply supported beam to determine V(x) and M(x) for 2 less than x less than 3.      After the equilibrium equations are applied to each segment, the resulting equations and from each segment are joined to plot the shear and moment diagrams. These diagrams help us visualize the values of and throughout the beam.   "
},
{
  "id": "cuts_1",
  "level": "2",
  "url": "section_cut_method.html#cuts_1",
  "type": "Figure",
  "number": "8.5.1",
  "title": "",
  "body": "    Cut at position .   FBD of system from previous figure, with an imaginary cut at some distance x from the left end.     Left FBD .   FBD of the left side of the beam.     Right FBD .   FBD of the right side of the beam.     "
},
{
  "id": "vm-cantilever",
  "level": "2",
  "url": "section_cut_method.html#vm-cantilever",
  "type": "Figure",
  "number": "8.5.2",
  "title": "",
  "body": " Shear and Bending Moment Diagrams    vs.   Shear diagram for the previous FBD. V(x)=P from x=0 to x=L.     vs.   Moment diagram for the previous FBD. M(x) starts at (0,-PL) and ends at (L,0).     "
},
{
  "id": "section_cut_method-13",
  "level": "2",
  "url": "section_cut_method.html#section_cut_method-13",
  "type": "Figure",
  "number": "8.5.3",
  "title": "",
  "body": "      FBD of the simply supported beam to determine V(x) and M(x) for 0 less than x less than 1.       FBD of the simply supported beam to determine V(x) and M(x) for 1 less than x less than 2.       FBD of the simply supported beam to determine V(x) and M(x) for 2 less than x less than 3.     "
},
{
  "id": "VM_relations",
  "level": "1",
  "url": "VM_relations.html",
  "type": "Section",
  "number": "8.6",
  "title": "Relation Between Loading, Shear and Moment",
  "body": " Relation Between Loading, Shear and Moment  Suppose that we have a simply supported beam upon which there is an applied load which is distributed on the beam by some function of position, , as shown in .   A simply supported beam with a distributed load that is a function of beam position .   A simply supported beam with a distributed load that is a function of beam position. A segment is indicated with imaginary cuts at x and at x+delta x.   Dan Baker      If we select a small section of this beam from to to look at closely, we have the free-body diagram shown in .    A free-body diagram of a small section of the beam with a width of   FBD of the small segment delta x, with shear and bending moments indicated on the \"cut\" surfaces.   Dan Baker      Since is infinitely narrow, we can assume that the distributed load over this small distance is constant and equal to the value at , and call it .  Applying the force equilibrium in the vertical direction gives the following result:   Taking the limit of both sides as approaches 0, we get this important result    This equation tells us that, at a given location , the slope of the shear function there is the value of the loading directly above, . Furthermore, if we multiply both sides by , we can integrate to find that    In words, this equation says that over a given distance, the change in the shear between two points is the area under the loading curve between them.  Now looking at the internal bending moments on the FBD in , when we apply moment equilibrium about the centroid of the element, and take the limit similarly,      This final equation tells us that, the slope of the moment diagram is the value of the shear. Furthermore, if we multiply both sides by , we can integrate to find that    In words, this equation says that over a given segment, the change in the moment value is the area under the shear curve.  Hence, the functional relationships between the internal shear force , internal bending moment at a point , and the value of the loading at that point are simply the derivatives and integrals that you learned in Calculus I. These relationships are summarized below.   The slope of the shear function at is the value of the loading function at the same position. An upward load is considered a positive load.     The change in the shear value between two points is the area under the loading function between those points.     The slope of the moment function at is the value of the shear at the same position.     The change in the moment value between two points is the area under the shear curve between those points.     Shear and bending moment diagrams show the effect of the load on the internal forces within the beam and are a graphical representation of equations . The diagrams are made up of jumps, slopes and areas as a result of the load.  Jumps are vertical changes in shear and moment diagrams.  Slopes are gradual changes in shear and moment diagrams. Positive slopes go up and to the right.  Areas are areas under the loading and shear curves, integration. The area under the loading curve is actually the force, and the area under the shear curve is actually the bending moment.     Effect of load on shear and bending moments.         Diagram    Jumps    Slopes    Areas      Shear    Concentrated forces cause the shear diagram to jump by the same amount. Upward loads cause upward jumps.  Concentrated moments on the beam have no effect on the shear diagram.    The slope of the shear diagram at a point is equal to the value of the distributed load above that point. A downward distributed load will give the shear diagram a negative slope.    The change in the shear between two points is equal to the corresponding area under the loading curve.      Moment    Concentrated moments cause jumps on the moment curve. Counterclockwise moments cause downward jumps and vice-versa.    The slope of the moment diagram at a point is equal to the value of shear at that point. A positive shear causes a positive slope on the moment diagram and vice-versa.    Change in the moment between two points is equal to the corresponding area under a shear curve.      You can use the interactive below to explore how changes to concentrated load and distributed load affects the slopes, jumps, and areas of the resulting shear and bending moment diagrams.   Building Blocks for Shear and Moment Diagrams    "
},
{
  "id": "arbitrary-load-ex0",
  "level": "2",
  "url": "VM_relations.html#arbitrary-load-ex0",
  "type": "Figure",
  "number": "8.6.1",
  "title": "",
  "body": " A simply supported beam with a distributed load that is a function of beam position .   A simply supported beam with a distributed load that is a function of beam position. A segment is indicated with imaginary cuts at x and at x+delta x.   Dan Baker     "
},
{
  "id": "arbitrary-load-ex1",
  "level": "2",
  "url": "VM_relations.html#arbitrary-load-ex1",
  "type": "Figure",
  "number": "8.6.2",
  "title": "",
  "body": " A free-body diagram of a small section of the beam with a width of   FBD of the small segment delta x, with shear and bending moments indicated on the \"cut\" surfaces.   Dan Baker     "
},
{
  "id": "VM_relations-27",
  "level": "2",
  "url": "VM_relations.html#VM_relations-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Jumps Slopes Areas "
},
{
  "id": "VM_summary",
  "level": "2",
  "url": "VM_relations.html#VM_summary",
  "type": "Table",
  "number": "8.6.3",
  "title": "Effect of load on shear and bending moments.",
  "body": " Effect of load on shear and bending moments.         Diagram    Jumps    Slopes    Areas      Shear    Concentrated forces cause the shear diagram to jump by the same amount. Upward loads cause upward jumps.  Concentrated moments on the beam have no effect on the shear diagram.    The slope of the shear diagram at a point is equal to the value of the distributed load above that point. A downward distributed load will give the shear diagram a negative slope.    The change in the shear between two points is equal to the corresponding area under the loading curve.      Moment    Concentrated moments cause jumps on the moment curve. Counterclockwise moments cause downward jumps and vice-versa.    The slope of the moment diagram at a point is equal to the value of shear at that point. A positive shear causes a positive slope on the moment diagram and vice-versa.    Change in the moment between two points is equal to the corresponding area under a shear curve.     "
},
{
  "id": "VM_building_blocks",
  "level": "2",
  "url": "VM_relations.html#VM_building_blocks",
  "type": "Figure",
  "number": "8.6.4",
  "title": "",
  "body": " Building Blocks for Shear and Moment Diagrams   "
},
{
  "id": "graphical_method",
  "level": "1",
  "url": "graphical_method.html",
  "type": "Section",
  "number": "8.7",
  "title": "Graphical Method",
  "body": " Graphical Method  If you have a firm grasp on the relations between load, shear and bending moments , the graphical method is a quick and intuitive way to draw shear and moment diagrams. This technique is really a graphical integration process; you integrate from load to shear to moment , from top to bottom, or differentiate from bottom to top.  Shear and bending moment diagrams are governed by equations and must be consistent with them.   Shear and bending moment diagram problems should include:  A neat, accurate, labeled free-body diagram of the entire structure, and the work to find the reactions. For this work, you may replace the distributed loads with equivalent concentrated loads.  A neat, properly scaled diagram of the beam showing its reactions and true loads. Distributed loads must be shown this diagram, because their distributed nature is significant.  A large graph of the shear and bending moment functions drawn directly below the scaled beam diagram. It is convenient to draw this graph on graph paper.  The correct shape and curvature for each curve segment: zero, constant slope, polynomial. Changes in curve shapes should align with the load which causes them. Indicate the scale used for shear and moment, and use a straightedge.  Values of shear and moment at maximums, minimums and points of inflection.  Any other work need to justify your results.    You can draw shear and bending moments efficiently and accurately using this procedure  First, determine the reaction forces and moments by drawing a free-body diagram of the entire beam and applying the equilibrium equations. Double check that your reactions are correct.  Establish the shear graph with a horizontal axis below the beam and a vertical axis to represent shear. Positive shears will be plotted above the axis and negative below.  Make vertical lines at all the interesting points , points where concentrated forces or moments act on the beam and at the beginning and end of any distributed loads. This divides the beam into segments between vertical lines.    Draw the shear diagram by starting with a dot at , then proceeding from left to right until you reach the end of the beam. Choose and label a scale which keeps the diagram a reasonable size.  Whenever you encounter a concentrated force, jump up or down by that value  Whenever you encounter a concentrated moment, do not jump.  Whenever you encounter a distributed load, move up or down by the area under the loading curve over the length of the segment, according to equation . The area is actually a force.  The slope of the curve at each point is given by . Distributed loads cause the shear diagram to have a slope equal to value of the distributed load at that point. For unloaded segments of the beam, the slope is zero, i.e. the shear curve is horizontal. For segments with uniformly distributed load, the slope is constant. Downward loads cause downward slopes.  The shear diagram should start and end at . If it doesn't, recheck your work.     Add another interesting point wherever the shear diagram crosses the -axis, and determine the position of the zero crossing.  After you have completed the shear diagram, calculate the area under the shear curve for each segment. Areas above the axis are positive, areas below the axis are negative. The areas represent moments and the sum of the areas plus the values of any concentrated moments should add to zero. If they don't, then recheck your work.  Establish the moment graph with a horizontal axis below the shear diagram and a vertical axis to represent moment. Positive moments will be plotted above the axis and negative below.    Draw and label dots on the moment diagram by starting with a dot at then proceed from left to right placing dots until you reach the end of the beam. As you move over each segment move up or down from the current value by the area under the shear curve for that segment and place a dot on the graph. In this step, you are applying .  Positive areas cause the moment to increase, negative areas cause it to decrease.  If you encounter a concentrated moment, jump straight up or down by the amount of the moment and place a dot. Clockwise moments cause upward jumps and counter-clockwise moments cause downward jumps.  When you reach the end of the beam you should return to . If you don't, then recheck your work.     Connect the dots with correctly shaped lines . Segments under constant shear are straight lines, segments under changing shear are curves. The general curvature of the lines can be determined by considering equation .    "
},
{
  "id": "integration_method",
  "level": "1",
  "url": "integration_method.html",
  "type": "Section",
  "number": "8.8",
  "title": "Integration Method",
  "body": " Integration Method   In we learned that loading, shear and bending moments are related by integral and differential equations, and used this knowledge to draw shear and bending moment diagram suing a graphical approach. This method is easy and fast in cases when you can easily calculate the areas under the loading and shear curves without integration. Beams consisting of point and uniformly distributed loads only do not require the use of the calculus method.  However, there are times that the graphical technique falls short when the areas are more complicated than rectangles or triangles. For example, a uniformly varying load, which is a first degree linear function of , integrates to a second degree parabolic shear function, and a third degree cubic moment function. To use the graphical method you would need to find the area under the parabolic shear curve to compute the cubic moment. When the loading becomes more complex it is better to use perform the integration directly.  We will use fundamental equations and to find the shear and bending moment functions but instead of finding areas and slopes using geometry, we will integrate the load function to find the , then integrate that result to find the .  These results are the change in shear and moment over a segment; to find the actual shear and moment functions and for the entire beam we will need to find initial values for each segment. This is equivalent to using boundary conditions to find the constant of integration when solving a differential equation. The initial values come from either the final value of the previous segment or from point loads or point moments. Because of the requirement for these segment starting values, no segment can be computed in isolation from the other segments. Physically this means that the shear and moment along a beam are not just due to the loading in one segment, but are related to the loading on the rest of the beam as well.    Determining Loading Functions  Before you can find shear and bending moment functions with integration you must know the equation for the load on each segment of the beam. These equations may be given in the problem statement if you're lucky, or you may have to determine them from a loading diagram.  When determining equations for loading segments, you may choose either global equations , where all segments use the same origin, usually at the left end of the beam, or local equations , where each segment uses its own origin, usually at the left end of the segment. Often local equations are easier because you can simply use the variable in your equations as opposed to + constant , and you do not have to project the -intercept values back to an axis system which is not adjacent to the segment. See interactive to explore the difference between local and global equations.  When determining equations for the loading segments from the load diagram, consider the following.   No load  Whenever there is no load at all on a segment there will be no change in the shear on the segment. On such sections the loading function is . Note that this can only occur when the weight of the beam itself is neglected.    Point Load  A point load is a concentrated force acting at a single point which causes a jump in the shear diagram.    Uniformly Distributed Load  A uniformly distributed load is constant over the segment and results in a linear slope, either a triangle or a trapezoid, on the shear diagram. The loading function on such sections is . The constant value is negative if the load points down, and positive if it points upward.    Uniformly Varying Load  In this case the loading function is a straight, sloping lie forming a triangle or trapezoidal shape. The resulting shear function is parabolic. The general form of these functions are . The slope , intercept , and constant must be determined from the situation, and will depend on whether you are writing a global or local equation.    Arbitrary Load  The loading function will be a given function of . , and the shear and moment functions are found by integration.  Most gravitational distributed loads are drawn with the arrows pointing down and resting on the beam. If you slide these along their line of action so that their tails are on the beam, the tips define the loading equation.     This interactive compares the local and global equations for a beam segment with a uniformly varying load.   Global vs. Local coordinate systems.        Application of the Calculus Method  You can either use this method from the start or use the graphical method until you need areas of shapes more complicated than rectangles and triangles.     You will need to have solved the loading segment to the left of your desired segment.    Write an equation for the loading in the segment using either local or global coordinates.    Integrate the loading equation to find the change in the shear and include the shear value at the beginning of your loading segment including the influence of any point loads at that location, which is equivalent to the integration constant.    Integrate the shear equation to find the change in the bending moment and include the moment value at the beginning of your loading segment including the influence of any point couple-moments at that location, equivalent to the integration constant.    To find maximum shear and bending moments, recall from calculus that the local maximum\/minimum points of a function occur at the endpoints and where the function's first derivative is equal to zero.   For shear, evaluate the shear function at the ends and where ever the load function crosses the axis.    For bending moments, find the roots of the shear function by solving , then evaluate the moment function at these points, and also at the endpoints.   The critical values we are looking for are the points where the magnitudes of the shear and bending moment are maximum. The direction of the internal forces is not usually significant.      Example    Use the integration method to find the equations for shear and moment as a function of , for a simply supported beam carrying a uniformly distributed load over its entire length .   Simply supported beam carrying a uniformly distributed load w over its entire length L.            This beam has only one load section, and on that section the load is constant so, . There is a pinned connection at which provides a vertical force and no concentrated moment, so the initial conditions there are , and .  Integrating equations and we have.                 "
},
{
  "id": "ggb_global_local",
  "level": "2",
  "url": "integration_method.html#ggb_global_local",
  "type": "Figure",
  "number": "8.8.1",
  "title": "",
  "body": " Global vs. Local coordinate systems.   "
},
{
  "id": "Chapter_08-example-example",
  "level": "2",
  "url": "integration_method.html#Chapter_08-example-example",
  "type": "Example",
  "number": "8.8.2",
  "title": "Example.",
  "body": " Example    Use the integration method to find the equations for shear and moment as a function of , for a simply supported beam carrying a uniformly distributed load over its entire length .   Simply supported beam carrying a uniformly distributed load w over its entire length L.            This beam has only one load section, and on that section the load is constant so, . There is a pinned connection at which provides a vertical force and no concentrated moment, so the initial conditions there are , and .  Integrating equations and we have.               "
},
{
  "id": "Chapter_08-geogebra-interactives",
  "level": "1",
  "url": "Chapter_08-geogebra-interactives.html",
  "type": "Section",
  "number": "8.9",
  "title": "Geogebra Interactives",
  "body": " Geogebra Interactives   You can use the interactives below to practice drawing shear and bending moment diagrams. You can change the position of the loads and change their magnitudes and observe how the diagrams change, or you can click New Problem to generate a new problem.  After exploring the diagrams and seeing how they relate to each other, turn off the solutions and try for yourself. You will very likely see problems like these on an exam.    Concentrated Forces     Concentrated Force and Moment     Distributed Load     Combination Load     Arbitrary Load    "
},
{
  "id": "Chapter_08-summary",
  "level": "1",
  "url": "Chapter_08-summary.html",
  "type": "Section",
  "number": "8.10",
  "title": "Summary",
  "body": " Summary  You have likely realized that in engineering (and life) that there are multiple ways to solve a problem. The four different techniques to compute internal forces discussed in this chapter are a demonstration of this. In the end, the choice of which method to use is yours; the better you know each method the easier it will be to choose the one which is most applicable and efficient.  The list below summarizes each of the four approaches and their advantages and disadvantages.   Summary of Methods to find Internal Loadings.   In we exposed the internal forces at a specific point inside a rigid body by taking a cut at that location and applying the equilibrium equations. This approach is computationally efficient, works for any rigid body and takes advantage of tools you have learned in previous chapters. It requires knowledge of sign conventions for internal shear and bending moments, but only reveals values at the selected point.  In we generalized the previous approach by taking a cut at a variable location, and analyzed the equilibrium equations in terms of . The results were functions which describe shear and moment at every point within the beam, rather than at a specific location. This method requires breaking a beam into loading segments and writing and solving equations for each segment. The equations are then plotted to give shear and bending moment diagrams.  In we used the mathematical relationships between loading, shear, and bending moment to draw shear and moment diagrams directly. The method is quick and requires only a few simple computations to determine the critical values. The approach provides many cross-checks for accuracy. It is most suitable for beams loaded with concentrated forces, concentrated moments, and uniformly distributed loads, but is not usually suitable for more complex distributed loads. It is essential to have a solid grasp of the integral and differential relations between loading, shear and moment discussed in to use this method.  In we discussed the most general approach to determine internal loads. In the approach, the load is described as a piecewise function of , which is integrated twice to develop equations for shear and moment. This method can used for arbitrarily complicated loading distributions, and can be used by software solutions. Applying this method by hand requires accurate integration and differentiation, and application of boundary conditions.    "
},
{
  "id": "Chapter_08-summary-4",
  "level": "2",
  "url": "Chapter_08-summary.html#Chapter_08-summary-4",
  "type": "List",
  "number": "8.10.1",
  "title": "Summary of Methods to find Internal Loadings.",
  "body": " Summary of Methods to find Internal Loadings.   In we exposed the internal forces at a specific point inside a rigid body by taking a cut at that location and applying the equilibrium equations. This approach is computationally efficient, works for any rigid body and takes advantage of tools you have learned in previous chapters. It requires knowledge of sign conventions for internal shear and bending moments, but only reveals values at the selected point.  In we generalized the previous approach by taking a cut at a variable location, and analyzed the equilibrium equations in terms of . The results were functions which describe shear and moment at every point within the beam, rather than at a specific location. This method requires breaking a beam into loading segments and writing and solving equations for each segment. The equations are then plotted to give shear and bending moment diagrams.  In we used the mathematical relationships between loading, shear, and bending moment to draw shear and moment diagrams directly. The method is quick and requires only a few simple computations to determine the critical values. The approach provides many cross-checks for accuracy. It is most suitable for beams loaded with concentrated forces, concentrated moments, and uniformly distributed loads, but is not usually suitable for more complex distributed loads. It is essential to have a solid grasp of the integral and differential relations between loading, shear and moment discussed in to use this method.  In we discussed the most general approach to determine internal loads. In the approach, the load is described as a piecewise function of , which is integrated twice to develop equations for shear and moment. This method can used for arbitrarily complicated loading distributions, and can be used by software solutions. Applying this method by hand requires accurate integration and differentiation, and application of boundary conditions.   "
},
{
  "id": "Chapter_08-13",
  "level": "1",
  "url": "Chapter_08-13.html",
  "type": "Exercises",
  "number": "8.11",
  "title": "Exercises (Ch. 8)",
  "body": " Exercises (Ch. 8)   "
},
{
  "id": "Chapter_09-dry-friction",
  "level": "1",
  "url": "Chapter_09-dry-friction.html",
  "type": "Section",
  "number": "9.1",
  "title": "Dry Friction",
  "body": " Dry Friction    Which types of friction do we study in statics, and which are studied elsewhere?  What is a normal force?  What is impending motion ?  How do you decide when you can use the equation and when you can not?  Can you show graphically how friction and normal force vectors are related to the friction resultant vector and the friction angle at impending motion?  What is the friction angle ?  Why is a distributed normal force represented as a point force that moves as the normal force shifts?     Dry Friction  Dry friction, also called Coulomb friction , is a force which appears between two solid surfaces in contact. This force is distributed over the contact area and always acts in whichever direction opposes relative motion between the surfaces. We will usually simplify the distributed frictional force by representing it as a single concentrated force acting at a point, as we did in .  Depending on the details of the situation, dry friction will either hold the object in equilibrium, in which case it is called static friction , or it will retard but not prevent motion, in which case it is called kinetic friction .  Consider the football training sled shown in . Initially, the sled's weight is supported by a normal force acting on the bottom surface that can be considered as a point force directly beneath the center of gravity; there is no friction force.  When players begin to push the sled, a friction force will appear along the bottom surface which opposes sliding to the right. Both the friction and normal forces can be represented by concentrated horizontal and vertical forces located to the right of the center of gravity. This offset is required to maintain rotational equilibrium against the pushing force. If the players push hard enough, equilibrium will break and the sled will begin to slide in the direction of the push. At this point static friction has transitioned to kinetic friction.   Static friction holds an object stationary, up to the point of impending motion. Kinetic friction applies to sliding objects.    Training sled   Photo of a football training sled.   Avenue  CC-BY-SA      Free-body diagram   Schematic of a football training sled. If sled is pushed to the right, friction opposes impending motion and acts to the left. The weight acts down through the centroid, and the normal force acts up at some point on the bottom of the sled, depending on the relative force values.   William Haynes        The rolling friction acting on the motorcycle in is more complicated. Both wheels rotate clockwise, but the rear wheel is driven by the engine and chain, while the front wheel is rotated by the road friction. The friction force on the rear tire acts to the right and is what propels the bike forward. The dry friction on the front tire acts to the left and retards the motion of the motorcycle.    Rolling friction occurs where the tires contact the road.    A motorcycle   Photo of a person riding a motorcycle.        Free-body diagram   Free body diagram of motorcycle and rider driving to the right. Drive friction on the rear tire opposes the motion of the rear wheel with respect to the ground, i.e. driving the motorcycle forward. Rolling resistance of the front tire acts to the left. The weight acts down through the centroid, and a normal force acts up on each tire.   Dan Baker         Statically Equivalent Loadings  The force distribution on the bottom of an object being pushed across a surface is complex, and looks approximately like (a).  To simplify things, we first decompose the actual force into a distributed normal force perpendicular to the surface, and a distributed friction force parallel to the surface, as shown in the (b). These two distributions are further simplified into two concentrated forces representing the normal and friction components of a single resultant force, as show in (c). The net resultant force acts at the point required for equilibrium.   Equivalent representation of friction and normal forces.        whaynes@maritime.edu          whaynes@maritime.edu          whaynes@maritime.edu           Coulomb Friction  The Coulomb friction model proposes that the force of friction is proportional to the normal force, where the normal force is the force acting perpendicular to the contacting surface. The constant of proportionality, , is called the friction coefficient. is always greater than zero and commonly less than one. The friction coefficient can be greater than one for materials that exhibit positive adhesion to each other like silicone rubber, glued surfaces, or gecko's feet.      Block on rough surface.     FBD showing normal and friction forces.      Friction has two distinct regions as shown in , and the value of is different in each region. The region from point one to point two, where the force of friction increases linearly with load is called the static friction region. Here you must use the coefficient of static friction . The region from point two to point three, where the friction remains roughly constant is called the kinetic friction region. In this region you must use the coefficient of kinetic friction .   Phases of Coulomb friction.    The coefficient of friction suddenly drops at point two, causing the friction force to drop as well. Point two is called the point of impending motion , because here the situation is unstable. If the applied force increases ever so slightly, the opposing friction force suddenly decreases and the object begins to move.  To better understand the behavior of Coulomb friction imagine an object resting on a rough surface as shown in . When force is gradually increased from zero, the normal force and the frictional force both change in response. Initially both and are zero and the object is in equilibrium. The interaction between the two surfaces in contact means that friction is available but it is not engaged .  As increases, the opposing friction force increases as well to match and hold the object in equilibrium. In this static-but-not-impending phase .  When reaches point two, motion is impending because friction has reached its maximum value. . If force increases slightly beyond , the friction force suddenly drops to the kinetic value . The applied force exceeds the frictional force breaking equilibrium and causing the object to accelerate, and accelerating bodies are beyond the scope of Statics!  Notice that static friction at impending motion is greater than kinetic friction, because the coefficient for most materials. Practically, this tells us that once a material starts to move it is easier to keep moving than it was to get it started from rest.  If you wonder why we include kinetic friction in a statics course, remember that a sliding body moving at constant velocity is in equilibrium.    Friction Angle and Friction Resultant  Recall that a resultants is the sum of two or more vectors. The friction resultant is the vector sum of the friction and normal forces. Since these two forces are perpendicular, the magnitude of the friction resultant can be found using the Pythagorean theorem.  The friction angle is defined as the angle between the friction resultant and the normal force. At impending motion, the friction angle reaches its maximum value. The friction resultant and friction angle are used for screw, flexible belt, and journal bearing type problems.  The maximum friction angle is directly related to the coefficient of static friction since the friction angle is the internal angle of the right triangle formed by the normal force , the friction resultant , and the friction force . Hence:  In a block of weight is pushed sideways by force . The reaction forces can be represented as separate friction and normal forces, or as combined friction force acting at friction angle , measured from the normal direction.      Force components.   A block of weight W is pushed to the right by force P. Normal force N acts up and friction force Ff acts to the left.        Resultant and Friction angle.   N and Ff resolved into force R at angle phi from normal direction.             Normal Forces  The normal force supporting the object is distributed over the entire contact surface, however it is common on two dimensional problems to replace the distributed force with an equivalent concentrated force acting at a particular spot on the contacting surface, as we did in . This point is rarely at the exact center of the contact surface.  This is illustrated in where we see in that an object at rest has a uniformly distributed normal force along the bottom surface and the resultant normal force is located directly below the weight. The friction force is not engaged. When a pushing force is applied, the distributed normal force changes shape, and the resultant normal force shifts to the right to maintain equilibrium. The resultant normal force continues to shift to the right the harder you push.  This can be understood from the principle of a two-force body. As we discussed previously , the combined push and weight can be represented a single load acting down and to the right. The friction and normal forces can be combined into a single reaction force acting up and to the left at a point on the bottom surface. These two forces must share the same line of action to maintain equilibrium, so as the pushing force increases, the friction angle changes and the point shifts to the right. If the point shifts off the physical object then the required friction is greater than the friction available and motion begins.   Distributed Normal force changes with load and weight.       Coulomb Friction Examples.   Static, but not impending motion  For these problems is independent of so you will need one additional piece of data in order to solve for both and since you will not be able to apply the equation . The problem statement will use words like sitting , static or at rest , but no extremal language like maximum . The reaction can be modeled as a pin reaction, and then possibly checked to confirm .    A moment of is applied to a wheel held static by a brake arm. What is the friction force between the wheel and the brake arm?      A box sits on a slope, find the resultant of the friction and normal forces on the box.      Impending motion  In this case, the friction force will be given by . The problem statement will mention maximum or minimum values.    What is the maximum force applied to the box before it will start to move?      What is the minimum coefficient of static friction that will keep the box static? What is the lightest box which will not slip or tip on this slope?      What is the lightest box which will not slip or tip on this slope?      Kinetic friction  In these problems, . The problem statement will say that the body is moving at a constant velocity.    A box is sliding down a 20 slope, what is the coefficient of friction to keep the velocity constant?      A rope slips over a surface at constant velocity, what is the contact angle of the rope?      "
},
{
  "id": "Chapter_09-dry-friction-2",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-dry-friction-2",
  "type": "Key Questions",
  "number": "9.1",
  "title": "",
  "body": "  Which types of friction do we study in statics, and which are studied elsewhere?  What is a normal force?  What is impending motion ?  How do you decide when you can use the equation and when you can not?  Can you show graphically how friction and normal force vectors are related to the friction resultant vector and the friction angle at impending motion?  What is the friction angle ?  Why is a distributed normal force represented as a point force that moves as the normal force shifts?   "
},
{
  "id": "Chapter_09-dry-friction-3-2",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-dry-friction-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coulomb friction "
},
{
  "id": "Chapter_09-dry-friction-3-3",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-dry-friction-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "static friction kinetic friction "
},
{
  "id": "sled_AA",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#sled_AA",
  "type": "Figure",
  "number": "9.1.1",
  "title": "",
  "body": " Static friction holds an object stationary, up to the point of impending motion. Kinetic friction applies to sliding objects.    Training sled   Photo of a football training sled.   Avenue  CC-BY-SA      Free-body diagram   Schematic of a football training sled. If sled is pushed to the right, friction opposes impending motion and acts to the left. The weight acts down through the centroid, and the normal force acts up at some point on the bottom of the sled, depending on the relative force values.   William Haynes       "
},
{
  "id": "cycle_BB",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#cycle_BB",
  "type": "Figure",
  "number": "9.1.2",
  "title": "",
  "body": "  Rolling friction occurs where the tires contact the road.    A motorcycle   Photo of a person riding a motorcycle.        Free-body diagram   Free body diagram of motorcycle and rider driving to the right. Drive friction on the rear tire opposes the motion of the rear wheel with respect to the ground, i.e. driving the motorcycle forward. Rolling resistance of the front tire acts to the left. The weight acts down through the centroid, and a normal force acts up on each tire.   Dan Baker       "
},
{
  "id": "statically-equivalent-loadings",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#statically-equivalent-loadings",
  "type": "Thinking Deeper",
  "number": "9.1.3",
  "title": "Statically Equivalent Loadings.",
  "body": " Statically Equivalent Loadings  The force distribution on the bottom of an object being pushed across a surface is complex, and looks approximately like (a).  To simplify things, we first decompose the actual force into a distributed normal force perpendicular to the surface, and a distributed friction force parallel to the surface, as shown in the (b). These two distributions are further simplified into two concentrated forces representing the normal and friction components of a single resultant force, as show in (c). The net resultant force acts at the point required for equilibrium.   Equivalent representation of friction and normal forces.        whaynes@maritime.edu          whaynes@maritime.edu          whaynes@maritime.edu        "
},
{
  "id": "friction-slide-fig",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#friction-slide-fig",
  "type": "Figure",
  "number": "9.1.5",
  "title": "",
  "body": "    Block on rough surface.     FBD showing normal and friction forces.     "
},
{
  "id": "Chapter_09-how-can-you-tell-from-a-problem-statement-which-phase-of-friction-to-use--4",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-how-can-you-tell-from-a-problem-statement-which-phase-of-friction-to-use--4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "static friction coefficient of static friction kinetic friction coefficient of kinetic friction "
},
{
  "id": "coulomb-friction",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#coulomb-friction",
  "type": "Figure",
  "number": "9.1.6",
  "title": "",
  "body": " Phases of Coulomb friction.   "
},
{
  "id": "Chapter_09-how-can-you-tell-from-a-problem-statement-which-phase-of-friction-to-use--6",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-how-can-you-tell-from-a-problem-statement-which-phase-of-friction-to-use--6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "impending motion "
},
{
  "id": "Chapter_09-friction-angle-and-friction-resultant-2",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-friction-angle-and-friction-resultant-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "friction resultant "
},
{
  "id": "Chapter_09-friction-angle-and-friction-resultant-3",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-friction-angle-and-friction-resultant-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "friction angle "
},
{
  "id": "resultant-force",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#resultant-force",
  "type": "Figure",
  "number": "9.1.7",
  "title": "",
  "body": "    Force components.   A block of weight W is pushed to the right by force P. Normal force N acts up and friction force Ff acts to the left.        Resultant and Friction angle.   N and Ff resolved into force R at angle phi from normal direction.        "
},
{
  "id": "ggb-distributed-normal-force",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#ggb-distributed-normal-force",
  "type": "Figure",
  "number": "9.1.8",
  "title": "",
  "body": " Distributed Normal force changes with load and weight.   "
},
{
  "id": "Chapter_09-coulomb-friction-examples-2-3",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-coulomb-friction-examples-2-3",
  "type": "Example",
  "number": "9.1.9",
  "title": "",
  "body": "  A moment of is applied to a wheel held static by a brake arm. What is the friction force between the wheel and the brake arm?   "
},
{
  "id": "Chapter_09-coulomb-friction-examples-2-4",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-coulomb-friction-examples-2-4",
  "type": "Example",
  "number": "9.1.10",
  "title": "",
  "body": "  A box sits on a slope, find the resultant of the friction and normal forces on the box.   "
},
{
  "id": "Chapter_09-coulomb-friction-examples-3-3",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-coulomb-friction-examples-3-3",
  "type": "Example",
  "number": "9.1.11",
  "title": "",
  "body": "  What is the maximum force applied to the box before it will start to move?   "
},
{
  "id": "Chapter_09-coulomb-friction-examples-3-4",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-coulomb-friction-examples-3-4",
  "type": "Example",
  "number": "9.1.12",
  "title": "",
  "body": "  What is the minimum coefficient of static friction that will keep the box static? What is the lightest box which will not slip or tip on this slope?   "
},
{
  "id": "Chapter_09-coulomb-friction-examples-3-5",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-coulomb-friction-examples-3-5",
  "type": "Example",
  "number": "9.1.13",
  "title": "",
  "body": "  What is the lightest box which will not slip or tip on this slope?   "
},
{
  "id": "Chapter_09-coulomb-friction-examples-4-3",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-coulomb-friction-examples-4-3",
  "type": "Example",
  "number": "9.1.14",
  "title": "",
  "body": "  A box is sliding down a 20 slope, what is the coefficient of friction to keep the velocity constant?   "
},
{
  "id": "Chapter_09-coulomb-friction-examples-4-4",
  "level": "2",
  "url": "Chapter_09-dry-friction.html#Chapter_09-coulomb-friction-examples-4-4",
  "type": "Example",
  "number": "9.1.15",
  "title": "",
  "body": "  A rope slips over a surface at constant velocity, what is the contact angle of the rope?   "
},
{
  "id": "Chapter_09-slipping-vs--tipping",
  "level": "1",
  "url": "Chapter_09-slipping-vs--tipping.html",
  "type": "Section",
  "number": "9.2",
  "title": "Slipping vs. Tipping",
  "body": " Slipping vs. Tipping    What are the possible motions which can occur when you apply a force to an object sitting on a rough surface?  How do you determine which motion will occur in a particular situation?  Which types of motion are beyond the scope of Statics?    This section focuses on the various ways a rigid body in equilibrium might begin to move. The point at which an object starts to move is called the point of impending motion.  The interactive in shows a box sitting on a rough surface. Imagine that we start pushing on the side of the box with a gradually increasing force. Initially, friction between the block and the incline will increase to maintain equilibrium, and the box will sit still.  As we continue to increase the force there are two possibilities; the maximum static friction force will be reached and the box will begin to slide, or the pushing force and the friction force will create a sufficient couple to cause the box tip on its corner.   Slipping vs. Tipping    The easiest way to determine whether the box will slip, tip, or stay put is to solve for the maximum load force twice, once assuming slipping and a second time expecting tipping, then compare the actual load to these maximums. This process is summarized in the following three steps:   Check slipping    As in all dry friction problems, the maximum friction force is equal to the static coefficient of friction times the normal force .  Assume that the maximum normal force is acting at an unknown location and solve for the applied force which will maintain equilibrium. If the load exceeds this value than this the body will slip or maybe tip.    FBD to check slipping.   FBD of block with horizontal force applied.          Check tipping    The object will tip when the resultant normal force shifts off the end of the object, because it no longer acts on the object so it can't contribute to equilibrium.  Create a free-body diagram assuming that the normal force acts at the far corner of the box and solve for the applied force which will maintain equilibrium. Any greater force will make the body tip, unless it is already slipping.  At tipping, the friction force is static-but-not-impending as it has not reached impending motion for slipping.    FBD to check tipping.   FBD of block with a larger horizontal force applied.          Compare the results  If exceeds the smaller of the limiting values, it will initiate the corresponding impending motion.      Failure in Engineering  The goal of engineering design is to forecast and plan for all the ways that something can fail. The challenge is to know the questions to ask and the data to gather to model all possible failure modes. The controlling failure is the mode which occurs at the smallest load.   "
},
{
  "id": "Chapter_09-slipping-vs--tipping-2",
  "level": "2",
  "url": "Chapter_09-slipping-vs--tipping.html#Chapter_09-slipping-vs--tipping-2",
  "type": "Key Questions",
  "number": "9.2",
  "title": "",
  "body": "  What are the possible motions which can occur when you apply a force to an object sitting on a rough surface?  How do you determine which motion will occur in a particular situation?  Which types of motion are beyond the scope of Statics?   "
},
{
  "id": "ggb_slip_tip",
  "level": "2",
  "url": "Chapter_09-slipping-vs--tipping.html#ggb_slip_tip",
  "type": "Figure",
  "number": "9.2.1",
  "title": "",
  "body": " Slipping vs. Tipping   "
},
{
  "id": "slip-tip-slip",
  "level": "2",
  "url": "Chapter_09-slipping-vs--tipping.html#slip-tip-slip",
  "type": "Figure",
  "number": "9.2.2",
  "title": "",
  "body": " FBD to check slipping.   FBD of block with horizontal force applied.      "
},
{
  "id": "slip-tip-tip",
  "level": "2",
  "url": "Chapter_09-slipping-vs--tipping.html#slip-tip-tip",
  "type": "Figure",
  "number": "9.2.3",
  "title": "",
  "body": " FBD to check tipping.   FBD of block with a larger horizontal force applied.      "
},
{
  "id": "Chapter_09-slipping-vs--tipping-8",
  "level": "2",
  "url": "Chapter_09-slipping-vs--tipping.html#Chapter_09-slipping-vs--tipping-8",
  "type": "Thinking Deeper",
  "number": "9.2.4",
  "title": "Failure in Engineering.",
  "body": " Failure in Engineering  The goal of engineering design is to forecast and plan for all the ways that something can fail. The challenge is to know the questions to ask and the data to gather to model all possible failure modes. The controlling failure is the mode which occurs at the smallest load.  "
},
{
  "id": "Chapter_09-block-and-wedge-friction",
  "level": "1",
  "url": "Chapter_09-block-and-wedge-friction.html",
  "type": "Section",
  "number": "9.3",
  "title": "Wedges",
  "body": " Wedges    Why is the normal force always perpendicular to the contact surface while the friction force always lies parallel to it?  Can you demonstrate graphically that components of friction and normal forces are related to the right-triangle trigonometry terms sine and cosine?    A wedge is a tapered object which converts a small input force into a large output force using the principle of an inclined plane. Wedges are used to separate, split or cut objects, lift weights, or fix objects in place. The mechanical advantage of a wedge is determined by the angle of its taper; narrow tapers have a larger mechanical advantage.  Wedges are used in two primary ways:  Low friction wedges are a simple machines which allows users to create large output forces to move objects using comparatively small input forces. In the log splitter in , hydraulic ram pushes a log into a stationary wedge. The normal force pushes the two halves of the log apart while the friction force is opposes the pushing force .  High-friction (self-locking) wedges control the location of objects or hold them in place. Examples include doorstop wedges and carpentry wedges. The sailor in is hammering two wooden wedges towards each other to create large compressive forces to secure shoring timbers during a damage control operation.   Wedges in use.    A low friction wedge is used to split logs.   Image of a hydraulic ram splitting a piece of wood.   Wikimedia Commons  CC0  Tomwsulcer      High friction wedges are used to secure shoring timbers.   Sailors pounding wedges into damage control shoring.   Wikimedia Commons   Petty Officer 2nd Class Diana Quinlan  Public Domain        Luckily the analysis of low- and high-friction wedges are identical and they are quite similar to the multi-force body equilibrium problems we saw in and . The main difference is the inclusion of friction from all non-smooth contact surfaces. The directions of both the normal and friction forces on the free-body diagrams are defined below.  Normal forces act between bodies act perpendicular to the contacting surfaces. All normal forces on a free-body diagram should be pointing towards the body because wedges are always subjected to compression.  Friction forces are between bodies which act parallel or tangential to the contacting surfaces and are created by the microscopic or large scale roughness of the surfaces. All friction forces on a free-body diagram should be drawn pointing in the direction which resists relative motion at the point of contact.  The key added challenge of solving wedge problems is that the angled faces of wedges usually need to be resolved into components in the and , unless a different coordinate system is used.  One of the critical steps in solving block or wedge problems is to determine which force is engaging the friction of the system. Start by drawing the friction forces on the body where this force acts. As you pass the friction and normal forces to adjacent free-body diagrams, you must always show them as equal and opposite, action-reaction pairs. This is illustrated in the following example.      Find the minimum force required to start raising the block using a 25 wedge.  Assume that the coefficient of static friction at both contact surfaces is and that the wedge is massless.    Schematic of a force being applied to an angled wedge to lift a larger block against a frictionless roller.   Dan Baker           Given: and .  Start by assuming the wedge is on the verge of moving to the right and drawing free-body diagrams of the system and each of its parts.      Both parts     Block     Wedge      By considering equilibrium of the combined wedge and block in the direction, we find that  Assuming that the wedge is pushed to point of impending motion, .  There are still two unused equilibrium equations for this free-body diagram, but they are not sufficient to find unknown forces and because the point where resultant friction force acts is also unknown.  Next, consider equilibrium of the block, . A detail of and in shows how the their and components are related to the wedge angle .   Applying equilibrium in the direction with gives        Since the wedge is at the point of impending motion,   With the friction and normal forces on both sides of the wedge known, we can now find the required force using the free body diagram of the wedge .       Using the same system as in , find the minimum force to prevent the wedge from slipping out from under the block  This is similar to the previous example, but the free-body diagrams need to change in the following ways:  all friction force directions reverse since the impending motions of the block and wedge have reversed, and  the direction of may have to reverse if the wedge has sufficient friction to stay static when .    Note that for forces between and , the system is static and the friction forces are static-but-not-impending.       The solution is left as an exercise for the reader.    "
},
{
  "id": "Chapter_09-block-and-wedge-friction-2",
  "level": "2",
  "url": "Chapter_09-block-and-wedge-friction.html#Chapter_09-block-and-wedge-friction-2",
  "type": "Key Questions",
  "number": "9.3",
  "title": "",
  "body": "  Why is the normal force always perpendicular to the contact surface while the friction force always lies parallel to it?  Can you demonstrate graphically that components of friction and normal forces are related to the right-triangle trigonometry terms sine and cosine?   "
},
{
  "id": "wedges-in-use",
  "level": "2",
  "url": "Chapter_09-block-and-wedge-friction.html#wedges-in-use",
  "type": "Figure",
  "number": "9.3.1",
  "title": "",
  "body": " Wedges in use.    A low friction wedge is used to split logs.   Image of a hydraulic ram splitting a piece of wood.   Wikimedia Commons  CC0  Tomwsulcer      High friction wedges are used to secure shoring timbers.   Sailors pounding wedges into damage control shoring.   Wikimedia Commons   Petty Officer 2nd Class Diana Quinlan  Public Domain      "
},
{
  "id": "wedge-example",
  "level": "2",
  "url": "Chapter_09-block-and-wedge-friction.html#wedge-example",
  "type": "Example",
  "number": "9.3.2",
  "title": "",
  "body": "    Find the minimum force required to start raising the block using a 25 wedge.  Assume that the coefficient of static friction at both contact surfaces is and that the wedge is massless.    Schematic of a force being applied to an angled wedge to lift a larger block against a frictionless roller.   Dan Baker           Given: and .  Start by assuming the wedge is on the verge of moving to the right and drawing free-body diagrams of the system and each of its parts.      Both parts     Block     Wedge      By considering equilibrium of the combined wedge and block in the direction, we find that  Assuming that the wedge is pushed to point of impending motion, .  There are still two unused equilibrium equations for this free-body diagram, but they are not sufficient to find unknown forces and because the point where resultant friction force acts is also unknown.  Next, consider equilibrium of the block, . A detail of and in shows how the their and components are related to the wedge angle .   Applying equilibrium in the direction with gives        Since the wedge is at the point of impending motion,   With the friction and normal forces on both sides of the wedge known, we can now find the required force using the free body diagram of the wedge .    "
},
{
  "id": "Chapter_09-block-and-wedge-friction-15",
  "level": "2",
  "url": "Chapter_09-block-and-wedge-friction.html#Chapter_09-block-and-wedge-friction-15",
  "type": "Example",
  "number": "9.3.5",
  "title": "",
  "body": "  Using the same system as in , find the minimum force to prevent the wedge from slipping out from under the block  This is similar to the previous example, but the free-body diagrams need to change in the following ways:  all friction force directions reverse since the impending motions of the block and wedge have reversed, and  the direction of may have to reverse if the wedge has sufficient friction to stay static when .    Note that for forces between and , the system is static and the friction forces are static-but-not-impending.       The solution is left as an exercise for the reader.   "
},
{
  "id": "Chapter_09-screw-friction",
  "level": "1",
  "url": "Chapter_09-screw-friction.html",
  "type": "Section",
  "number": "9.4",
  "title": "Screw Threads",
  "body": " Screw Threads    Can you describe how the right-hand rule relates to the motion and rotation of screws?  What is the thread pitch and friction angle for a screw?  Contrast the different types of screw motion, with and against applied loads, and match the motion cases to their corresponding equation.  Why does a screw and a nut move in relatively opposite directions?     A screw thread is uniform shape which spirals around the inside or outside surface of a cylinder or cone. Like wedges, screws are simple machines. They are essentially a ramp or inclined plane wrapped into a helix, and the input to screws is torque rather than linear force. The mechanical advantage of a screw depends on its lead , which is the linear distance the screw travels in one revolution.  Screws used to fix objects in place are called fasteners , and screws used to move objects are called power screws or lead screws . In this chapter we will focus on power screws.  A power screw assembly includes a nut with matching internal threads which fits around the screw. There are two ways that a power screw can operate based on the movement of the screw and nut. In a scissors jack, the operator rotates the threaded rod with a crank fitted to the nut on the right, which is not threaded but acts as a thrust bearing. The nut on the left moves along the stationary screw to raise the load. In the C-clamp, the nut is stationary and the screw translates through as it rotates. In either case, a small moment on the screw can cause enormous forces on the nut, with the added benefit of the force being applied at a precise location as controlled by the screw.   Power Screws    A scissors jack uses fixed screw and a moving a nut.   Photo of a C-clamp.   William Haynes  CC-0      A C-clamp screw rotates and translates through a fixed nut.   Photo of a C-clamp.    CC-0         Screw Motion and the Right-hand rule  Most screw threads are right-hand threaded, which means they follow a right-hand rule as illustrated in . When you use your right hand to then turn a right-handed thread towards your fingertips, it will move in the direction of your thumb. When you are look at the head of a bolt and rotate it clockwise, it tightens righty-tighty . The reverse, lefty-loosy , is also true.    Right Hand Threads    Loosening   Twisting a screw clockwise tightens the screw, which agrees with the right hand rule, i.e. curling fingers of right hand in the direction of the tightening places points the thumb down in the direction the screw moves as tightened.   William Haynes       Tightening    William Haynes        Left-handed screws are less common but are found in some applications, especially:  machines where reverse-threading prevents them from loosening gradually under the torque of the moving part. For example, the left pedal on a bicycle.  machines where the movement of the screw creates dual motion, like a hand-screw wood clamp.  situations where you do not want to mix up constituents. Cutting torches use right-hand thread for the oxygen and left-hand threads for the acetylene connections.    The motion of left-handed screws can either be thought of as opposite the right-hand rule or conforming to the same relationships if you use your left hand. Notice that right-handed threads slope up to the right, while left-handed threads slope down. Note that turning a thread upside-down does not reverse its handedness.   Screw Thread Handedness    Right Hand Threads   Image of two screw threads. Right hand threads are higher on the right side, and left hand threads are higher on the left side.   William Haynes       Left Hand Threads        Screw Thread Properties  Although most thread profiles are V-shaped, we only consider square threads in this book. General purpose thread profiles, like NPT and ISO metric are more difficult to analyze.  The easiest way to analyze a square-thread power screw system is to turn the problem into a two-dimensional problem by unwrapping the ramp from around the cylinder of the shaft. The significant geometrical properties of the thread are  The mean radius , .  The lead , , also called the pitch .  The lead angle , , also called the helix angle .  T o visualize these terms, imagine unwrapping a thread from around the screw, as shown in .   Thread properties    = pitch, = mean radius     = lead angle    William Haynes        The mean radius is the distance from the centerline to a point halfway between the tip and the root of the thread. Twice this value is the effective diameter.  The lead is the linear travel the nut makes in one revolution, which is also the distance from a point on the screw thread to a corresponding point on the same thread after one rotation. Threads are commonly designated by the number of threads per-inch or per-centimeter, and pitch is the inverse of this value.  The lead angle is related to the pitch and the mean radius by trigonometry. Using the right triangle shown in , the thread lead angle is the inverse tangent of the ratio of the lead over the circumference     Moment to Reach Impending Motion   The focus of this section is to find the magnitude of a moment which will push a screw to impending motion. Impending motion is the threshold between the system holding still and moving, so knowledge of the moment required at impending motion allows you to interpret what happens to the screw system in static but not impending-motion conditions as well.  Assuming that motion is impending means that we can use the coefficient of static friction and the related friction angle . Recall from earlier in this chapter, that the friction angle is related directly to the by the equation:   We now have the tools assembled to derive the relationship between a screw's geometry and the applied loads.    Applied Force Opposes Impending Motion  In this scenario we will examine the magnitude of moment required to raise a screw to impending motion against the applied force as shown in . To eliminate any references to the orientation of the screw and force like up, down, left, or right, this type of motion will be described as the applied force opposes impending motion. This case occurs any time you are applying a force to an object with a screw.  The free-body diagram in shows the moment required to raise a load and the friction and normal forces acting on a slice of thread. These must be summed over the entire length of the thread to find the total friction and normal forces.   A screw jack supports a load which opposes impending motion.    Screw Jack     John Alden  whaynes@maritime.edu cropped and added arrows.  CC BY-SA 3.0      FBD    William Haynes         It is often easiest to express the friction force and normal force as the friction resultant and the friction angle . Recall that the friction force direction always opposes the impending motion of the point of contact in this case, the screw threads. Also, the thread angle determines the angle of the normal force from the centerline of the screw. Finally, the friction angle is the angle between the friction resultant force and the normal force .  is a free-body diagram of single thread element. is the fraction of the total weight on this element, and the total moment is represented by the fraction of the rotational force acting at the mean radius from the center of the screw .   FBD of Thread Element    Summing the forces in the and directions for the free-body diagram in yields:     By summing the forces across all elements of one wrap of the screw we find:     We next need to reduce these two equations to a single equation and also eliminate the difficulty to quantify term. Thus we solve both equations for .     Then, set them equal to each other and solve for the moment .  is the moment required to raise the screw to impending motion, is the force load on the screw, is the mean radius of the screw, is the screw friction angle, and is the screw thread pitch.  Practically, this equation says that the moment to move a screw against an applied force must overcome the screw friction, represented by , and the component of the load on the screw, represented by .    Applied Force Supports Impending Motion  When the impending motion of the screw is in the direction of the applied force, we can also state that the applied force supports impending motion. This case occurs any time you remove a force held by a screw, like lowering the load supported by the screw jack in .  This situation is a bit more complicated than the previous one, because there are three different possibilities depending on the relative magnitude of the friction angle and the thread angle . Cases include   Self-locking.  In this case the load will not cause the screw to rotate by itself,    Unwind-with-load.  In this case, the load will move the screw without assistance, and    Impending motion.  This case is the boundary between the two other cases.   In all three cases the thread angle is the angle between the normal force and the centerline of the screw, and the friction angle is the angle between the friction resultant force and the normal force .  The derivations of the relationships are quite similar to the derivation of , but use subtly different free-body diagrams for each of the three cases. See below.   Three possible situations when the load acts in the direction of impending motion.    Self-locking    William Haynes       Impending Motion    William Haynes       Unwinds with load    William Haynes         Self-locking screw  Self-locking screws are the type of screws that you will encounter most often in mechanical systems as they are highly predictable. They have sufficient friction available to hold their applied load even with no moment applied. Thus, they can safely carry a load in a static-but-not impending condition until you wish to overcome the excess friction by applying a moment to push them to impending motion.  Summing the forces in the and directions for the free-body diagram in yields:    Unwind-with-load screw As its name implies, an unwind-under-load screw will start turning unless a moment is applied to keep the screw at or beyond impending motion. The moment to push a self-locking screw to impending motion is in the opposite direction as the moment to keep unwind-under-load screws at impending motion , as is in the same direction as the moment to loosen (or raise) a screw. These unwind-with-load screws are not often found in mechanical systems, except for in dynamic motion control systems, where the screw is used to slow down motion.  To be designed in an unwind-with-load condition, a screw must have a quite steep thread angle and minimal friction between the threads and nut, which reduces .  Summing the forces in the and directions for the free-body diagram in yields:   Impending-motion screw As the derived equations for all three unwind-with-load screw cases push the screw towards impending motion, when a screw is already at impending motion, it requires no applied moment to maintain equilibrium; however, this case is mechanically unstable. If the load increases slightly the screw will begin to unwind-under-load, whereas if the load decreases slightly the screw will become self-locking.  Summing the forces in the and directions for the free-body diagram in yields:   The concept of an applied force in the direction of impending motion works equally well for either a force applied in the impending motion direction of a screw, or for a force applied to the impending motion direction of a nut. An example of the first case is the screw jack lowering a load, and the second could be a scissors jack that has a rotating but non-translating screw, plus a non-rotating but translating nut.    "
},
{
  "id": "Chapter_09-screw-friction-2",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#Chapter_09-screw-friction-2",
  "type": "Key Questions",
  "number": "9.4",
  "title": "",
  "body": "  Can you describe how the right-hand rule relates to the motion and rotation of screws?  What is the thread pitch and friction angle for a screw?  Contrast the different types of screw motion, with and against applied loads, and match the motion cases to their corresponding equation.  Why does a screw and a nut move in relatively opposite directions?   "
},
{
  "id": "Chapter_09-screw-friction-3-1",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#Chapter_09-screw-friction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lead "
},
{
  "id": "Chapter_09-screw-friction-3-2",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#Chapter_09-screw-friction-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fasteners power screws lead screws "
},
{
  "id": "Chapter_09-screw-friction-3-4",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#Chapter_09-screw-friction-3-4",
  "type": "Figure",
  "number": "9.4.1",
  "title": "",
  "body": " Power Screws    A scissors jack uses fixed screw and a moving a nut.   Photo of a C-clamp.   William Haynes  CC-0      A C-clamp screw rotates and translates through a fixed nut.   Photo of a C-clamp.    CC-0      "
},
{
  "id": "screw_rhr",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#screw_rhr",
  "type": "Figure",
  "number": "9.4.2",
  "title": "",
  "body": " Right Hand Threads    Loosening   Twisting a screw clockwise tightens the screw, which agrees with the right hand rule, i.e. curling fingers of right hand in the direction of the tightening places points the thumb down in the direction the screw moves as tightened.   William Haynes       Tightening    William Haynes       "
},
{
  "id": "Chapter_09-screw-motion-and-the-right-hand-rule-7",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#Chapter_09-screw-motion-and-the-right-hand-rule-7",
  "type": "Figure",
  "number": "9.4.3",
  "title": "",
  "body": " Screw Thread Handedness    Right Hand Threads   Image of two screw threads. Right hand threads are higher on the right side, and left hand threads are higher on the left side.   William Haynes       Left Hand Threads     "
},
{
  "id": "Chapter_09-screw-thread-properties-3",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#Chapter_09-screw-thread-properties-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean radius lead pitch lead angle helix angle "
},
{
  "id": "square-threads",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#square-threads",
  "type": "Figure",
  "number": "9.4.4",
  "title": "",
  "body": " Thread properties    = pitch, = mean radius     = lead angle    William Haynes       "
},
{
  "id": "Chapter_09-screws-where-the-applied-force-opposes-impending-motion-4",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#Chapter_09-screws-where-the-applied-force-opposes-impending-motion-4",
  "type": "Figure",
  "number": "9.4.5",
  "title": "",
  "body": " A screw jack supports a load which opposes impending motion.    Screw Jack     John Alden  whaynes@maritime.edu cropped and added arrows.  CC BY-SA 3.0      FBD    William Haynes       "
},
{
  "id": "thread-element-fbd",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#thread-element-fbd",
  "type": "Figure",
  "number": "9.4.7",
  "title": "",
  "body": " FBD of Thread Element   "
},
{
  "id": "screw_supports",
  "level": "2",
  "url": "Chapter_09-screw-friction.html#screw_supports",
  "type": "Figure",
  "number": "9.4.8",
  "title": "",
  "body": " Three possible situations when the load acts in the direction of impending motion.    Self-locking    William Haynes       Impending Motion    William Haynes       Unwinds with load    William Haynes       "
},
{
  "id": "Chapter_09-flexible-belt-friction",
  "level": "1",
  "url": "Chapter_09-flexible-belt-friction.html",
  "type": "Section",
  "number": "9.5",
  "title": "Flexible Belts",
  "body": " Flexible Belts    How does the impending motion of the system determine which side of the belt will have a larger tension?  How do you compute the contact angle between the belt and pulley or cylinder?  How do you compute the tension differential on either side of the belt or cylinder for both flat and v-belts?  What determines the maximum torque transfer available from a pulley system?     When a belt, rope, or cable is wrapped around an object, there is potential for flexible belt friction. In friction allows the sailors to control the speed that the mooring line pays out. The friction between the line and the bollard depends on the number of turns the line takes around the bollard post. In friction forces prevent the belt from slipping allow it to transfer power from the motor to the drive pulley.   Applications of belts.    Sailors handling a mooring line.   US Navy sailors handling a mooring line.    https:\/\/www.dvidshub.net\/       Power transmission pulleys.   Belt driven pulley   Kiilahihnakone  CC-BY-SA         Frictionless Belts  Imagine with a flat, massless cable or belt passing over a frictionless cylinder or pulley, in equilibrium. ( ). A non-uniform distributed normal force acts at points of contact with the cylinder to oppose the tension in the belt and maintain equilibrium. The normal force varies as a function of the angle between the contact surface and the direction the belt tension.   Free-body diagrams, equal tension.    FBD Belt and pulley    William Haynes       FBD of belt    William Haynes       FBD of cylinder    William Haynes        Without friction, the two tensions must be equal otherwise the belt would slip around the cylinder. The only interaction force between the belt and pulley is the distributed normal force. Due to the symmetry of this example, the components of the distributed force all cancel and the resultant is purely vertical. In other situations this will not be true.    Friction in Flat Belts   When friction is available to oppose the sliding, the tensions in the two sides of the belt will not be equal and friction will cause the pulley to rotate. Alternately if the pulley is driven by an external moment, friction will cause one tension to increase and the other to decrease. This, of course, is the point of a belt and pulley system power transmission from the belt to the pulley or vice-versa.  shows a free-body diagram of a belt and pulley in equilibrium. The net moment caused by the two belts and the applied moment are in balance. The system may be stationary, or it may be rotating at a constant velocity; however, it is impossible to tell from this diagram which direction.  shows a free-body diagram of the belt. Since is greater than , in the absence of friction, the left side will move up, and the right side will move down, as indicated by the arrows which indicate the relative motion of belt with respect to the pulley. A distributed friction force between the belt and pulley which opposes the relative motion and maintains rotational equilibrium. A distributed normal force also exists to maintain equilibrium in the direction.  shows a free-body diagram of the pulley. The frictional and normal forces acting on the pulley are equal and opposite to those acting on the belt. The arrow indicates that the impending relative motion of the pulley with respect to the belt is counter-clockwise. The actual direction of rotation is not known or indicated. Friction always acts opposite to the direction of relative motion.   Unequal Tensions    FBD of Belt and Pulley    William Haynes       FBD of Belt    William Haynes       FBD of pulley    William Haynes        Increasing or the belt tension ratio will increase the power transmitted until the belt starts to slip. This occurs when the friction increases to the maximum available value . At this point, motion (slipping) is impending.  We are interested in determining the range of values for the tension forces where the belt does not slip relative to the surface. For a flat belt, the maximum value for depends on the magnitude of , the static coefficient of friction between the belt and the surface , and the contact angle between the belt and the surface.    Contact Angle  You will need to use the geometry of the pulleys to find the contact angle between the belt and pulley. The belt will depart the pulley at a point of tangency, which is always perpendicular to a radius. To find create one or more right triangles using the incoming and outgoing belt paths and apply complementary angles to relate the belt geometry to the contact angle. There is no simple rule for transferring cable angles over to the contact angle, but in general, extend radial lines from the center of the pulley out to the belt's tangential lines. Next, create right triangles with each radial line and work to find all the angles which add up to the contact angle .   Relationship between pulley geometry and contact angle .      Belt Tension  We have seen that when there is friction between a belt and a pulley, the tensions on either end of the belt are not the same. In previous problems, we simply guessed a direction for an unknown force, and then used the sign of the numerical answer to confirm or reverse our assumption. Unfortunately, this does not work for flexible belts, where we must make the correct determination before starting computations. So, how can we determine which side has the larger tension, and which side is smaller?  The following discussion guides you through two methods to make this decision. shows a pulley and belt system and the associated free body diagrams. The pulley is driven by a motor which supplies a counterclockwise moment of . The belt is fixed, and holds the pulley in equilibrium until slipping occurs. Both the pulley and belt are assumed massless.  The grey arrows indicate the direction of impending motion. This is the motion which will occur if the belt slips. For the belt, which is fixed, this impending motion is relative to the pulley. For the pulley, motion is impending relative to the belt, but since it can actually rotate it also has absolute impending motion with respect to the earth.   Motor drive pulley with a fixed belt.    Problem Diagram     FBD of Pulley     FBD of Belt         Method 1: Draw free-body diagrams and sum tensions along the cable  Friction always opposes impending relative motion at the point of contact, so if you can determine the direction the belt will potentially slip, you also know the direction of the friction force. You can find out which tension is larger and which is smaller by drawing a free-body diagram of the belt and summing forces along it.  The free-body diagram shows the forces acting on the pulley, which are:  Reaction force from the fixed center axle.  A distributed normal force acting radially along the contact surface with the belt. The distributed normal forces is not symmetrical as drawn, but actually biased towards the right, in order to have the net leftward force required to oppose the net friction acting to the right. Fortunately, the actual shape is not significant to us.  A distributed friction force acting along the contact surface, opposing moment and the impending motion of the pulley.    The free-body diagram shows the forces acting on the belt, which are:  The belt's internal tension forces, labeled and since at this point we don't know their relative magnitudes.  A distributed normal force acting radially along the contact surface between the pulley and belt. These are the distributed normal forces on the pulley transferred equal-and-opposite to the belt.  A distributed friction force acting along the surface of the belt, again equal-and-opposite to the corresponding forces on the pulley. Since the belt is not actually moving these forces oppose the belt's relative impending motion with respect to the pulley.    Summing forces along the belt, we find that the tension plus the distributed friction force must equal for equilibrium. Therefore, the larger tension and the smaller tension .    Method 2: Larger tension acts in the direction of the impending motion of the belt  Following the logic of Method 1, it turns out that the larger tension always points in the direction of impending motion of the belt. It does not matter if the impending motion is relative as here with a fixed belt, or absolute as when the belt moves around a fixed object.  There are multiple ways to determine the smaller and larger tensions in a flexible belt system. You can use the interactive below to develop your intuition on the relationship between belt tension, pulley moment, friction and relative motion.      Friction transmits power between the belt and pulley.      Change in Belt Tension due to Friction  Applying the equilibrium equations to a free-body diagram of a differential element of the belt enables us to derive the relation between the two belt tensions, the contact angle , and the friction coefficient .   FBD of a differential element of a flexible belt.     William Haynes       Summing the forces in the direction gives   As approaches zero, approaches one, so in the limit,  And summing forces in the direction gives where we have used the small angle approximation . Dropping the second order differential term as negligible, yields .  Solving simultaneously by eliminating leaves us with , which we can integrate between and to find .  Integrating both sides gives: , where is the natural log base 2.718, is the friction coefficient between the belt and pulley, and is the contact angle between the belt and pulley in radians. The larger this ratio is, the more torque the belt can transmit.  Notice that the belt tension ratio is independent of the surface size and shape, provided the belt makes continuous contact.     Torque in Belt Systems  A belt-driven systems consists of an input pulley driven by a rotational power source and one or more output pulleys driving loads. The maximum torque that can be transmitted by the system is determined by the maximum value for before slipping occurs at either the input or any output pulley. We will need to consider each of the pulleys independently.   Unequal Tensions    Belt Drive System   A belt-driven set of fixed axis pulleys. The pulleys are separated into separate FBDs with the tension in the belts shown to be equal and opposite.   William Haynes       Driving Pulley    William Haynes       Load Pulley    William Haynes        Start by solving for the resting tension . This is the tension the belts prior to any motion or power transfer. Practically, machines provide adjustments to pre-tension the belt to insure sufficient normal force when started. When we turn on the machine and increase the torque, the resting tension remains constant while the tension on the drive side increases.  If the pulleys have the same coefficients of friction, it can be assumed that the belt will first slip at the smaller of the two pulleys as the smaller pulley has a smaller contact angle . See .  Once we have the maximum value for , we can use that to find the maximum input and output moments. Next, to find the torque, we then find the net moment exerted by the two tension forces, where the radius of the pulley is the moment arm.  The maximum input torque before slipping is   The maximum output torque before slipping is   In a rotating shaft, power is equal to the torque times the angular velocity in radians per second. , so .  Unlike the torque which steps up or down based on the pulley radii, the input and output powers are equal to each other, ignoring all efficiency losses.    V-Belts  A flat belt pulley interacts with one surface of the belt. A V shaped pulley allows the belt to wedge tightly in the groove, increasing friction and torque transmission. A V-belt's enhanced friction comes from the increased normal forces which are a function of the groove angle .  The sum of the normal force vertical components is the same for a flat belt or V-belt. However, the horizontal components of the normal forces in a V-belt, effectively pinch the belt, thereby increasing the available friction force. The belt should not contact the bottom of the groove, or else the wedge effect is lost .   V-belt and pulley cross section.    William Haynes       As we can see from the equation above, smaller groove angle and steeper sides result in a larger maximum tension ratio, resulting in higher torque transmission. The trade-off with steeper sides, however, is that the belt becomes wedged more firmly in the groove and requires more force to unwedge itself as it leaves the pulley. This unwedging force decreases the efficiency of the belt-driven system. An alternate design choice would be a chain-drive which carries very high-tension differences efficiently.   "
},
{
  "id": "Chapter_09-flexible-belt-friction-2",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#Chapter_09-flexible-belt-friction-2",
  "type": "Key Questions",
  "number": "9.5",
  "title": "",
  "body": "  How does the impending motion of the system determine which side of the belt will have a larger tension?  How do you compute the contact angle between the belt and pulley or cylinder?  How do you compute the tension differential on either side of the belt or cylinder for both flat and v-belts?  What determines the maximum torque transfer available from a pulley system?   "
},
{
  "id": "Chapter_09-flexible-belt-friction-3-2",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#Chapter_09-flexible-belt-friction-3-2",
  "type": "Figure",
  "number": "9.5.1",
  "title": "",
  "body": " Applications of belts.    Sailors handling a mooring line.   US Navy sailors handling a mooring line.    https:\/\/www.dvidshub.net\/       Power transmission pulleys.   Belt driven pulley   Kiilahihnakone  CC-BY-SA      "
},
{
  "id": "equal-tension",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#equal-tension",
  "type": "Figure",
  "number": "9.5.2",
  "title": "",
  "body": " Free-body diagrams, equal tension.    FBD Belt and pulley    William Haynes       FBD of belt    William Haynes       FBD of cylinder    William Haynes       "
},
{
  "id": "different-tension",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#different-tension",
  "type": "Figure",
  "number": "9.5.3",
  "title": "",
  "body": " Unequal Tensions    FBD of Belt and Pulley    William Haynes       FBD of Belt    William Haynes       FBD of pulley    William Haynes       "
},
{
  "id": "belt-friction-interactive",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#belt-friction-interactive",
  "type": "Figure",
  "number": "9.5.4",
  "title": "",
  "body": " Relationship between pulley geometry and contact angle .   "
},
{
  "id": "find-max",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#find-max",
  "type": "Figure",
  "number": "9.5.5",
  "title": "",
  "body": " Motor drive pulley with a fixed belt.    Problem Diagram     FBD of Pulley     FBD of Belt     "
},
{
  "id": "belt-equilibrium-interactive",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#belt-equilibrium-interactive",
  "type": "Figure",
  "number": "9.5.6",
  "title": "",
  "body": " Friction transmits power between the belt and pulley.   "
},
{
  "id": "belt-differential-element",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#belt-differential-element",
  "type": "Figure",
  "number": "9.5.7",
  "title": "",
  "body": " FBD of a differential element of a flexible belt.     William Haynes      "
},
{
  "id": "drive-system",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#drive-system",
  "type": "Figure",
  "number": "9.5.8",
  "title": "",
  "body": " Unequal Tensions    Belt Drive System   A belt-driven set of fixed axis pulleys. The pulleys are separated into separate FBDs with the tension in the belts shown to be equal and opposite.   William Haynes       Driving Pulley    William Haynes       Load Pulley    William Haynes       "
},
{
  "id": "Chapter_09-friction-in-v-belts-4",
  "level": "2",
  "url": "Chapter_09-flexible-belt-friction.html#Chapter_09-friction-in-v-belts-4",
  "type": "Figure",
  "number": "9.5.9",
  "title": "",
  "body": " V-belt and pulley cross section.    William Haynes     "
},
{
  "id": "Chapter_09-journal-bearing-friction",
  "level": "1",
  "url": "Chapter_09-journal-bearing-friction.html",
  "type": "Section",
  "number": "9.6",
  "title": "Journal Bearings",
  "body": " Journal Bearings    Why does the point of contact between a shaft and a journal bearing shift as the shaft rotates?  Why is the resultant contact force tangent to the friction circle?  Can you draw appropriate free-body diagrams of journal bearing systems and solve for unknown values?     Journal Bearing Friction  A bearing is a machine element used to support a rotating shaft. Bearing friction exists between the rotating shaft and the supporting bearing. Though other types of bearings exist including, ball, roller and hydrodynamic, we will focus on dry friction journal bearings. Oil lubricated journal bearings require a knowledge of fluid mechanics to analyze, while dry journal bearings have point contact between the shaft and bearing and thus can be analyzed in Statics, they are subject to greater wear and heat build-up than other types of bearings; thus, the use of dry journal bearings is only advisable in situations where there is limited motion.    Rotating Shaft and Fixed Bearing  A dry friction journal bearing consists circular bearing surface which supports a rotating or stationary shaft. The support force acts at the single point of tangency of the two circular surfaces. The bearing prevents shaft motion in the radial directions but does not prevent axial motion due to shaft thrust.  shows a journal bearing supporting a shaft with a vertical load . Initially the contact point is located directly below the load along its line of action. When a clockwise moment is applied to rotate the shaft, friction between the shaft and bearing causes the surfaces to stick together, and the shaft climbs up the bearing surface until impending motion is reached and slipping occurs. Similarly, when a CCW moment is applied, the contact point will shift to the left.   Contact Point Shifts against the direction of relative motion of the shaft with respect to the bearing.    Stationary   Journal bearing cross section shows outside cylinder with internal shaft in three configurations a) Contact point at 270 degrees, b) contact point at ~300 degrees, c) contact point at ~240 degrees.   William Haynes       Clockwise shaft rotation    William Haynes       Counterclockwise shaft rotation    William Haynes        Free-body diagrams for the shaft in the three cases are shown in . At the contact points we see a normal force and a friction force which can be resolved into a single vertical resultant force . Normal forces are perpendicular to shaft at the contact point, which makes their lines of action pass through the center of the shaft. When no moment is applied, no friction exists, but in the other two cases, friction creates a moment about the center of the shaft which opposes the applied moment .   Shaft Free-body Diagrams    No Moment   FBD of the shaft of the journal bearing showing the F_applied, Normal force, and the friction force opposing direction of impending motion.   William Haynes       Clockwise Moment    William Haynes       Counterclockwise Moment    William Haynes        The most straightforward process to relate the load, normal and friction forces for a journal bearing is by performing the following steps:  Assume that the shaft and bearing opening have the same radius, but draw the shaft a bit smaller to emphasizes the contact point at the point of tangency.  Combine the normal and friction forces into a single friction resultant force .  Determine the radius of the friction circle, , which is a circle around the center tangent to the friction resultant . The friction circle radius is a function of the shaft radius and the friction angle . .  Finally, draw a free-body diagram of the shaft with all applied loads and the friction resultant , then solve the equations of equilibrium to find the unknowns.      Fixed Shaft and Rotating Bearing  Another type of journal bearing is designed with a fixed shaft and a rotating bearing. While the solution process is quite similar to the process covered above, the main difference is that you will draw a free-body diagram of the rotating bearing instead of the shaft.  shows the diagrams for a journal bearings with a fixed shaft and rotating bearing.      Ring Bearing   Journal bearing cross section shows outside cylinder with fixed internal shaft.   William Haynes       Free-body Diagram    William Haynes         Contact Point Shift  In this section we saw that the contact point shifts in the direction of the relative impending motion of the bearing or opposite to the relative motion of the shaft; This is true for dry friction bearings, but with oil lubricated bearings, the shaft starts by a shift this way, but as the shaft speed increases a hydrodynamic oil wedge forms which shifts the shaft in the other direction in much the same way that a water skier lifts up and skims the water at high speeds.    "
},
{
  "id": "Chapter_09-journal-bearing-friction-2",
  "level": "2",
  "url": "Chapter_09-journal-bearing-friction.html#Chapter_09-journal-bearing-friction-2",
  "type": "Key Questions",
  "number": "9.6",
  "title": "",
  "body": "  Why does the point of contact between a shaft and a journal bearing shift as the shaft rotates?  Why is the resultant contact force tangent to the friction circle?  Can you draw appropriate free-body diagrams of journal bearing systems and solve for unknown values?   "
},
{
  "id": "contact-point",
  "level": "2",
  "url": "Chapter_09-journal-bearing-friction.html#contact-point",
  "type": "Figure",
  "number": "9.6.1",
  "title": "",
  "body": " Contact Point Shifts against the direction of relative motion of the shaft with respect to the bearing.    Stationary   Journal bearing cross section shows outside cylinder with internal shaft in three configurations a) Contact point at 270 degrees, b) contact point at ~300 degrees, c) contact point at ~240 degrees.   William Haynes       Clockwise shaft rotation    William Haynes       Counterclockwise shaft rotation    William Haynes       "
},
{
  "id": "shaft-fbds",
  "level": "2",
  "url": "Chapter_09-journal-bearing-friction.html#shaft-fbds",
  "type": "Figure",
  "number": "9.6.2",
  "title": "",
  "body": " Shaft Free-body Diagrams    No Moment   FBD of the shaft of the journal bearing showing the F_applied, Normal force, and the friction force opposing direction of impending motion.   William Haynes       Clockwise Moment    William Haynes       Counterclockwise Moment    William Haynes       "
},
{
  "id": "ring-bearing",
  "level": "2",
  "url": "Chapter_09-journal-bearing-friction.html#ring-bearing",
  "type": "Figure",
  "number": "9.6.3",
  "title": "",
  "body": "    Ring Bearing   Journal bearing cross section shows outside cylinder with fixed internal shaft.   William Haynes       Free-body Diagram    William Haynes       "
},
{
  "id": "Chapter_09-journal-bearings-with-a-fixed-shaft-and-a-rotating-bearing-5",
  "level": "2",
  "url": "Chapter_09-journal-bearing-friction.html#Chapter_09-journal-bearings-with-a-fixed-shaft-and-a-rotating-bearing-5",
  "type": "Thinking Deeper",
  "number": "9.6.4",
  "title": "Contact Point Shift.",
  "body": " Contact Point Shift  In this section we saw that the contact point shifts in the direction of the relative impending motion of the bearing or opposite to the relative motion of the shaft; This is true for dry friction bearings, but with oil lubricated bearings, the shaft starts by a shift this way, but as the shaft speed increases a hydrodynamic oil wedge forms which shifts the shaft in the other direction in much the same way that a water skier lifts up and skims the water at high speeds.  "
},
{
  "id": "Chapter_09-disc-friction",
  "level": "1",
  "url": "Chapter_09-disc-friction.html",
  "type": "Section",
  "number": "9.7",
  "title": "Rotating Discs",
  "body": " Rotating Discs    Select the appropriate disc friction equation among those for hollow circular areas, solid areas, and disc brakes with a circular arc and  Compute the possible moment the friction forces from disc friction can resist.     Disc Friction  Disc friction refers friction between a flat, rotating body and a stationary surface. Disc friction exerts a moment on the bodies involved which resists the relative rotation of the bodies. Disc friction is applicable to a wide variety of designs including end bearings, collar bearings, disc brakes, and clutches.   This orbital sander rotates a circular sanding disc against a stationary surface. The disc friction between the sanding disc and the surface exert a moment on both the surface and the sander.   Photo of orbital sander.   Hedwig Storch  CC-BY-SA       Collar Bearings  A collar bearing, shown in has a rotating annular area in contact with a stationary bearing surface. The rotating shaft passes through a hole or bearing in the surface to maintain radial alignment. The collar bearing prevents axial motion and acts as a thrust bearing to transfer the axial load to a solid foundation.   Collar bearing    Side view   A collar bearing (side view).   William Haynes       Contact Area   Annular contact area of collar (top view).   William Haynes        The friction force at any point of the contact area will equal the normal force at that point times the kinetic coefficient of friction at that point. If the coefficient of friction and the pressure between the collar and the surface is the same at all points, then the same friction force at every point is the same as well. This does not mean that the moment exerted at every point is equal as well. Elements towards the outside of the contact area cause larger moments than those closer to the center since they have larger moment arms.    Forces and moments on differential areas   Differential Elements.   William Haynes           The total moment exerted acting on the disc due to the friction forces is found by integrating the elements over the contact area. The moment of each element will be equal to the product of the coefficient of kinetic friction, the normal force pressure, the moment arm and the area of each element .   The coefficient of friction and pressure terms are constant so can be moved outside the integral, and since pressure is defined as force per unit are area , the pressure term can be replaced with the applied load divided by the bearing contact area, .  A differential element of area can be expressed in terms of radial distance allowing us to integrate with respect to . ,  Making these substitutions leads to an equation that is easy to integrate.   Integrating this integral, evaluating the limits and simplifying gives the final result .    End Bearings  In cases where we have a solid circular contact area such as with a solid circular shaft, an end bearing, or the orbital sander shown in we simply set the inner radius to zero and simplify equation . If we do so, the result is .   A circular thrust bearing.    Side view.   A thrust bearing with a circular bearing surface.   William Haynes       Top view.   Top view.   William Haynes          Circular Arc Bearings  Automobile disc brakes have a contact area that looks like a section of the hollow circular contact area we covered earlier.    The contact area in disc brakes is often approximated as a circular arc with a contact angle .   Contact area in disc brakes approximated as a circular arc.   Dan Baker      Disc brakes, due to their smaller contact area, have higher pressure for the same applied force but a smaller area over which to exert friction. In the end, these factors cancel out and we end up with the same formula we found in . Notice that this formula is independent of .  Brake pad on one side:    Most disc brakes, however, have two pads one on each side of the rotating disc, so we will need to double the moment if so.  Brake pads on each side:     "
},
{
  "id": "Chapter_09-disc-friction-2",
  "level": "2",
  "url": "Chapter_09-disc-friction.html#Chapter_09-disc-friction-2",
  "type": "Key Questions",
  "number": "9.7",
  "title": "",
  "body": "  Select the appropriate disc friction equation among those for hollow circular areas, solid areas, and disc brakes with a circular arc and  Compute the possible moment the friction forces from disc friction can resist.   "
},
{
  "id": "disc_sander",
  "level": "2",
  "url": "Chapter_09-disc-friction.html#disc_sander",
  "type": "Figure",
  "number": "9.7.1",
  "title": "",
  "body": " This orbital sander rotates a circular sanding disc against a stationary surface. The disc friction between the sanding disc and the surface exert a moment on both the surface and the sander.   Photo of orbital sander.   Hedwig Storch  CC-BY-SA    "
},
{
  "id": "hollow-circular-contact-area-2",
  "level": "2",
  "url": "Chapter_09-disc-friction.html#hollow-circular-contact-area-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "thrust bearing "
},
{
  "id": "collar-bearing",
  "level": "2",
  "url": "Chapter_09-disc-friction.html#collar-bearing",
  "type": "Figure",
  "number": "9.7.2",
  "title": "",
  "body": " Collar bearing    Side view   A collar bearing (side view).   William Haynes       Contact Area   Annular contact area of collar (top view).   William Haynes       "
},
{
  "id": "hollow-circular-contact-area-5-1",
  "level": "2",
  "url": "Chapter_09-disc-friction.html#hollow-circular-contact-area-5-1",
  "type": "Figure",
  "number": "9.7.3",
  "title": "",
  "body": " Forces and moments on differential areas   Differential Elements.   William Haynes     "
},
{
  "id": "Chapter_09-end-bearing-with-a-solid-circular-contact-area-3",
  "level": "2",
  "url": "Chapter_09-disc-friction.html#Chapter_09-end-bearing-with-a-solid-circular-contact-area-3",
  "type": "Figure",
  "number": "9.7.4",
  "title": "",
  "body": " A circular thrust bearing.    Side view.   A thrust bearing with a circular bearing surface.   William Haynes       Top view.   Top view.   William Haynes       "
},
{
  "id": "disc-segment",
  "level": "2",
  "url": "Chapter_09-disc-friction.html#disc-segment",
  "type": "Figure",
  "number": "9.7.5",
  "title": "",
  "body": " The contact area in disc brakes is often approximated as a circular arc with a contact angle .   Contact area in disc brakes approximated as a circular arc.   Dan Baker     "
},
{
  "id": "Chapter_09-10",
  "level": "1",
  "url": "Chapter_09-10.html",
  "type": "Exercises",
  "number": "9.8",
  "title": "Exercises (Ch. 9)",
  "body": " Exercises (Ch. 9)   "
},
{
  "id": "Chapter_10-integral-properties-of-shapes",
  "level": "1",
  "url": "Chapter_10-integral-properties-of-shapes.html",
  "type": "Section",
  "number": "10.1",
  "title": "Integral Properties of Shapes",
  "body": " Integral Properties of Shapes     Why does the area moment of inertia integral equation include a distance squared term?    When performing a single integral, either or , what is your differential element shape?      As you know, two dimensional shapes like rectangles and circles have properties such as area, perimeter, and centroid. These are purely geometric properties since they belong to the shape alone, in contrast to physical properties like weight and mass which belong to real physical objects.  In this section we introduce several new geometric properties useful in engineering including the Area Moment of Inertia .  The integral properties of shapes, along with the names and symbols commonly used to represent them are given in the table below. You are already familiar with area from Geometry and the first moment of area from . The remaining properties are the subject of this chapter. They all have a similar form, and can be evaluated using similar integration techniques.   Definitions for area properties    This interactive diagram defines the terms which apply to all of the property definitions below. It shows a generic plane area , divided into differential elements . The differential element is an infinitesimally tiny rectangle centered about point , which can range over the entire area. The distances to the element from the axis, the axis and the origin are designated , , and respectively. The centroid of the entire area is located at .       Definition  Name  More Information        Area          First Moment of Area  (with respect to the axis)          First Moment of Area  (with respect to the axis)          Second Moment of Area, or  Moment of Inertia  (with respect to the axis)          Second Moment of Area, or  Moment of Inertia  (with respect to the axis)          Polar Moment of Inertia          Product of Inertia      All of these properties are defined as integrals over an area . These integrals may be evaluated by double-integrating over and in Cartesian coordinates or and in polar coordinates. They can also be evaluated using single integration using the methods demonstrated in .  None of these integrals can be evaluated until a specific shape is chosen. When shape has been specified, the bounding functions and integration limits can be determined and only then may the integral be solved using appropriate integration techniques. If the shape is specified in general terms, say a rectangle with base and height , then the result of the integration will be a formula for the property applicable to all similar shapes.    Area  The total area of a shape is found by integrating the differential elements of area over the entire shape. . The limit on this integral is indicated with an to indicate that the integration is carried out over the entire area. The resulting value will have units of and does not depend on the position of the shape on the coordinate plane.  Since the area formulas for common shapes are well known, you only need to use integration in uncommon situations.    First Moment of Area  The first moment of area , which was introduced in , is defined by these two equations. and has units of .  The first moment of area with respect to an axis is a measure of the distribution of the shape about an axis. It depends on the shape and also its location on the coordinate plain. Portions of area on the negative side of the selected axis make the first moment smaller, while areas on the positive side make it larger. If the shape's centroid is located exactly on the axis, the integral will sum to zero because the contributions of area above and below the axis cancel each other.  The average value of the first moment of area is found by is found by dividing the first moment by the area of the shape, and the result indicates the distance from the axis to centroid of the shape. .    Moment of Inertia  The area moment of inertia , the subject of this chapter, is defined by these two equations. and has units of .  As you can see, these equations are similar to the equations for the first moment of area , except that the distance terms and are now squared. In recognition of the similarity, the area moments of inertia are also known as the second moments of area . We will use the terms moment of inertia and second moment interchangeably. These two quantities are sometimes designated as rectangular moments of inertia to distinguish them from the polar moment of inertia described in the next section.  Like the first moment, the second moment of area provides a measure of the distribution of area around an axis, but in this case the distance to each element is squared. This gives increased importance to portions of the area which are far from the axis. Squaring the distance means that identical elements on opposite sides of the axis both contribute to the sum rather than cancel each other out as they do in the first moment. As a result, the moment of inertia is always a positive quantity.  Two identical shapes can have completely different moments of inertia, depending on how the shape is distributed around the axis. A shape with most of its area close to the axis has a smaller moment of inertia than the same shape would if its area was distributed farther from the axis. This is a non-linear effect, because when the distance term is doubled, the contribution of that element to the sum increases fourfold.    These three triangles are all the same size. Rank them from largest to largest smallest moment of inertia with respect to the axis.   Right triangle with right angle on bottom right corner. The y-axis is shown in three locations: 1)on the right, 2) in the middle, 3) on the left.     From smallest to largest: .    Although the areas of all three triangles are the same, triangle has the area on both sides of the axis and relatively close to it, and so has the smallest , while triangle has the most of its area far from the axis which makes its moment of inertia largest. We will be able to show later that the .    Moving a shape away from the axis (or moving the axis away from the shape) increases its moment of inertia, and moving it closer to the axis decreases it, until it crosses to the other side of the axis, and then its moment of inertia will begin to increase again.  The minimum moment of inertia occurs when the centroid of the shape falls on the axis. When this occurs, the moment of inertia is called the centroidal moment of inertia. A bar over the symbol is used to indicate that a moment of inertia is centroidal. So for example, and represent the centroidal moment of inertia with respect to the axis and the the centroidal moment of inertia with respect to the axis. The bar in this case does not mean that moment of inertia is a vector quantity. Note that a shape can have multiple centroidal moments of inertia, because more than one axis can pass through the centroid of a shape. In this text, we will only the vertical and horizontal axes, but they are not the only possibilities.  The centroidal moment of inertia is particularly important. We will see in that if we know a shape's centroidal moment of inertia for some axis direction, it is a simple process to calculate the moment of inertia of the shape about any other parallel axis. The moment of inertia is used in Mechanics of Materials to find stress and deflection in beams and to determine the load which will cause a column to buckle.  We stated earlier that the centroidal moment of inertia is the minimum moment of inertia, but by this we mean, the minimum moment of inertia for a particular axis direction, for example horizontal. Other centroidal axes may have a different moment of inertia, either larger or smaller than the moment of inertia about a horizontal centroidal axis. The centroidal axes which have the absolute minimum and maximum moment of inertia are called the principle axes. The principle axes are not necessarily horizontal and vertical.   Beam bending  To get a feel for how moment of inertia affects engineering design, find a ruler, a yardstick, or something similar: long with a rectangular cross section.  Try to bend the ruler both when it's flat and also when it's turned on edge. You will find that bending the ruler around the axis while it's flat is easy compared to bending it the other way, around the axis. Why is it easier to bend the ruler one way than the other? It's the same object, made of the same material either way.  The answer has to due with the moment of inertia, and how it relates to the bending axis.    Bending a ruler.    Dan Baker  CC-BY-SA     As engineers we are not satisfied with merely knowing that it's harder to bend a ruler one way than the other, we'd like to know how much harder ?  For a thick ruler that is tall, the bending resistance about the axis is over 20 times more than the bending resistance the other way, about the axis.  To further see how the moment of inertia comes into play, consider the curvature caused by applying opposing moments to the ends of a beam such as your ruler. You will cause it to bend into an arc of a circle of some radius. A curious engineer would like to know how the curvature of the beam is related to the applied moment, the geometry, and the physical properties of the beam.   Beam of length which is being bent by opposing couple-moments to an arc with angle .    Dan Baker  CC-BY-SA      You will learn in Mechanics of Materials that the relationship is: where:   is a material property called Young's Modulus or the modulus of elasticity which characterizes the stiffness of a material.    is the length of the beam, and    is the moment of inertia of the cross-section of the beam about the bending axis.   is the moment applied to the ends of the beam, and  is the curvature of the beam.  Since and are in the numerator and is in the denominator, a longer beam is more flexible and larger values of or make the beam stiffer. With those properties fixed, angle is directly proportional to the moment .  The sag, or deflection , of a beam when supporting a load is also related to these factors, and the placement of the load as well. For example, if a beam is loaded with a concentrated force at its center its maximum deflection will occur at the midpoint, with     Polar Moment of Inertia  The polar moment of inertia is defined as and has units of .  The polar moment of inertia is a another measure of the distribution of an area but, in this case, about a point at the origin rather than about an axis. One important application of this value is to quantify the resistance of a shaft to torsion or twisting due to the shape of its cross-section.   Why don't we call the polar moment of inertia ?  The squared distance in the polar moment of inertia formula is the distance from the axis, so it would seem reasonable to name the polar moment to be consistent with and which use distances from the and axes.  Instead engineers use the letter to represent this quantity. Why?   In-plane and out-of-plane rotation of element about the , and axes.    If areas only existed in the - plane, this would be fine, but the real world is three-dimensional, so must be reserved to use with areas in the - or - plane.  As shown in the interactive, the rectangular moment of inertia involves rotating element about out-of-plane around an in-plain axis, and the polar moment involves rotating the element in-plane around a perpendicular axis. The two quantities represent fundamentally different things.     Product of Inertia  The final property of interest is the product of inertia and it is defined as where and are defined as in . Like the others, the units associated with this quantity are . The name was chosen because the distance squared term in the integral is the product of the element's coordinates. In contrast to the other area moments, which are always positive, the product of inertia can be a positive, negative or zero.   "
},
{
  "id": "Chapter_10-integral-properties-of-shapes-2",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#Chapter_10-integral-properties-of-shapes-2",
  "type": "Key Questions",
  "number": "10.1",
  "title": "",
  "body": "   Why does the area moment of inertia integral equation include a distance squared term?    When performing a single integral, either or , what is your differential element shape?    "
},
{
  "id": "Chapter_10-integral-properties-of-shapes-3-2",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#Chapter_10-integral-properties-of-shapes-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Area Moment of Inertia "
},
{
  "id": "MOI-potato-ggb",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#MOI-potato-ggb",
  "type": "Figure",
  "number": "10.1.1",
  "title": "",
  "body": " Definitions for area properties   "
},
{
  "id": "Chapter_10-area-2",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#Chapter_10-area-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "area "
},
{
  "id": "Chapter_10-first-moment-of-area-2",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#Chapter_10-first-moment-of-area-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first moment of area "
},
{
  "id": "moment-of-inertia-intro-2",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#moment-of-inertia-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "area moment of inertia "
},
{
  "id": "moment-of-inertia-intro-3",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#moment-of-inertia-intro-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second moments of area "
},
{
  "id": "moment-of-inertia-intro-6",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#moment-of-inertia-intro-6",
  "type": "Question",
  "number": "10.1.2",
  "title": "",
  "body": "  These three triangles are all the same size. Rank them from largest to largest smallest moment of inertia with respect to the axis.   Right triangle with right angle on bottom right corner. The y-axis is shown in three locations: 1)on the right, 2) in the middle, 3) on the left.     From smallest to largest: .    Although the areas of all three triangles are the same, triangle has the area on both sides of the axis and relatively close to it, and so has the smallest , while triangle has the most of its area far from the axis which makes its moment of inertia largest. We will be able to show later that the .   "
},
{
  "id": "moment-of-inertia-intro-8",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#moment-of-inertia-intro-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centroidal moment of inertia. "
},
{
  "id": "moment-of-inertia-intro-11",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#moment-of-inertia-intro-11",
  "type": "Thinking Deeper",
  "number": "10.1.3",
  "title": "Beam bending.",
  "body": " Beam bending  To get a feel for how moment of inertia affects engineering design, find a ruler, a yardstick, or something similar: long with a rectangular cross section.  Try to bend the ruler both when it's flat and also when it's turned on edge. You will find that bending the ruler around the axis while it's flat is easy compared to bending it the other way, around the axis. Why is it easier to bend the ruler one way than the other? It's the same object, made of the same material either way.  The answer has to due with the moment of inertia, and how it relates to the bending axis.    Bending a ruler.    Dan Baker  CC-BY-SA     As engineers we are not satisfied with merely knowing that it's harder to bend a ruler one way than the other, we'd like to know how much harder ?  For a thick ruler that is tall, the bending resistance about the axis is over 20 times more than the bending resistance the other way, about the axis.  To further see how the moment of inertia comes into play, consider the curvature caused by applying opposing moments to the ends of a beam such as your ruler. You will cause it to bend into an arc of a circle of some radius. A curious engineer would like to know how the curvature of the beam is related to the applied moment, the geometry, and the physical properties of the beam.   Beam of length which is being bent by opposing couple-moments to an arc with angle .    Dan Baker  CC-BY-SA      You will learn in Mechanics of Materials that the relationship is: where:   is a material property called Young's Modulus or the modulus of elasticity which characterizes the stiffness of a material.    is the length of the beam, and    is the moment of inertia of the cross-section of the beam about the bending axis.   is the moment applied to the ends of the beam, and  is the curvature of the beam.  Since and are in the numerator and is in the denominator, a longer beam is more flexible and larger values of or make the beam stiffer. With those properties fixed, angle is directly proportional to the moment .  The sag, or deflection , of a beam when supporting a load is also related to these factors, and the placement of the load as well. For example, if a beam is loaded with a concentrated force at its center its maximum deflection will occur at the midpoint, with  "
},
{
  "id": "polar-moi-2",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#polar-moi-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar moment of inertia "
},
{
  "id": "polar-moi-4",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#polar-moi-4",
  "type": "Thinking Deeper",
  "number": "10.1.6",
  "title": "Why don’t we call the polar moment of inertia <span class=\"process-math\">\\(I_z\\text{?}\\)<\/span>",
  "body": " Why don't we call the polar moment of inertia ?  The squared distance in the polar moment of inertia formula is the distance from the axis, so it would seem reasonable to name the polar moment to be consistent with and which use distances from the and axes.  Instead engineers use the letter to represent this quantity. Why?   In-plane and out-of-plane rotation of element about the , and axes.    If areas only existed in the - plane, this would be fine, but the real world is three-dimensional, so must be reserved to use with areas in the - or - plane.  As shown in the interactive, the rectangular moment of inertia involves rotating element about out-of-plane around an in-plain axis, and the polar moment involves rotating the element in-plane around a perpendicular axis. The two quantities represent fundamentally different things.  "
},
{
  "id": "Chapter_10-product-of-inertia-2",
  "level": "2",
  "url": "Chapter_10-integral-properties-of-shapes.html#Chapter_10-product-of-inertia-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product of inertia "
},
{
  "id": "MOI-common-shapes",
  "level": "1",
  "url": "MOI-common-shapes.html",
  "type": "Section",
  "number": "10.2",
  "title": "Moments of Inertia of Common Shapes",
  "body": " Moments of Inertia of Common Shapes   In following sections we will use the integral definitions of moment of inertia to find the moments of inertia of five common shapes: rectangle, triangle, circle, semi-circle, and quarter-circle with respect to a specified axis. The integration techniques demonstrated can be used to find the moment of inertia of any two-dimensional shape about any desired axis.  Moments of inertia depend on both the shape, and the axis. Pay attention to the placement of the axis with respect to the shape, because if the axis is located elsewhere or oriented differently, the results will be different.  We will begin with the simplest case: the moment of inertia of a rectangle about a horizontal axis located at its base. This case arises frequently and is especially simple because the boundaries of the shape are all constants.    Moment of Inertia of a Rectangle   Consider the rectangle shown. This rectangle is oriented with its bottom-left corner at the origin and its upper-right corner at the point , where and are constants.  What is the moment of inertia of this rectangle with respect to the axis?  To find the moment of inertia, divide the area into square differential elements at where and can range over the entire rectangle and then evaluate the integral using double integration.  The differential element has width and height , so .   Rectangle divided into vertical and horizontal differential strips    It would seem like this is an insignificant difference, but the order of and in this expression determines the order of integration of the double integral. We will try both ways and see that the result is identical.    Using  First, we will evaluate using .  If you are not familiar with double integration, briefly you can think of a double integral as two normal single integrals, one inside and the other outside, which are evaluated one at a time from the inside out. Our integral becomes   The limits on double integrals are usually functions of or , but for this rectangle the limits are all constants . The bottom and top limits are and ; the left and right limits are and . Note that the term can be taken out of the inside integral, because in terms of , it is constant.  Inserting for and the limits into , and integrating starting with the inside integral gives .  Evaluating the limit gives the result . This is the formula for the moment of inertia of a rectangle about an axis passing through its base, and is worth remembering.   The boxed quantity is the result of the inside integral times , and can be interpreted as the differential area of a horizontal strip, . This will allow us to set up a problem as a single integral using strips and skip the inside integral completely as we will see in .   A differential element with height dy and width intersecting with a function at (b,y).    This result means that the moment of inertia of the rectangle depends only on the dimensions of the base and height and has units . The height term is cubed and the base is not, which is unsurprising because the moment of inertia gives more importance to parts of the shape which are farther away from the axis. Doubling the width of the rectangle will double but doubling the height will increase eightfold. In all moment of inertia formulas, the dimension perpendicular to the axis is always cubed.   This result is for this particular situation; you will get a different result for a different shape or a different axis.     Using  Now, we will evaluate using which reverses the order of integration and means that the integral over gets conducted first. Since the distance-squared term is a function of it remains inside the inside integral this time and the result of the inside integral is not an area as it was previously.  Inserting for and the limits into , and integrating gives .  As before, the result is the moment of inertia of a rectangle with base and height , about an axis passing through its base. We have found that the moment of inertia of a rectangle about an axis through its base is , the same as before.   The boxed quantity is the result of the inside integral times , and can be interpreted as the differential moment of inertia of a vertical strip about the axis. This is consistent our previous result. The vertical strip has a base of and a height of , so its moment of inertia by is .   A differential element with width dx and height intersecting with a function at (x,h).    We will use these results to set up problems as a single integral which sum the moments of inertia of the differential strips which cover the area in .   of a Rectangle      A differential element with width dx and height dy at position (x,y) within a rectangle with one point at the origin and another at (b,h).   Find the moment of inertia of the rectangle about the axis using square differential elements .        Following the same procedure as before, we divide the rectangle into square differential elements and evaluate the double integral for from first by integrating over , and then over .   The formula for is the same as the formula as we found previously for except that the base and height terms have reversed roles. Here, the horizontal dimension is cubed and the vertical dimension is the linear term. In all moment of inertia formulas, the dimension perpendicular to the axis is cubed.    This solution demonstrates that the result is the same when the order of integration is reversed. This time we evaluate by dividing the rectangle into square differential elements so the inside integral is now with respect to and the outside integral is with respect to .       Centroidal Moment of Inertia  As discussed in , a moment of inertia about an axis passing through the area's centroid is a Centroidal Moment of Inertia. The convention is to place a bar over the symbol when the axis is centroidal.  The following example finds the centroidal moment of inertia for a rectangle using integration.   Rectangle     A b x h rectangle with centroid at (b\/2, h\/2).    Use integration to find the moment of inertia of a rectangle about the and axes passing through its centroid.  Indicate that the result is a centroidal moment of inertia by putting a bar over the symbol .       .    We can use the same approach with , but now the limits of integration over are now from to .   Notice that the centroidal moment of inertia of the rectangle is smaller than the corresponding moment of inertia about the baseline.  The solution for is similar.     Stresses in a Rectangular Beam  To provide some context for area moments of inertia, let's examine the internal forces in a elastic beam. Assume that some external load is causing an external bending moment which is opposed by the internal forces exposed at a cut.  When an elastic beam is loaded from above, it will sag. Fibers on the top surface will compress and fibers on the bottom surface will stretch, while somewhere in between the fibers will neither stretch or compress. The points where the fibers are not deformed defines a transverse axis, called the neutral axis . The neutral axis passes through the centroid of the beam's cross section.  The change in length of the fibers are caused by internal compression and tension forces which increase linearly with distance from the neutral axis. The internal forces sum to zero in the horizontal direction, but they produce a net couple-moment which resists the external bending moment.    Internal forces in a beam caused by an external load.    Dan Baker  CC-BY-SA     Think about summing the internal moments about the neutral axis on the beam cut face. This moment at a point on the face increases with the square of the distance of the point from the neutral axis because both the internal force and the moment arm are proportional to this distance. The appearance of in this relationship is what connects a bending beam to the area moment of inertia.  The shape of the beam's cross-section determines how easily the beam bends. A beam with more material farther from the neutral axis will have a larger moment of inertia and be stiffer. Of course, the material of which the beam is made is also a factor, but it is independent of this geometrical factor.      Moment of Inertia of a Triangle  We saw in the last section that when solving the double integration could be conducted in either order, and that the result of completing the inside integral was a single integral. We will use these observations to optimize the process of finding moments of inertia for other shapes by avoiding double integration.  The most straightforward approach is to use the definitions of the moment of inertia along with strips parallel to the designated axis, horizontal strips when you want to find the moment of inertia about the axis and vertical strips for the moment of inertia about the axis.   The strip must be parallel in order for to work; when parallel, all parts of the strip are the same distance from the axis.   This approach only works if the bounding function can be described as a function of and as a function of , to enable integration with respect to for the vertical strip, and with respect to for the horizontal strip.   Triangle      Find the moment of inertia of the right triangle with respect to the and axes?       As we did when finding centroids in we need to evaluate the bounding function of the triangle. The bottom are constant values, and , but the top boundary is a straight line passing through the origin and the point at , which has the equation . By inspection we see that the a vertical strip extends from the axis to the function so .  Since vertical strips are parallel to the axis we can find by evaluating this integral with , and substituting for  .  Similarly we will find using horizontal strips, by evaluating this integral with  .  We are expressing in terms of , so everything inside the integral must be constant or expressed in terms of in order to integrate. In particular, we will need to solve for as a function of This is not difficult. . Once this has been done, evaluating the integral is straightforward.   This is the moment of inertia of a right triangle about an axis passing through its base. By reversing the roles of b and h, we also now have the moment of inertia of a right triangle about an axis passing through its vertical side. .      Moment of Inertia of a Differential Strip  We saw in that a straightforward way to find the moment of inertia using a single integration is to use strips which are parallel to the axis of interest, so use vertical strips to find and horizontal strips to find .  This method requires expressing the bounding function both as a function of and as a function of : and . There are many functions where converting from one form to the other is not easy.  As an example, lets try finding and for the spandrel bounded by .   Finding using vertical strips is relatively easy. Letting and substituting we have .   A function y=x^3+x with the area under the curve shaded from (0,0) to (1,2).    Finding using horizontal strips is anything but easy. In fact, the integral that needs to be solved is this monstrosity .  Clearly, a better approach would be helpful.  When using strips which are parallel to the axis of interest is impractical mathematically, the alternative is to use strips which are perpendicular to the axis.  Applying our previous result to a vertical strip with height and infinitesimal width gives the strip's differential moment of inertia. In most cases, will be a function of . . This is the same result that we saw previously after integrating the inside integral for the moment of inertia of a rectangle.  This result makes it much easier to find for the spandrel that was nearly impossible to find with horizontal strips.   The same approach can be used with a horizontal strip high and wide, in which case we have . The width will usually have to be expressed as a function of .   The expression for assumes that the vertical strip has a lower bound on the axis. If this is not the case, then find the for the area between the bounds by subtracting for the rectangular element below the lower bound from for the element from the axis to the upper bound. A similar procedure can be used for horizontal strips.   Function y=3x^2 with vertical strip from (x,0) to (x, y2). The graph is shaded between y = y2 and y=3x^2. The vertical strip is shaded in two different patterns below and above the function y=3x^2 at (x, y1)     This approach is illustrated in the next example.   Moment of Inertia for Area Between Two Curves     Graph with area shaded between two functions y1=x^2\/4 and y2 = x\/4.   Use vertical strips to find both and for the area bounded by the functions . Units are cm.             Set up the integral  The area is bounded by the functions   By equating the two functions, we learn that they intersect at and , so the limits on are and .  The differential area for vertical strip is .    Find  For vertical strips, which are parallel to the axis we can use the definition of the Moment of Inertia.     Find  For vertical strips, which are perpendicular to the axis, we will take subtract the moment of inertia of the area below from the moment of inertia of the area below .          Circles, Semicircles, and Quarter-circles  In this section, we will use polar coordinates and symmetry to find the moments of inertia of circles, semi-circles and quarter-circles.  We will start by finding the polar moment of inertia of a circle with radius , centered at the origin. You will recall from that the polar moment of inertia is similar to the ordinary moment of inertia, except the distance squared term is the distance from the element to a point in the plane rather than the perpendicular distance to an axis, and it uses the symbol with a subscript indicating the point.  To take advantage of the geometry of a circle, we'll divide the area into thin rings, as shown in the diagram, and define the distance from the origin to a point on the ring as . The reason for using thin rings for is the same reason we used strips parallel to the axis of interest to find and ; all points on the differential ring are the same distance from the origin, so we can find the moment of inertia using single integration.   Circle divided into differential rings    The differential area of a circular ring is the circumference of a circle of radius times the thickness . .  Adapting the basic formula for the polar moment of inertia to our labels, and noting that limits of integration are from to , we get .  Proceeding with the integration, .  This is the polar moment of inertia of a circle about a point at its center.  With this result, we can find the rectangular moments of inertia of circles, semi-circles and quarter circle simply. Noting that the polar moment of inertia of a shape is the sum of its rectangular moments of inertia and , these are equal to each other for a circle due to its symmetry. Therefore, by , which is easily proven,    Circle centered at (0,0)    .   This is the moment of inertia of a circle about a vertical or horizontal axis passing through its center.  A circle consists of two semi-circles above and below the axis, so the moment of inertia of a semi-circle about a diameter on the axis is just half of the moment of inertia of a whole circle. The moment of inertia about the vertical centerline is the same.    Half circle with base on x-axis and centered on y-axis. The x' axis intersects the centroid.   .   Similarly, the moment of inertia of a quarter circle is half the moment of inertia of a semi-circle, so    Quarter circle with flat sides on x-axis and y-axis. The x' and y' axes intersect the centroid.   .   In these diagrams, the centroidal axes are red, and moments of inertia about centroidal axes are indicated by the overbar. We will see how to use the parallel axis theorem to find the centroidal moments of inertia for semi- and quarter-circles in .    Summary of Integration Techniques  Here is a summary of the alternate approaches to finding the moment of inertia of a shape using integration.  You may choose to divide the shape into square differential elements to compute the moment of inertia, using the fundamental definitions, The disadvantage of this approach is that you need to set up and compute a double integral. Identifying the correct limits on the integrals is often difficult.  If you would like to avoid double integration, you may use vertical or horizontal strips, but you must take care to apply the correct integral. If you use vertical strips to find or horizontal strips to find , then you can still use , but skip the double integration. When the entire strip is the same distance from the designated axis, integrating with a parallel strip is equivalent to performing the inside integration of .  As we have seen, it can be difficult to solve the bounding functions properly in terms of or to use parallel strips. In this case, you can use vertical strips to find or horizontal strips to find as discussed by integrating the differential moment of inertia of the strip, as discussed in .   Moment of Inertia Integration Strategies       Element         Differential element dx-dy at (x, y).       or             Differential element (a-x)*dy with left end of element at (x, y).               Differential element y*dx with top end of element at (x, y).               "
},
{
  "id": "MOI-rectangle-2-5",
  "level": "2",
  "url": "MOI-common-shapes.html#MOI-rectangle-2-5",
  "type": "Figure",
  "number": "10.2.1",
  "title": "",
  "body": " Rectangle divided into vertical and horizontal differential strips   "
},
{
  "id": "dx-first-9",
  "level": "2",
  "url": "MOI-common-shapes.html#dx-first-9",
  "type": "Warning",
  "number": "10.2.2",
  "title": "",
  "body": " This result is for this particular situation; you will get a different result for a different shape or a different axis.  "
},
{
  "id": "Chapter_10-example-i_y-of-a-rectangle",
  "level": "2",
  "url": "MOI-common-shapes.html#Chapter_10-example-i_y-of-a-rectangle",
  "type": "Example",
  "number": "10.2.3",
  "title": "<span class=\"process-math\">\\(I_y\\)<\/span> of a Rectangle.",
  "body": " of a Rectangle      A differential element with width dx and height dy at position (x,y) within a rectangle with one point at the origin and another at (b,h).   Find the moment of inertia of the rectangle about the axis using square differential elements .        Following the same procedure as before, we divide the rectangle into square differential elements and evaluate the double integral for from first by integrating over , and then over .   The formula for is the same as the formula as we found previously for except that the base and height terms have reversed roles. Here, the horizontal dimension is cubed and the vertical dimension is the linear term. In all moment of inertia formulas, the dimension perpendicular to the axis is cubed.    This solution demonstrates that the result is the same when the order of integration is reversed. This time we evaluate by dividing the rectangle into square differential elements so the inside integral is now with respect to and the outside integral is with respect to .    "
},
{
  "id": "Chapter_10-example-rectangle",
  "level": "2",
  "url": "MOI-common-shapes.html#Chapter_10-example-rectangle",
  "type": "Example",
  "number": "10.2.4",
  "title": "Rectangle.",
  "body": " Rectangle     A b x h rectangle with centroid at (b\/2, h\/2).    Use integration to find the moment of inertia of a rectangle about the and axes passing through its centroid.  Indicate that the result is a centroidal moment of inertia by putting a bar over the symbol .       .    We can use the same approach with , but now the limits of integration over are now from to .   Notice that the centroidal moment of inertia of the rectangle is smaller than the corresponding moment of inertia about the baseline.  The solution for is similar.   "
},
{
  "id": "Chapter_10-centroidal-moment-of-inertia-5",
  "level": "2",
  "url": "MOI-common-shapes.html#Chapter_10-centroidal-moment-of-inertia-5",
  "type": "Thinking Deeper",
  "number": "10.2.5",
  "title": "Stresses in a Rectangular Beam.",
  "body": " Stresses in a Rectangular Beam  To provide some context for area moments of inertia, let's examine the internal forces in a elastic beam. Assume that some external load is causing an external bending moment which is opposed by the internal forces exposed at a cut.  When an elastic beam is loaded from above, it will sag. Fibers on the top surface will compress and fibers on the bottom surface will stretch, while somewhere in between the fibers will neither stretch or compress. The points where the fibers are not deformed defines a transverse axis, called the neutral axis . The neutral axis passes through the centroid of the beam's cross section.  The change in length of the fibers are caused by internal compression and tension forces which increase linearly with distance from the neutral axis. The internal forces sum to zero in the horizontal direction, but they produce a net couple-moment which resists the external bending moment.    Internal forces in a beam caused by an external load.    Dan Baker  CC-BY-SA     Think about summing the internal moments about the neutral axis on the beam cut face. This moment at a point on the face increases with the square of the distance of the point from the neutral axis because both the internal force and the moment arm are proportional to this distance. The appearance of in this relationship is what connects a bending beam to the area moment of inertia.  The shape of the beam's cross-section determines how easily the beam bends. A beam with more material farther from the neutral axis will have a larger moment of inertia and be stiffer. Of course, the material of which the beam is made is also a factor, but it is independent of this geometrical factor.  "
},
{
  "id": "Chapter_10-example-triangle",
  "level": "2",
  "url": "MOI-common-shapes.html#Chapter_10-example-triangle",
  "type": "Example",
  "number": "10.2.7",
  "title": "Triangle.",
  "body": " Triangle      Find the moment of inertia of the right triangle with respect to the and axes?       As we did when finding centroids in we need to evaluate the bounding function of the triangle. The bottom are constant values, and , but the top boundary is a straight line passing through the origin and the point at , which has the equation . By inspection we see that the a vertical strip extends from the axis to the function so .  Since vertical strips are parallel to the axis we can find by evaluating this integral with , and substituting for  .  Similarly we will find using horizontal strips, by evaluating this integral with  .  We are expressing in terms of , so everything inside the integral must be constant or expressed in terms of in order to integrate. In particular, we will need to solve for as a function of This is not difficult. . Once this has been done, evaluating the integral is straightforward.   This is the moment of inertia of a right triangle about an axis passing through its base. By reversing the roles of b and h, we also now have the moment of inertia of a right triangle about an axis passing through its vertical side. .   "
},
{
  "id": "Chapter_10-example-moment-of-inertia-for-area-between-two-curves",
  "level": "2",
  "url": "MOI-common-shapes.html#Chapter_10-example-moment-of-inertia-for-area-between-two-curves",
  "type": "Example",
  "number": "10.2.8",
  "title": "Moment of Inertia for Area Between Two Curves.",
  "body": " Moment of Inertia for Area Between Two Curves     Graph with area shaded between two functions y1=x^2\/4 and y2 = x\/4.   Use vertical strips to find both and for the area bounded by the functions . Units are cm.             Set up the integral  The area is bounded by the functions   By equating the two functions, we learn that they intersect at and , so the limits on are and .  The differential area for vertical strip is .    Find  For vertical strips, which are parallel to the axis we can use the definition of the Moment of Inertia.     Find  For vertical strips, which are perpendicular to the axis, we will take subtract the moment of inertia of the area below from the moment of inertia of the area below .       "
},
{
  "id": "MOI-circles-5",
  "level": "2",
  "url": "MOI-common-shapes.html#MOI-circles-5",
  "type": "Figure",
  "number": "10.2.9",
  "title": "",
  "body": " Circle divided into differential rings   "
},
{
  "id": "Chapter_10-summary-of-integration-techniques-6",
  "level": "2",
  "url": "MOI-common-shapes.html#Chapter_10-summary-of-integration-techniques-6",
  "type": "Table",
  "number": "10.2.10",
  "title": "Moment of Inertia Integration Strategies",
  "body": " Moment of Inertia Integration Strategies       Element         Differential element dx-dy at (x, y).       or             Differential element (a-x)*dy with left end of element at (x, y).               Differential element y*dx with top end of element at (x, y).            "
},
{
  "id": "parallel-axis-theorem-section",
  "level": "1",
  "url": "parallel-axis-theorem-section.html",
  "type": "Section",
  "number": "10.3",
  "title": "Parallel Axis Theorem",
  "body": " Parallel Axis Theorem   The parallel axis theorem relates the moment of inertia of a shape about an arbitrary axis to its moment of inertia about a parallel centroidal axis.  This theorem is particularly useful because if we know the centroidal moment of inertia of a shape, we can calculate its moment of inertia about any parallel axis by adding an appropriate correction factor. Alternately, if we know the moment of inertia about an axis, we can find the associated centroidal moment of inertia by subtracting the same factor.  The centroidal moment of inertia of common shapes are well known, and readily available in tables of properties of shapes such as .    Derivation    We will use the defining equation for the moment of inertia to derive the parallel axis theorem.  The diagram shows an arbitrary shape, and two parallel axes: the axis, drawn in red, passes through the centroid of the shape at , and the axis, which is parallel and separated by a distance, . The shape has area , which is divided into square differential elements . The distance from the axis to the element is , and the distance from the axis is .  By , the moment of inertia of the shape about the and axes are     Definitions for the parallel axis theorem.   Image illustrating parallel-axis-theorem.   Dan Baker  CC-BY-SA      The first is the value we are looking for, and the second is the centroidal moment of inertia of the shape. These two are related through the distance , because . Substituting that relation into the first equation and expanding the binomial gives .  You should recognize these three integrals. The first is the centroidal moment of inertia of the shape , and the third is the total area of the shape, . The middle integral is , the first moment of area with respect to the centroidal axis . So we have, .  Furthermore, is exactly zero because the axis passes through the centroid, meaning that elements of area above and below the centroidal axis exactly balance and cancel each other out. After dropping the middle term we get the version of the parallel axis theorem which you should remember, .  The subscripts designating the and axes have been dropped because this equation is applicable to any direction of parallel axes, not specifically horizontal axes.  This equation says that you find the moment of inertia of a shape about any axis by adding to the parallel centroidal moment of inertia. You can consider the term as correction factor to account for the distance of the axis from the centroid. This term is always positive, so the centroidal moment of inertia is always the minimum moment of inertia for a particular axis direction.  The next example show how the parallel axis theorem is typically used to find the moment of inertia of a shape about an axis, by using then centroidal moment of inertia formulas found in .   Circular Ring     Circular ring with inner radius ri and outer radius ro. The left edge is a distance of a mm from the y-axis. The y' axis intersects the centroid.    Use the parallel axis theorem to find the moment of inertia of the circular ring about the axis.  The dimensions of the ring are , , and         To apply the parallel axis theorem, we need three pieces of information   The centroidal moment of inertia of the ring, ,    the area of the ring, ,    the distance between the two parallel axes, .     The area of the ring is found by subtracting the area of the inner circle from the area of the outer circle. The centroidal moment of inertia is calculated similarly using . The distance between the and axis is available from the diagram. Inserting these values into the parallel axis theorem gives,   It is interesting that the correction factor is more than 20 times greater than the centroidal moment of inertia of the ring. This indicates the importance of the distance squared term on the moment of inertia of a shape.   You may feel like the answer to this problem is too big . Large answers are normal in problems like this because the moment of inertia involves raising lengths the fourth power.  If it really bothers you, you can convert the results from to , but then the number will probably feel too small to you. It's best not to worry about it.     The parallel axis theorem can also be used to find a centroidal moment of inertia when you already know the moment of inertia of a shape about another axis, by using the theorem backwards , .   Centroidal Moment of Inertia of a Triangle      Right triangle with vertices at (0,0), (b,0), and (0,h). Axes x' and y' intersect the centroid.   Find the centroidal moment of inertia of a triangle knowing that the moment of inertia about its base is .         For the triangle the moment of we have the following information: , , and .  Looking for :   The procedure for is similar, or you can simply reverse the roles of and .     Centroidal Moment of inertia of a Semi-Circle     Half circle with base on x-axis and centered on y-axis. The x' axis intersects the centroid.   Find the centroidal moment of inertia of a semi-circle knowing that the moment of inertia about its base is .        The area of a semicircle is and the distance between the parallel axes is , so      Interactive: Rectangle  This interactive allows you to change the location and size of the grey rectangle. Try to compute both the centroidal area moment of inertia and and the area moment of inertia about the system axes and    Moment of Inertia of a Rectangle      Interactive: Semi-Circle  Use this interactive to practice computing the area moments of inertia of the semi-circle about the centroidal axis, the bottom edge , and the system axis. You can change the location and size of the semicircle by moving the red points..    Moment of Inertia of a Semi-Circle       Moments of Inertia Table  This table summarizes the properties of the common shapes discussed previously.    Moments of Inertia of Common Shapes        Shape  Centroid  Centroidal MOI        Rectangle with base b and height h                  Right triangle with vertices (0,0), (0, h), and (b, 0)                 Circle with centered at *x-bar, y-bar). The x' and y' axes intersect the centroid.                 Half circle with base on x-axis and centered on y-axis. The x' axis intersects the centroid.                    Quarter circle with base on x-axis and side on y-axis. The x' axis intersects the centroid.                 "
},
{
  "id": "MOI-parallel-axis-theorem",
  "level": "2",
  "url": "parallel-axis-theorem-section.html#MOI-parallel-axis-theorem",
  "type": "Figure",
  "number": "10.3.1",
  "title": "",
  "body": " Definitions for the parallel axis theorem.   Image illustrating parallel-axis-theorem.   Dan Baker  CC-BY-SA    "
},
{
  "id": "Chapter_10-example-circular-ring",
  "level": "2",
  "url": "parallel-axis-theorem-section.html#Chapter_10-example-circular-ring",
  "type": "Example",
  "number": "10.3.2",
  "title": "Circular Ring.",
  "body": " Circular Ring     Circular ring with inner radius ri and outer radius ro. The left edge is a distance of a mm from the y-axis. The y' axis intersects the centroid.    Use the parallel axis theorem to find the moment of inertia of the circular ring about the axis.  The dimensions of the ring are , , and         To apply the parallel axis theorem, we need three pieces of information   The centroidal moment of inertia of the ring, ,    the area of the ring, ,    the distance between the two parallel axes, .     The area of the ring is found by subtracting the area of the inner circle from the area of the outer circle. The centroidal moment of inertia is calculated similarly using . The distance between the and axis is available from the diagram. Inserting these values into the parallel axis theorem gives,   It is interesting that the correction factor is more than 20 times greater than the centroidal moment of inertia of the ring. This indicates the importance of the distance squared term on the moment of inertia of a shape.   You may feel like the answer to this problem is too big . Large answers are normal in problems like this because the moment of inertia involves raising lengths the fourth power.  If it really bothers you, you can convert the results from to , but then the number will probably feel too small to you. It's best not to worry about it.    "
},
{
  "id": "Chapter_10-example-centroidal-moment-of-inertia-of-a-triangle",
  "level": "2",
  "url": "parallel-axis-theorem-section.html#Chapter_10-example-centroidal-moment-of-inertia-of-a-triangle",
  "type": "Example",
  "number": "10.3.3",
  "title": "Centroidal Moment of Inertia of a Triangle.",
  "body": " Centroidal Moment of Inertia of a Triangle      Right triangle with vertices at (0,0), (b,0), and (0,h). Axes x' and y' intersect the centroid.   Find the centroidal moment of inertia of a triangle knowing that the moment of inertia about its base is .         For the triangle the moment of we have the following information: , , and .  Looking for :   The procedure for is similar, or you can simply reverse the roles of and .   "
},
{
  "id": "Chapter_10-example-centroidal-moment-of-inertia-of-a-semi-circle",
  "level": "2",
  "url": "parallel-axis-theorem-section.html#Chapter_10-example-centroidal-moment-of-inertia-of-a-semi-circle",
  "type": "Example",
  "number": "10.3.4",
  "title": "Centroidal Moment of inertia of a Semi-Circle.",
  "body": " Centroidal Moment of inertia of a Semi-Circle     Half circle with base on x-axis and centered on y-axis. The x' axis intersects the centroid.   Find the centroidal moment of inertia of a semi-circle knowing that the moment of inertia about its base is .        The area of a semicircle is and the distance between the parallel axes is , so    "
},
{
  "id": "Chapter_10-example-interactive--rectangle",
  "level": "2",
  "url": "parallel-axis-theorem-section.html#Chapter_10-example-interactive--rectangle",
  "type": "Example",
  "number": "10.3.5",
  "title": "Interactive: Rectangle.",
  "body": " Interactive: Rectangle  This interactive allows you to change the location and size of the grey rectangle. Try to compute both the centroidal area moment of inertia and and the area moment of inertia about the system axes and    Moment of Inertia of a Rectangle    "
},
{
  "id": "Chapter_10-example-interactive--semi-circle",
  "level": "2",
  "url": "parallel-axis-theorem-section.html#Chapter_10-example-interactive--semi-circle",
  "type": "Example",
  "number": "10.3.7",
  "title": "Interactive: Semi-Circle.",
  "body": " Interactive: Semi-Circle  Use this interactive to practice computing the area moments of inertia of the semi-circle about the centroidal axis, the bottom edge , and the system axis. You can change the location and size of the semicircle by moving the red points..    Moment of Inertia of a Semi-Circle    "
},
{
  "id": "MOI-table-3",
  "level": "2",
  "url": "parallel-axis-theorem-section.html#MOI-table-3",
  "type": "Table",
  "number": "10.3.9",
  "title": "Moments of Inertia of Common Shapes",
  "body": " Moments of Inertia of Common Shapes        Shape  Centroid  Centroidal MOI        Rectangle with base b and height h                  Right triangle with vertices (0,0), (0, h), and (b, 0)                 Circle with centered at *x-bar, y-bar). The x' and y' axes intersect the centroid.                 Half circle with base on x-axis and centered on y-axis. The x' axis intersects the centroid.                    Quarter circle with base on x-axis and side on y-axis. The x' axis intersects the centroid.               "
},
{
  "id": "Chapter_10-moment-of-inertia-of-composite-shapes",
  "level": "1",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html",
  "type": "Section",
  "number": "10.4",
  "title": "Composite Shapes",
  "body": " Composite Shapes    Where do the common shape area moment of inertia equations come from?  What is the parallel axis theorem?  When do you need to apply the parallel axis theorem?  About which point do you find the smallest area moments of inertia? What is it about this point that is so special?     In this section we will find the moment of inertia of shapes formed by combining simple shapes like rectangles, triangles and circles much the same way we did to find centroids in .  The procedure is to divide the complex shape into its sub shapes and then use the centroidal moment of inertia formulas from , along with the parallel axis theorem to calculate the moments of inertia of parts, and finally combine them to find the moment of inertia of the original shape.    Composite Area Method  For a composite shape made up of subparts, the moment of inertia of the whole shape is the sum of the moments of inertia of the individual parts, however the moment of inertia of any holes are subtracted from the total of the positive areas.  Moments of inertia are always calculated relative to a specific axis, so the moments of inertia of all the sub shapes must be calculated with respect to this same axis, which will usually involve applying the parallel axis theorem. .   The method is demonstrated in the following examples.   Beam Design   You have three long wooden 2 6's and you want to nail them together them to make the stiffest possible beam. The stiffness of a beam is proportional to the moment of inertia of the beam's cross-section about a horizontal axis passing through its centroid. The actual dimensions of nominal 2 6 lumber are by .    Three wooden segments arranged vertically so the height is 6\" and width is three beams times 2\" per beam.    Three wooden segments arranged in the shape of the capital letter I.     Which of the arrangements will be the stiffest, and what is the ratio of the two moments of inertia?       The I-beam has more than 3.6 times the stiffness of the sandwich beam!    Given: , .  In case 1 the centroids of all three rectangles are on the axis, so the parallel axis theorem is unnecessary.   This value is the same as the moment of inertia of a rectangle about its centroid.  In case 2, the parallel axis theorem must be used for the upper and lower rectangles, since their centroids are not on the axis.    The I-beam is about 3.6 times stiffer than the sandwich beam. This optimization of material usage is the reason we use I-beams.     T Shape     T-shape. Horizontal segment is 90 mm wide by 20 mm tall. Below that, the vertical segment is 30 mm wide by 60 mm tall.   Find the moment of inertia of the T shape about the and axes.             Strategy  Divide the T shape into a vertical rectangle (1), and a horizontal rectangle (2) then add the moments of inertia of the two parts.     MOI about the Axis  The bottom edge of rectangle 1 is on the axis. Using the formula from gives .  The centroid of rectangle 2 is located above the axis so we must use the parallel axis theorem , so .  The moment of inertia of the entire T shape about the axis is the sum of these two values, .    MOI about the Axis  We can use the same procedure to find the moment of inertia about the axis, however it is usually more convenient to organize all the necessary information in a table rather than writing the equations explicitly.  We will use the parallel axis theorem for both rectangles with representing the distance between the axis and the centroid of the part. In this example is the same for both parts, but that will not always be true.    Part  Dimensions         Units          1          2          Total                 Fillet     L-shaped segment 10 in high by 9 in at the base, thickness is 3\". The fillet at the interior of the L-shape has a radius of 3\".   Find the moment inertia of the area about the axis.           Strategy   First, divide the area into four parts:  a rectangle  a rectangle  a rectangle, and  a removed quarter-circle with a radius.      Then set up a table and apply the parallel axis theorem as in the previous example. Since the quarter-circle is removed, subtract its moment of inertia from total of the other shapes.    MOI about the Axis  The centroidal moment of inertia of a quarter-circle, from is   The distance from the top edge of the quarter-circle down to its centroid is , so the distance from the axis to its centroid is .  Fill out the table of information.    Part  Dimensions         Units          1          2          3          4          Take care to subtract the moment of inertia of the removed quarter-circle from the total. .        Concrete Pipe Casing   The cross section of a concrete pipe casing composed of a rectangular block, a triangular wedge, and a circular pipe formed through the middle of the block is shown below.  As the pipe casing will be subject to various loads, find the area moment of inertia of the cross section about the and axes.    Composite shape made of a rectangle with a circle cut off. A right triangle is flush with the right side of the rectangle. The coordinates are displayed in the following table.             Strategy  Organize all the necessary information into a table, then total the moments of inertia of the parts to get the moment of inertia of the whole shape. Remember that the hole is removed from the shape, so its contribution to the total moment of inertia is negative.    Table    Part           Units            Rectangle 1          7   -3  6860  1260             Triangle 2         16.67  -4.67  11111  871.1             Circular Hole 3        7  -3  -1385  -254.5            Total  151.7    16586  1877  1325  2365      Total     Alternately, you could find the moments of inertia by adding the sums of the columns, since you are adding the same values together, just in a different order.         Interactive: Composite Rectangles   This interactive shows a composite shape consisting of a large rectangle with a smaller rectangle subtracted. You can change the location and size of the rectangles by moving the red and blue points.  Use the interactive to see how changes to the rectangles affects the moments of inertia of this shape about the system axis. Notice that for two-part shapes like this, the centroid of the composite shape is on the line connecting the centroids of the two parts.  For calculations, it is convenient to collect all the needed information in a table as is done here.    Moment of Inertia of a Rectangle about the axis.        Structural Steel Sections  Steel is a strong, versatile, and durable material commonly used for girders, beams, and columns in steel structures such as buildings, bridges, and ships. When possible designers prefer to use prefabricated Standardized Structural Steel to minimize material cost.  Structural steel is available in a variety of shapes called sections , shown below. These include universal beams and columns (W, S), structural channels (C), equal and unequal angle sections (L), Tee shapes (T), rectangular, square and round hollow structural sections (HSS), bar, rod, and plate. All are available in a range of sizes from small to huge. Steel sections are manufactured by hot or cold rolling or fabricated by welding flat or curved steel plates together.   AISC Standard Sections: Left to right -- Wide-Flange (W), American Standard (S), Channel (C), Equal Angle (L), Unequal Angle (L), Structural Tee (T), Rectangle (HSS), Square (HSS), Round (HSS).   Left to right Wide-Flange-wide I-shape, American Standard thin I-shape, Channel-thin square C-shape, Equal Angle wide L-shape, Unequal Angle- L-shape, Structural Tee T-shape, Rectangle shape, Square, Round.   Dan Baker  CC-BY-SA     Designers and engineers must select the most appropriate and economical section which can support the potential tension, compression, shear, torsion and bending loads. Tables of properties of Standard Steel Sections are published by the American Institute of Steel Construction, and are used to simplify the process. The tables contain important properties of the sections, including dimensions, cross sectional area, weight per foot, and moment of inertia about vertical and horizontal axes. An abbreviated subset of the AISC tables are available in .  In this section we will use the information in the AISC tables to find the moments of inertia of standard sections and also of composite shapes incorporating standard sections.   The top and bottom pieces of an I-beam are called flanges. The middle portion is referred to as the web. The flanges take most of the internal compression and tension forces as they are located the furthest from the neutral axis, and the web mainly acts to support any shear forces and hold the two flanges apart. The transverse axis through the centroid of the cross section is called the neutral axis, and cutting plane through the beam at the neutral axis is called the neutral plane, or neutral surface. This surface does not lengthen or shorten during bending.   Beam Nomenclature   Top and bottom of beam are flanges. Vertical center column is the web. Depth is top to bottom measurement. Neutral axis and neutral plane intersect the centroid.   Dan Baker  CC-BY-SA       Built-up beam    A built-up beam consists of two L6 4 1\/2 angles attached to a 8 1 plate as shown. Determine  the distance from the axis to the neutral axis, which passes through the centroid of the combined shape, and  the moment of inertia of the combined shape about the neutral axis.     A built-up beam of L6 x 4 x 1\/2 angles attached to a 8 x 1 plate.              Strategy  Determine the properties of the sub shapes with respect to the axis, and then use them to find the neutral axis.  Use the parallel axis theorem to find the moment of inertia of the parts with respect to the neutral axis.  Take advantage of the fact that the two angles are identical and positioned similarly.    Find the neutral axis  For one L angle, from  .  For the rectangle .  Find the distance to the neutral axis .    Find the Moment of Inertia  The distance between the neutral axis is and the centroids of the subparts are .  The moment of inertia of the rectangle about the axis .  The moment of inertia of one angle about the axis .  The moment of inertia of the built up beam about the neutral axis .        "
},
{
  "id": "Chapter_10-moment-of-inertia-of-composite-shapes-2",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#Chapter_10-moment-of-inertia-of-composite-shapes-2",
  "type": "Key Questions",
  "number": "10.4",
  "title": "",
  "body": "  Where do the common shape area moment of inertia equations come from?  What is the parallel axis theorem?  When do you need to apply the parallel axis theorem?  About which point do you find the smallest area moments of inertia? What is it about this point that is so special?   "
},
{
  "id": "Chapter_10-example-beam-design",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#Chapter_10-example-beam-design",
  "type": "Example",
  "number": "10.4.1",
  "title": "Beam Design.",
  "body": " Beam Design   You have three long wooden 2 6's and you want to nail them together them to make the stiffest possible beam. The stiffness of a beam is proportional to the moment of inertia of the beam's cross-section about a horizontal axis passing through its centroid. The actual dimensions of nominal 2 6 lumber are by .    Three wooden segments arranged vertically so the height is 6\" and width is three beams times 2\" per beam.    Three wooden segments arranged in the shape of the capital letter I.     Which of the arrangements will be the stiffest, and what is the ratio of the two moments of inertia?       The I-beam has more than 3.6 times the stiffness of the sandwich beam!    Given: , .  In case 1 the centroids of all three rectangles are on the axis, so the parallel axis theorem is unnecessary.   This value is the same as the moment of inertia of a rectangle about its centroid.  In case 2, the parallel axis theorem must be used for the upper and lower rectangles, since their centroids are not on the axis.    The I-beam is about 3.6 times stiffer than the sandwich beam. This optimization of material usage is the reason we use I-beams.   "
},
{
  "id": "Chapter_10-example-t-shape",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#Chapter_10-example-t-shape",
  "type": "Example",
  "number": "10.4.2",
  "title": "T Shape.",
  "body": " T Shape     T-shape. Horizontal segment is 90 mm wide by 20 mm tall. Below that, the vertical segment is 30 mm wide by 60 mm tall.   Find the moment of inertia of the T shape about the and axes.             Strategy  Divide the T shape into a vertical rectangle (1), and a horizontal rectangle (2) then add the moments of inertia of the two parts.     MOI about the Axis  The bottom edge of rectangle 1 is on the axis. Using the formula from gives .  The centroid of rectangle 2 is located above the axis so we must use the parallel axis theorem , so .  The moment of inertia of the entire T shape about the axis is the sum of these two values, .    MOI about the Axis  We can use the same procedure to find the moment of inertia about the axis, however it is usually more convenient to organize all the necessary information in a table rather than writing the equations explicitly.  We will use the parallel axis theorem for both rectangles with representing the distance between the axis and the centroid of the part. In this example is the same for both parts, but that will not always be true.    Part  Dimensions         Units          1          2          Total               "
},
{
  "id": "Chapter_10-example-fillet",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#Chapter_10-example-fillet",
  "type": "Example",
  "number": "10.4.3",
  "title": "Fillet.",
  "body": " Fillet     L-shaped segment 10 in high by 9 in at the base, thickness is 3\". The fillet at the interior of the L-shape has a radius of 3\".   Find the moment inertia of the area about the axis.           Strategy   First, divide the area into four parts:  a rectangle  a rectangle  a rectangle, and  a removed quarter-circle with a radius.      Then set up a table and apply the parallel axis theorem as in the previous example. Since the quarter-circle is removed, subtract its moment of inertia from total of the other shapes.    MOI about the Axis  The centroidal moment of inertia of a quarter-circle, from is   The distance from the top edge of the quarter-circle down to its centroid is , so the distance from the axis to its centroid is .  Fill out the table of information.    Part  Dimensions         Units          1          2          3          4          Take care to subtract the moment of inertia of the removed quarter-circle from the total. .      "
},
{
  "id": "Chapter_10-example-concrete-pipe-casing",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#Chapter_10-example-concrete-pipe-casing",
  "type": "Example",
  "number": "10.4.4",
  "title": "Concrete Pipe Casing.",
  "body": " Concrete Pipe Casing   The cross section of a concrete pipe casing composed of a rectangular block, a triangular wedge, and a circular pipe formed through the middle of the block is shown below.  As the pipe casing will be subject to various loads, find the area moment of inertia of the cross section about the and axes.    Composite shape made of a rectangle with a circle cut off. A right triangle is flush with the right side of the rectangle. The coordinates are displayed in the following table.             Strategy  Organize all the necessary information into a table, then total the moments of inertia of the parts to get the moment of inertia of the whole shape. Remember that the hole is removed from the shape, so its contribution to the total moment of inertia is negative.    Table    Part           Units            Rectangle 1          7   -3  6860  1260             Triangle 2         16.67  -4.67  11111  871.1             Circular Hole 3        7  -3  -1385  -254.5            Total  151.7    16586  1877  1325  2365      Total     Alternately, you could find the moments of inertia by adding the sums of the columns, since you are adding the same values together, just in a different order.       "
},
{
  "id": "Chapter_10-example-interactive--composite-rectangles",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#Chapter_10-example-interactive--composite-rectangles",
  "type": "Example",
  "number": "10.4.5",
  "title": "Interactive: Composite Rectangles.",
  "body": " Interactive: Composite Rectangles   This interactive shows a composite shape consisting of a large rectangle with a smaller rectangle subtracted. You can change the location and size of the rectangles by moving the red and blue points.  Use the interactive to see how changes to the rectangles affects the moments of inertia of this shape about the system axis. Notice that for two-part shapes like this, the centroid of the composite shape is on the line connecting the centroids of the two parts.  For calculations, it is convenient to collect all the needed information in a table as is done here.    Moment of Inertia of a Rectangle about the axis.     "
},
{
  "id": "AISC-samples",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#AISC-samples",
  "type": "Figure",
  "number": "10.4.7",
  "title": "",
  "body": " AISC Standard Sections: Left to right -- Wide-Flange (W), American Standard (S), Channel (C), Equal Angle (L), Unequal Angle (L), Structural Tee (T), Rectangle (HSS), Square (HSS), Round (HSS).   Left to right Wide-Flange-wide I-shape, American Standard thin I-shape, Channel-thin square C-shape, Equal Angle wide L-shape, Unequal Angle- L-shape, Structural Tee T-shape, Rectangle shape, Square, Round.   Dan Baker  CC-BY-SA    "
},
{
  "id": "AISC-Nomenclature",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#AISC-Nomenclature",
  "type": "Figure",
  "number": "10.4.8",
  "title": "",
  "body": " Beam Nomenclature   Top and bottom of beam are flanges. Vertical center column is the web. Depth is top to bottom measurement. Neutral axis and neutral plane intersect the centroid.   Dan Baker  CC-BY-SA    "
},
{
  "id": "Chapter_10-example-built-up-beam",
  "level": "2",
  "url": "Chapter_10-moment-of-inertia-of-composite-shapes.html#Chapter_10-example-built-up-beam",
  "type": "Example",
  "number": "10.4.9",
  "title": "Built-up beam.",
  "body": " Built-up beam    A built-up beam consists of two L6 4 1\/2 angles attached to a 8 1 plate as shown. Determine  the distance from the axis to the neutral axis, which passes through the centroid of the combined shape, and  the moment of inertia of the combined shape about the neutral axis.     A built-up beam of L6 x 4 x 1\/2 angles attached to a 8 x 1 plate.              Strategy  Determine the properties of the sub shapes with respect to the axis, and then use them to find the neutral axis.  Use the parallel axis theorem to find the moment of inertia of the parts with respect to the neutral axis.  Take advantage of the fact that the two angles are identical and positioned similarly.    Find the neutral axis  For one L angle, from  .  For the rectangle .  Find the distance to the neutral axis .    Find the Moment of Inertia  The distance between the neutral axis is and the centroids of the subparts are .  The moment of inertia of the rectangle about the axis .  The moment of inertia of one angle about the axis .  The moment of inertia of the built up beam about the neutral axis .      "
},
{
  "id": "polar-moment",
  "level": "1",
  "url": "polar-moment.html",
  "type": "Section",
  "number": "10.5",
  "title": "Polar Moment of Inertia",
  "body": " Polar Moment of Inertia    How are polar moments of inertia similar and different to area moments of inertia about either a horizontal or vertical axis?     The polar moment of inertia is defined by the integral quantity , where is the distance from the reference point to a differential element of area .   Differential element dx by dy at radius r from origin which is at (x,y).    The polar moment of inertia describes the distribution of the area of a body with respect to a point in the plane of the body. Alternately, the point can be considered to be where a perpendicular axis crosses the plane of the body. The subscript on the symbol indicates the point or axis.  There is a particularly simple relationship between the polar moment of inertia and the rectangular moments of inertia. Referring to the figure, apply the Pythagorean theorem to the definition of polar moment of inertia to get .   Torsional Stress  The polar moment of inertia is an important factor in the design of drive shafts. When a shaft is subjected to torsion, it experiences internal distributed shearing forces throughout its cross-section which counteract the external torsional load.  This distributed shearing force is called shear stress , and is usually given the symbol tau, . Shear stress is zero at the shaft centerline, called the neutral axis , and increases linearly with to a maximum value, at the outside surface where , so   Section cut through a shaft, showing the shearing stresses developed to withstand an external torsion, .    Dan Baker  CC-BY-SA     The force at any point is , and the moment exerted at any point is times the moment arm, . The total moment is the integral of this quantity over the area of the cross section, and is proportional to the polar moment of inertia.   This is the relationship between the maximum stress in a circular shaft, the applied torque , and the geometric properties of the shaft and .   "
},
{
  "id": "polar-moment-2",
  "level": "2",
  "url": "polar-moment.html#polar-moment-2",
  "type": "Key Questions",
  "number": "10.5",
  "title": "",
  "body": "  How are polar moments of inertia similar and different to area moments of inertia about either a horizontal or vertical axis?   "
},
{
  "id": "polar-moment-6",
  "level": "2",
  "url": "polar-moment.html#polar-moment-6",
  "type": "Thinking Deeper",
  "number": "10.5.1",
  "title": "Torsional Stress.",
  "body": " Torsional Stress  The polar moment of inertia is an important factor in the design of drive shafts. When a shaft is subjected to torsion, it experiences internal distributed shearing forces throughout its cross-section which counteract the external torsional load.  This distributed shearing force is called shear stress , and is usually given the symbol tau, . Shear stress is zero at the shaft centerline, called the neutral axis , and increases linearly with to a maximum value, at the outside surface where , so   Section cut through a shaft, showing the shearing stresses developed to withstand an external torsion, .    Dan Baker  CC-BY-SA     The force at any point is , and the moment exerted at any point is times the moment arm, . The total moment is the integral of this quantity over the area of the cross section, and is proportional to the polar moment of inertia.   This is the relationship between the maximum stress in a circular shaft, the applied torque , and the geometric properties of the shaft and .  "
},
{
  "id": "radius-of-gyration-sec",
  "level": "1",
  "url": "radius-of-gyration-sec.html",
  "type": "Section",
  "number": "10.6",
  "title": "Radius of Gyration",
  "body": " Radius of Gyration  The radius of gyration is an alternate way of expressing the distribution of area away from an axis which combines the effects of the moments of inertia and cross sectional area.  The radius of gyration can be thought of as the radial distance to a thin strip which has the same area and the same moment of inertia around a specific axis as the original shape. Compared to the moment of inertia, the radius of gyration is easier to visualize since it's a distance, rather than a distance to the fourth power.   The radius of gyration, and the corresponding moment of inertia are related, and both must refer to the same axis. If one is known, the other is easily found.  The radius of gyration with respect to the and axes and the origin are given by these formulas .  In engineering design, the radius of gyration is used to determine the stiffness of structural columns and estimate the critical load which will initiate column buckling.    How are , , and related to each other?       Start with       "
},
{
  "id": "radius-of-gyration-sec-7",
  "level": "2",
  "url": "radius-of-gyration-sec.html#radius-of-gyration-sec-7",
  "type": "Question",
  "number": "10.6.1",
  "title": "",
  "body": "  How are , , and related to each other?       Start with     "
},
{
  "id": "products-of-inertia",
  "level": "1",
  "url": "products-of-inertia.html",
  "type": "Section",
  "number": "10.7",
  "title": "Products of Inertia",
  "body": " Products of Inertia    Why do we need to quantify the product of inertia for beams?  Why is the product of inertia of a symmetrical cross section zero?     The product of inertia is another integral property of area, and is defined as . The parallel axis theorem for products of inertia is .   Area with centroid at (x-bar,y-bar). The x' and y' axes intersect at the centroid. A differential element is shown at (x,y) which is a distance of (x',y') from the y' and x' axes, respectively.    Unlike the rectangular moments of inertia, which are always positive, the product of inertia may be either positive, negative, or zero, depending on the object's shape and the orientation of the coordinate axes. The product of inertia will be zero for symmetrical objects when a coordinate axis is also an axis of symmetry.  If the product of inertia is not zero it is always possible to rotate the coordinate system until it is, in which case the new coordinate axes are called the principle axes . When the coordinate axes are oriented in the principle directions, the centroidal moments of inertia are maximum about one axis and minimum about the other, but neither is necessarily zero. The principle directions determine the best way to orient a beam to for maximum stiffness, and how much asymmetrical beams, like channels and angles, will twist when a load is applied.     "
},
{
  "id": "products-of-inertia-2",
  "level": "2",
  "url": "products-of-inertia.html#products-of-inertia-2",
  "type": "Key Questions",
  "number": "10.7",
  "title": "",
  "body": "  Why do we need to quantify the product of inertia for beams?  Why is the product of inertia of a symmetrical cross section zero?   "
},
{
  "id": "products-of-inertia-3-1",
  "level": "2",
  "url": "products-of-inertia.html#products-of-inertia-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product of inertia "
},
{
  "id": "products-of-inertia-5",
  "level": "2",
  "url": "products-of-inertia.html#products-of-inertia-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "principle axes "
},
{
  "id": "Chapter_10-mass-moment-of-inertia",
  "level": "1",
  "url": "Chapter_10-mass-moment-of-inertia.html",
  "type": "Section",
  "number": "10.8",
  "title": "Mass Moment of Inertia",
  "body": " Mass Moment of Inertia  You may recall from physics the relationship . This formula is the rotational analog of Newton's second law . Here, the represents the mass moment of inertia, which is the three-dimensional measure of a rigid body's resistance to rotation around an axis. Mass moment of inertia plays the same role for angular motion as mass does for linear motion.  Mass moment of inertia is defined by an integral equation identical to , except that the differential area is replaced with a differential element of mass, . The integration is conducted over a three dimensional physical object instead of a two dimensional massless area.  The units of mass moment of inertia are , in contrast to area moment of inertia's units of .  Mass moments of inertia are covered in more detail and used extensively in the study of rigid body kinetics in Engineering Dynamics .  "
},
{
  "id": "Chapter_10-mass-moment-of-inertia-2",
  "level": "2",
  "url": "Chapter_10-mass-moment-of-inertia.html#Chapter_10-mass-moment-of-inertia-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mass moment of inertia, "
},
{
  "id": "Chapter_10-11",
  "level": "1",
  "url": "Chapter_10-11.html",
  "type": "Exercises",
  "number": "10.9",
  "title": "Exercises (Ch. 10)",
  "body": " Exercises (Ch. 10)   "
},
{
  "id": "notation",
  "level": "1",
  "url": "notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation  Notation refers to the symbols we use to represent physical quantities and variables in mathematical expressions. Notation is a tool for communication and the symbols themselves carry meaning. You will find it easier to understand the contents of engineering textbooks if you are familiar with the notation used, and can pronounce the symbols to yourself when studying the equations.     tile of figure?  Notation used in this book         Vectors are written in a bold serif font. For handwritten vectors, a superimposed arrow is used.     Magnitudes and other scalar values are rendered in an regular italic serif font. is the magnitude of .     Vertical bars indicate absolute value . The absolute value of a vector is its magnitude.     Vector component of in the and directions. Subscripts are used to distinguish different related values.     Scalar components of vector in the and directions. These are signed numbers, not vectors. Together, the sign and subscript define a vector component.     An ordered pair of scalar components enclosed in angle brackets defines a vector.     An ordered pair of magnitude and direction separated with a semicolon defines a vector.     Unit vectors in the , , and directions. Pronounced i hat , j hat ,      A hat indicates a unit vector in the vector's direction.       Scalar components multiplied by unit vectors are vector components.       A vector is the sum of its vector components.       These are all equivalent representation of vector .     "
},
{
  "id": "notations",
  "level": "2",
  "url": "notation.html#notations",
  "type": "Figure",
  "number": "A.0.1",
  "title": "tile of figure?",
  "body": " tile of figure?  Notation used in this book         Vectors are written in a bold serif font. For handwritten vectors, a superimposed arrow is used.     Magnitudes and other scalar values are rendered in an regular italic serif font. is the magnitude of .     Vertical bars indicate absolute value . The absolute value of a vector is its magnitude.     Vector component of in the and directions. Subscripts are used to distinguish different related values.     Scalar components of vector in the and directions. These are signed numbers, not vectors. Together, the sign and subscript define a vector component.     An ordered pair of scalar components enclosed in angle brackets defines a vector.     An ordered pair of magnitude and direction separated with a semicolon defines a vector.     Unit vectors in the , , and directions. Pronounced i hat , j hat ,      A hat indicates a unit vector in the vector's direction.       Scalar components multiplied by unit vectors are vector components.       A vector is the sum of its vector components.       These are all equivalent representation of vector .    "
},
{
  "id": "distance-formula",
  "level": "1",
  "url": "distance-formula.html",
  "type": "Section",
  "number": "B.1",
  "title": "Distance Formula",
  "body": " Distance Formula  The distance formula is used for finding the distance between two points. In two dimensions it is simply an application of the Pythagorean theorem.   Given two points and the distance between them is: .  Extension of the distance formula to three dimensions is straightforward.  "
},
{
  "id": "soh-coh-toa",
  "level": "1",
  "url": "soh-coh-toa.html",
  "type": "Section",
  "number": "B.2",
  "title": "Right Triangle Trigonometry",
  "body": " Right Triangle Trigonometry  A right triangle is a triangle containing a 90° angle.  The side opposite to the right angle is called the hypotenuse .  The other two angles add to 90° and are called complementary angles .      The relationship between the sides and angles of a right triangle are given by the three basic trig relations which may be recalled with the mnemonic SOH-COH-TOA .     and their inverses,      Facts  The following statements regarding the trig functions and triangles are always true, and remembering them will help you avoid errors.  , and are functions of an angle and their values are unitless ratios of lengths.  The inverse trig functions are functions of unitless ratios and their results are angles.  The sine of an angle equals the cosine of its complement and vice-versa.  The sine and cosine of any angle is always a unitless number between -1 and 1, inclusive.  The sine, cosine, and tangent of angles between 0 and 90° are always positive.  The inverse trig functions of positive numbers will always yield angles between 0 and 90°  The legs of a right triangle are always shorter than the hypotenuse.  Only right triangles have a hypotenuse.      Hints  Here are some useful tips for angle calculations  Take care that your calculator is set in degrees mode for this course.  Always work with angles between 0° and 90° and use positive arguments for the inverse trig functions.  Following this advice will avoid unwanted signs and incorrect directions caused because , and and the calculator can't distinguish between them.     "
},
{
  "id": "soh-coh-toa-2",
  "level": "2",
  "url": "soh-coh-toa.html#soh-coh-toa-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right triangle "
},
{
  "id": "soh-coh-toa-3",
  "level": "2",
  "url": "soh-coh-toa.html#soh-coh-toa-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hypotenuse "
},
{
  "id": "soh-coh-toa-4",
  "level": "2",
  "url": "soh-coh-toa.html#soh-coh-toa-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complementary angles "
},
{
  "id": "soh-coh-toa-6",
  "level": "2",
  "url": "soh-coh-toa.html#soh-coh-toa-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "SOH-COH-TOA "
},
{
  "id": "los-loc",
  "level": "1",
  "url": "los-loc.html",
  "type": "Section",
  "number": "B.3",
  "title": "Oblique Triangle Trigonometry",
  "body": " Oblique Triangle Trigonometry   An oblique triangle is any triangle which does not contain a right angle. As such, the rules of do not apply!   For an oblique triangle labeled as shown, the relations between the sides and angles are given by the Law of Sines and the Law of Cosines .      Law of Sines   The law of Sines is used when you know the length of one side, the angle opposite it, and one additional angle (SAA) or side (SSA). If this is not the case use the Law of Cosines.  Take care in the (SSA) situation. This is known as the ambiguous case , and you must be alert for it. It occurs because there are two angles between 0 and 180° with the same sine. When you use your calculator to find it may return the supplement of the angle you want. In fact, there may be two possible solutions to the problem, or one or both solutions may be physically impossible and must be discarded.  If one of the angles is 90°, then the Law of Sines simplifies to the definitions of sine and cosine since the .    Law of Cosines     The Law of Cosines is used when you know two sides and the included angle (SAS), or when you know all three sides but no angles (SSS). In any other situation, use the Law of Sines.  If one of the angles is the Law of Cosines simplifies to the Pythagorean Theorem since .   "
},
{
  "id": "los-loc-2-2-1",
  "level": "2",
  "url": "los-loc.html#los-loc-2-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Law of Sines Law of Cosines "
},
{
  "id": "los-4",
  "level": "2",
  "url": "los-loc.html#los-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ambiguous case supplement "
},
{
  "id": "centroids-moi-tables-2",
  "level": "1",
  "url": "centroids-moi-tables-2.html",
  "type": "Section",
  "number": "C.1",
  "title": "Centroids of Common Shapes",
  "body": " Centroids of Common Shapes    Centroids of Common Shapes         Shape    Area              A rectangle with width of b and height of h, centroid at (x-bar,y-bar).                 A right triangle with right angle at the origin. Width of b and height of h, centroid at (x-bar,y-bar).                 A trapezoid with bottom width of b, top width of a, and height of h, centroid at (x-bar,y-bar).                 A circle with radius of r, centroid at (x-bar,y-bar)=(r,r).                 A semicircle with radius of r, centroid at (x-bar,y-bar)=(r,4r\/(3*pi)).            See for proof.         A quarter circle with radius of r. The center of curvature is at the origin. Centroid at (x-bar,y-bar)=(4r\/(3*pi),4r\/(3*pi)).           "
},
{
  "id": "centroids-moi-tables-2-2",
  "level": "2",
  "url": "centroids-moi-tables-2.html#centroids-moi-tables-2-2",
  "type": "Table",
  "number": "C.1.1",
  "title": "Centroids of Common Shapes",
  "body": " Centroids of Common Shapes         Shape    Area              A rectangle with width of b and height of h, centroid at (x-bar,y-bar).                 A right triangle with right angle at the origin. Width of b and height of h, centroid at (x-bar,y-bar).                 A trapezoid with bottom width of b, top width of a, and height of h, centroid at (x-bar,y-bar).                 A circle with radius of r, centroid at (x-bar,y-bar)=(r,r).                 A semicircle with radius of r, centroid at (x-bar,y-bar)=(r,4r\/(3*pi)).            See for proof.         A quarter circle with radius of r. The center of curvature is at the origin. Centroid at (x-bar,y-bar)=(4r\/(3*pi),4r\/(3*pi)).          "
},
{
  "id": "centroids-moi-tables-3",
  "level": "1",
  "url": "centroids-moi-tables-3.html",
  "type": "Section",
  "number": "C.2",
  "title": "Moment of Inertia of Common Shapes",
  "body": " Moment of Inertia of Common Shapes   Moments of Inertia of Common Shapes        Shape  Centroid  Centroidal MOI        Rectangle with base b and height h                  Right triangle with vertices (0,0), (0, h), and (b, 0)                 Circle with centered at *x-bar, y-bar). The x' and y' axes intersect the centroid.                 Half circle with base on x-axis and centered on y-axis. The x' axis intersects the centroid.                    Quarter circle with base on x-axis and side on y-axis. The x' axis intersects the centroid.                "
},
{
  "id": "centroids-moi-tables-3-2",
  "level": "2",
  "url": "centroids-moi-tables-3.html#centroids-moi-tables-3-2",
  "type": "Table",
  "number": "C.2.1",
  "title": "Moments of Inertia of Common Shapes",
  "body": " Moments of Inertia of Common Shapes        Shape  Centroid  Centroidal MOI        Rectangle with base b and height h                  Right triangle with vertices (0,0), (0, h), and (b, 0)                 Circle with centered at *x-bar, y-bar). The x' and y' axes intersect the centroid.                 Half circle with base on x-axis and centered on y-axis. The x' axis intersects the centroid.                    Quarter circle with base on x-axis and side on y-axis. The x' axis intersects the centroid.               "
},
{
  "id": "AISC-angles",
  "level": "1",
  "url": "AISC-angles.html",
  "type": "Section",
  "number": "D.1",
  "title": "Angles",
  "body": " Angles   Angle Section-US       Description      lb\/ft         in     in     in     in     in             L6 6 1  37.4  11  6  6  1  1.86  1.86  35.4  35.4    L6 6 7\/8  33.1  9.75  6  6  0.875  1.81  1.81  31.9  31.9    L6 6 3\/4  28.7  8.46  6  6  0.75  1.77  1.77  28.1  28.1    L6 6 5\/8  24.2  7.13  6  6  0.625  1.72  1.72  24.1  24.1    L6 6 9\/16  21.9  6.45  6  6  0.563  1.7  1.7  22  22    L6 6 1\/2  19.6  5.77  6  6  0.5  1.67  1.67  19.9  19.9    L6 6 7\/16  17.2  5.08  6  6  0.438  1.65  1.65  17.6  17.6    L6 6 3\/8  14.9  4.38  6  6  0.375  1.62  1.62  15.4  15.4    L6 6 5\/16  12.4  3.67  6  6  0.313  1.6  1.6  13  13    L6 4 7\/8  27.2  8  6  4  0.875  1.12  2.12  27.7  9.7    L6 4 3\/4  23.6  6.94  6  4  0.75  1.07  2.07  24.5  8.63    L6 4 5\/8  20  5.86  6  4  0.625  1.03  2.03  21  7.48    L6 4 9\/16  18.1  5.31  6  4  0.563  1  2  19.2  6.86    L6 4 1\/2  16.2  4.75  6  4  0.5  0.981  1.98  17.3  6.22    L6 4 7\/16  14.3  4.18  6  4  0.438  0.957  1.95  15.4  5.56    L6 4 3\/8  12.3  3.61  6  4  0.375  0.933  1.93  13.4  4.86    L6 4 5\/16  10.3  3.03  6  4  0.313  0.908  1.9  11.4  4.13    L6 3-1\/2 1\/2  15.3  4.5  6  3.5  0.5  0.829  2.07  16.6  4.24    L6 3-1\/2 3\/8  11.7  3.44  6  3.5  0.375  0.781  2.02  12.9  3.33    L6 3-1\/2 5\/16  9.8  2.89  6  3.5  0.313  0.756  2  10.9  2.84    L5 5 7\/8  27.2  8  5  5  0.875  1.56  1.56  17.8  17.8    L5 5 3\/4  23.6  6.98  5  5  0.75  1.52  1.52  15.7  15.7    L5 5 5\/8  20  5.9  5  5  0.625  1.47  1.47  13.6  13.6    L5 5 1\/2  16.2  4.79  5  5  0.5  1.42  1.42  11.3  11.3    L5 5 7\/16  14.3  4.22  5  5  0.438  1.4  1.4  10  10    L5 5 3\/8  12.3  3.65  5  5  0.375  1.37  1.37  8.76  8.76    L5 5 5\/16  10.3  3.07  5  5  0.313  1.35  1.35  7.44  7.44    L5 3-1\/2 3\/4  19.8  5.85  5  3.5  0.75  0.993  1.74  13.9  5.52    L5 3-1\/2 5\/8  16.8  4.93  5  3.5  0.625  0.947  1.69  12  4.8    L5 3-1\/2 1\/2  13.6  4  5  3.5  0.5  0.901  1.65  10  4.02    L5 3-1\/2 3\/8  10.4  3.05  5  3.5  0.375  0.854  1.6  7.75  3.15    L5 3-1\/2 5\/16  8.7  2.56  5  3.5  0.313  0.829  1.57  6.58  2.69    L5 3-1\/2 1\/4  7  2.07  5  3.5  0.25  0.804  1.55  5.36  2.2    L5 3 1\/2  12.8  3.75  5  3  0.5  0.746  1.74  9.43  2.55    L5 3 7\/16  11.3  3.31  5  3  0.438  0.722  1.72  8.41  2.29    L5 3 3\/8  9.8  2.86  5  3  0.375  0.698  1.69  7.35  2.01    L5 3 5\/16  8.2  2.41  5  3  0.313  0.673  1.67  6.24  1.72    L5 3 1\/4  6.6  1.94  5  3  0.25  0.648  1.64  5.09  1.41    L4 4 3\/4  18.5  5.44  4  4  0.75  1.27  1.27  7.62  7.62    L4 4 5\/8  15.7  4.61  4  4  0.625  1.22  1.22  6.62  6.62    L4 4 1\/2  12.8  3.75  4  4  0.5  1.18  1.18  5.52  5.52    L4 4 7\/16  11.3  3.3  4  4  0.438  1.15  1.15  4.93  4.93    L4 4 3\/8  9.8  2.86  4  4  0.375  1.13  1.13  4.32  4.32    L4 4 5\/16  8.2  2.4  4  4  0.313  1.11  1.11  3.67  3.67    L4 4 1\/4  6.6  1.93  4  4  0.25  1.08  1.08  3  3    L4 3-1\/2 1\/2  11.9  3.5  4  3.5  0.5  0.994  1.24  5.3  3.76    L4 3-1\/2 3\/8  9.1  2.68  4  3.5  0.375  0.947  1.2  4.15  2.96    L4 3-1\/2 5\/16  7.7  2.25  4  3.5  0.313  0.923  1.17  3.53  2.52    L4 3-1\/2 1\/4  6.2  1.82  4  3.5  0.25  0.897  1.14  2.89  2.07       Angle Section-SI       Description      kg\/m         mm     mm     mm     mm     mm             L152 152 22.2  49.3  6290  152  152  22.2  46  46  13.3  13.3    L152 152 19  42.7  5460  152  152  19.1  45  45  11.7  11.7    L152 152 15.9  36  4600  152  152  15.9  43.7  43.7  10  10    L152 152 14.3  32.6  4160  152  152  14.3  43.2  43.2  9.16  9.16    L152 152 12.7  29.2  3720  152  152  12.7  42.4  42.4  8.28  8.28    L152 152 11.1  25.6  3280  152  152  11.1  41.9  41.9  7.33  7.33    L152 152 9.5  22.2  2830  152  152  9.53  41.1  41.1  6.41  6.41    L152 152 7.9  18.5  2370  152  152  7.94  40.6  40.6  5.41  5.41    L152 102 22.2  40.3  5160  152  102  22.2  28.4  53.8  11.5  4.04    L152 102 19  35  4480  152  102  19.1  27.2  52.6  10.2  3.59    L152 102 15.9  29.6  3780  152  102  15.9  26.2  51.6  8.74  3.11    L152 102 14.3  26.9  3430  152  102  14.3  25.4  50.8  7.99  2.86    L152 102 12.7  24  3060  152  102  12.7  24.9  50.3  7.2  2.59    L152 102 11.1  21.2  2700  152  102  11.1  24.3  49.5  6.41  2.31    L152 102 9.5  18.2  2330  152  102  9.53  23.7  49  5.58  2.02    L152 102 7.9  15.3  1950  152  102  7.94  23.1  48.3  4.75  1.72    L152 89 12.7  22.7  2900  152  88.9  12.7  21.1  52.6  6.91  1.76    L152 89 9.5  17.3  2220  152  88.9  9.53  19.8  51.3  5.37  1.39    L152 89 7.9  14.5  1860  152  88.9  7.94  19.2  50.8  4.54  1.18    L127 127 22.2  40.5  5160  127  127  22.2  39.6  39.6  7.41  7.41    L127 127 19  35.1  4500  127  127  19.1  38.6  38.6  6.53  6.53    L127 127 15.9  29.8  3810  127  127  15.9  37.3  37.3  5.66  5.66    L127 127 12.7  24.1  3090  127  127  12.7  36.1  36.1  4.7  4.7    L127 127 11.1  21.3  2720  127  127  11.1  35.6  35.6  4.16  4.16    L127 127 9.5  18.3  2350  127  127  9.53  34.8  34.8  3.65  3.65    L127 127 7.9  15.3  1980  127  127  7.94  34.3  34.3  3.1  3.1    L127 89 19  29.3  3770  127  88.9  19.1  25.2  44.2  5.79  2.3    L127 89 15.9  24.9  3180  127  88.9  15.9  24.1  42.9  4.99  2    L127 89 12.7  20.2  2580  127  88.9  12.7  22.9  41.9  4.16  1.67    L127 89 9.5  15.4  1970  127  88.9  9.53  21.7  40.6  3.23  1.31    L127 89 7.9  12.9  1650  127  88.9  7.94  21.1  39.9  2.74  1.12    L127 89 6.4  10.4  1340  127  88.9  6.35  20.4  39.4  2.23  0.916    L127 76 12.7  19  2420  127  76.2  12.7  18.9  44.2  3.93  1.06    L127 76 11.1  16.7  2140  127  76.2  11.1  18.3  43.7  3.5  0.953    L127 76 9.5  14.5  1850  127  76.2  9.53  17.7  42.9  3.06  0.837    L127 76 7.9  12.1  1550  127  76.2  7.94  17.1  42.4  2.6  0.716    L127 76 6.4  9.8  1250  127  76.2  6.35  16.5  41.7  2.12  0.587    L102 102 19  27.5  3510  102  102  19.1  32.3  32.3  3.17  3.17    L102 102 15.9  23.4  2970  102  102  15.9  31  31  2.76  2.76    L102 102 12.7  19  2420  102  102  12.7  30  30  2.3  2.3    L102 102 11.1  16.8  2130  102  102  11.1  29.2  29.2  2.05  2.05    L102 102 9.5  14.6  1850  102  102  9.53  28.7  28.7  1.8  1.8    L102 102 7.9  12.2  1550  102  102  7.94  28.2  28.2  1.53  1.53    L102 102 6.4  9.8  1250  102  102  6.35  27.4  27.4  1.25  1.25    L102 89 12.7  17.6  2260  102  88.9  12.7  25.2  31.5  2.21  1.57    L102 89 9.5  13.5  1730  102  88.9  9.53  24.1  30.5  1.73  1.23    L102 89 7.9  11.4  1450  102  88.9  7.94  23.4  29.7  1.47  1.05    L102 89 6.4  9.2  1170  102  88.9  6.35  22.8  29  1.2  0.862      "
},
{
  "id": "AISC-channels",
  "level": "1",
  "url": "AISC-channels.html",
  "type": "Section",
  "number": "D.2",
  "title": "Channels",
  "body": " Channels   Channel Section-US       Description      lb\/ft         in     in     in     in     in             C15 50  50  14.7  15  3.72  0.716  0.65  0.799  404  11    C15 40  40  11.8  15  3.52  0.52  0.65  0.778  348  9.17    C15 33.9  33.9  10  15  3.4  0.4  0.65  0.788  315  8.07    C12 30  30  8.81  12  3.17  0.51  0.501  0.674  162  5.12    C12 25  25  7.34  12  3.05  0.387  0.501  0.674  144  4.45    C12 20.7  20.7  6.08  12  2.94  0.282  0.501  0.698  129  3.86    C10 30  30  8.81  10  3.03  0.673  0.436  0.649  103  3.93    C10 25  25  7.35  10  2.89  0.526  0.436  0.617  91.1  3.34    C10 20  20  5.87  10  2.74  0.379  0.436  0.606  78.9  2.8    C10 15.3  15.3  4.48  10  2.6  0.24  0.436  0.634  67.3  2.27    C9 20  20  5.87  9  2.65  0.448  0.413  0.583  60.9  2.41    C9 15  15  4.4  9  2.49  0.285  0.413  0.586  51  1.91    C9 13.4  13.4  3.94  9  2.43  0.233  0.413  0.601  47.8  1.75    C8 18.75  18.75  5.51  8  2.53  0.487  0.39  0.565  43.9  1.97    C8 13.75  13.75  4.03  8  2.34  0.303  0.39  0.554  36.1  1.52    C8 11.5  11.5  3.37  8  2.26  0.22  0.39  0.572  32.5  1.31    C7 14.75  14.75  4.33  7  2.3  0.419  0.366  0.532  27.2  1.37    C7 12.25  12.25  3.59  7  2.19  0.314  0.366  0.525  24.2  1.16    C7 9.8  9.8  2.87  7  2.09  0.21  0.366  0.541  21.2  0.957    C6 13  13  3.82  6  2.16  0.437  0.343  0.514  17.3  1.05    C6 10.5  10.5  3.07  6  2.03  0.314  0.343  0.5  15.1  0.86    C6 8.2  8.2  2.39  6  1.92  0.2  0.343  0.512  13.1  0.687    C5 9  9  2.64  5  1.89  0.325  0.32  0.478  8.89  0.624    C5 6.7  6.7  1.97  5  1.75  0.19  0.32  0.484  7.48  0.47    C4 7.25  7.25  2.13  4  1.72  0.321  0.296  0.459  4.58  0.425    C4 6.25  6.25  1.84  4  1.65  0.247  0.296  0.453  4.19  0.374    C4 5.4  5.4  1.58  4  1.58  0.184  0.296  0.457  3.85  0.312    C4 4.5  4.5  1.34  4  1.52  0.125  0.296  0.473  3.53  0.265    C3 6  6  1.76  3  1.6  0.356  0.273  0.455  2.07  0.3    C3 5  5  1.47  3  1.5  0.258  0.273  0.439  1.85  0.241    C3 4.1  4.1  1.2  3  1.41  0.17  0.273  0.437  1.65  0.191    C3 3.5  3.5  1.09  3  1.37  0.132  0.273  0.443  1.57  0.169       Channel Section-SI       Description      kg\/m         mm     mm     mm     mm     mm             C380 74  74  9480  381  94.5  18.2  16.5  20.3  168  4.58    C380 60  60  7610  381  89.4  13.2  16.5  19.8  145  3.82    C380 50.4  50.4  6450  381  86.4  10.2  16.5  20  131  3.36    C310 45  45  5680  305  80.5  13  12.7  17.1  67.4  2.13    C310 37  37  4740  305  77.5  9.83  12.7  17.1  59.9  1.85    C310 30.8  30.8  3920  305  74.7  7.16  12.7  17.7  53.7  1.61    C250 45  45  5680  254  77  17.1  11.1  16.5  42.9  1.64    C250 37  37  4740  254  73.4  13.4  11.1  15.7  37.9  1.39    C250 30  30  3790  254  69.6  9.63  11.1  15.4  32.8  1.17    C250 22.8  22.8  2890  254  66  6.1  11.1  16.1  28  0.945    C230 30  30  3790  229  67.3  11.4  10.5  14.8  25.3  1    C230 22  22  2840  229  63.2  7.24  10.5  14.9  21.2  0.795    C230 19.9  19.9  2540  229  61.7  5.92  10.5  15.3  19.9  0.728    C200 27.9  27.9  3550  203  64.3  12.4  9.91  14.4  18.3  0.82    C200 20.5  20.5  2600  203  59.4  7.7  9.91  14.1  15  0.633    C200 17.1  17.1  2170  203  57.4  5.59  9.91  14.5  13.5  0.545    C180 22  22  2790  178  58.4  10.6  9.3  13.5  11.3  0.57    C180 18.2  18.2  2320  178  55.6  7.98  9.3  13.3  10.1  0.483    C180 14.6  14.6  1850  178  53.1  5.33  9.3  13.7  8.82  0.398    C150 19.3  19.3  2460  152  54.9  11.1  8.71  13.1  7.2  0.437    C150 15.6  15.6  1980  152  51.6  7.98  8.71  12.7  6.29  0.358    C150 12.2  12.2  1540  152  48.8  5.08  8.71  13  5.45  0.286    C130 13  13  1700  127  48  8.26  8.13  12.1  3.7  0.26    C130 10.4  10.4  1270  127  44.5  4.83  8.13  12.3  3.11  0.196    C100 10.8  10.8  1370  102  43.7  8.15  7.52  11.7  1.91  0.177    C100 9.3  9.3  1190  102  41.9  6.27  7.52  11.5  1.74  0.156    C100 8  8  1020  102  40.1  4.67  7.52  11.6  1.6  0.13    C100 6.7  6.7  865  102  38.6  3.18  7.52  12  1.47  0.11    C75 8.9  8.9  1140  76.2  40.6  9.04  6.93  11.6  0.862  0.125    C75 7.4  7.4  948  76.2  38.1  6.55  6.93  11.2  0.77  0.1    C75 6.1  6.1  774  76.2  35.8  4.32  6.93  11.1  0.687  0.0795    C75 5.2  5.2  703  76.2  34.8  3.35  6.93  11.3  0.653  0.0703      "
},
{
  "id": "AISC-standard-sections",
  "level": "1",
  "url": "AISC-standard-sections.html",
  "type": "Section",
  "number": "D.3",
  "title": "Standard Sections",
  "body": " Standard Sections   Standard Section-US       Description                                      S24 121  121  35.5  24.5  8.05  0.8  1.09  3160  83    S24 106  106  31.1  24.5  7.87  0.62  1.09  2940  76.8    S24 100  100  29.3  24  7.25  0.745  0.87  2380  47.4    S24 90  90  26.5  24  7.13  0.625  0.87  2250  44.7    S24 80  80  23.5  24  7  0.5  0.87  2100  42    S20 96  96  28.2  20.3  7.2  0.8  0.92  1670  49.9    S20 86  86  25.3  20.3  7.06  0.66  0.92  1570  46.6    S20 75  75  22  20  6.39  0.635  0.795  1280  29.5    S20 66  66  19.4  20  6.26  0.505  0.795  1190  27.5    S18 70  70  20.5  18  6.25  0.711  0.691  923  24    S18 54.7  54.7  16  18  6  0.461  0.691  801  20.7    S15 50  50  14.7  15  5.64  0.55  0.622  485  15.6    S15 42.9  42.9  12.6  15  5.5  0.411  0.622  446  14.3    S12 50  50  14.7  12  5.48  0.687  0.659  303  15.6    S12 40.8  40.8  11.9  12  5.25  0.462  0.659  270  13.5    S12 35  35  10.2  12  5.08  0.428  0.544  228  9.84    S12 31.8  31.8  9.31  12  5  0.35  0.544  217  9.33    S10 35  35  10.3  10  4.94  0.594  0.491  147  8.3    S10 25.4  25.4  7.45  10  4.66  0.311  0.491  123  6.73    S8 23  23  6.76  8  4.17  0.441  0.425  64.7  4.27    S8 18.4  18.4  5.4  8  4  0.271  0.425  57.5  3.69    S6 17.25  17.25  5.05  6  3.57  0.465  0.359  26.2  2.29    S6 12.5  12.5  3.66  6  3.33  0.232  0.359  22  1.8    S5 10  10  2.93  5  3  0.214  0.326  12.3  1.19    S4 9.5  9.5  2.79  4  2.8  0.326  0.293  6.76  0.887    S4 7.7  7.7  2.26  4  2.66  0.193  0.293  6.05  0.748    S3 7.5  7.5  2.2  3  2.51  0.349  0.26  2.91  0.578    S3 5.7  5.7  1.66  3  2.33  0.17  0.26  2.5  0.447       Standard Section-SI       Description                                      S610 180  180  22900  622  204  20.3  27.7  1320  34.5    S610 158  158  20100  622  200  15.7  27.7  1220  32    S610 149  149  18900  610  184  18.9  22.1  991  19.7    S610 134  134  17100  610  181  15.9  22.1  937  18.6    S610 119  119  15200  610  178  12.7  22.1  874  17.5    S510 143  143  18200  516  183  20.3  23.4  695  20.8    S510 128  128  16300  516  179  16.8  23.4  653  19.4    S510 112  112  14200  508  162  16.1  20.2  533  12.3    S510 98.2  98.2  12500  508  159  12.8  20.2  495  11.4    S460 104  104  13200  457  159  18.1  17.6  384  9.99    S460 81.4  81.4  10300  457  152  11.7  17.6  333  8.62    S380 74  74  9480  381  143  14  15.8  202  6.49    S380 64  64  8130  381  140  10.4  15.8  186  5.95    S310 74  74  9480  305  139  17.4  16.7  126  6.49    S310 60.7  60.7  7680  305  133  11.7  16.7  112  5.62    S310 52  52  6580  305  129  10.9  13.8  94.9  4.1    S310 47.3  47.3  6010  305  127  8.89  13.8  90.3  3.88    S250 52  52  6650  254  125  15.1  12.5  61.2  3.45    S250 37.8  37.8  4810  254  118  7.9  12.5  51.2  2.8    S200 34  34  4360  203  106  11.2  10.8  26.9  1.78    S200 27.4  27.4  3480  203  102  6.88  10.8  23.9  1.54    S150 25.7  25.7  3260  152  90.7  11.8  9.12  10.9  0.953    S150 18.6  18.6  2360  152  84.6  5.89  9.12  9.16  0.749    S130 15  15  1890  127  76.2  5.44  8.28  5.12  0.495    S100 14.1  14.1  1800  102  71.1  8.28  7.44  2.81  0.369    S100 11.5  11.5  1460  102  67.6  4.9  7.44  2.52  0.311    S75 11.2  11.2  1420  76.2  63.8  8.86  6.6  1.21  0.241    S75 8.5  8.5  1070  76.2  59.2  4.32  6.6  1.04  0.186      "
},
{
  "id": "AISC-wide-flange",
  "level": "1",
  "url": "AISC-wide-flange.html",
  "type": "Section",
  "number": "D.4",
  "title": "Wide Flange Sections",
  "body": " Wide Flange Sections   Wide Flange Section-US       Description                                      W44 335  335  98.5  44  15.9  1.03  1.77  31100  1200    W44 290  290  85.4  43.6  15.8  0.865  1.58  27000  1040    W44 262  262  77.2  43.3  15.8  0.785  1.42  24100  923    W44 230  230  67.8  42.9  15.8  0.71  1.22  20800  796    W40 655  655  193  43.6  16.9  1.97  3.54  56500  2870    W40 593  593  174  43  16.7  1.79  3.23  50400  2520    W40 503  503  148  42.1  16.4  1.54  2.76  41600  2040    W40 431  431  127  41.3  16.2  1.34  2.36  34800  1690    W40 397  397  117  41  16.1  1.22  2.2  32000  1540    W40 372  372  110  40.6  16.1  1.16  2.05  29600  1420    W40 362  362  106  40.6  16  1.12  2.01  28900  1380    W40 324  324  95.3  40.2  15.9  1  1.81  25600  1220    W40 297  297  87.3  39.8  15.8  0.93  1.65  23200  1090    W40 277  277  81.5  39.7  15.8  0.83  1.58  21900  1040    W40 249  249  73.5  39.4  15.8  0.75  1.42  19600  926    W40 215  215  63.5  39  15.8  0.65  1.22  16700  803    W40 199  199  58.8  38.7  15.8  0.65  1.07  14900  695    W40 392  392  116  41.6  12.4  1.42  2.52  29900  803    W40 331  331  97.7  40.8  12.2  1.22  2.13  24700  644    W40 327  327  95.9  40.8  12.1  1.18  2.13  24500  640    W40 294  294  86.2  40.4  12  1.06  1.93  21900  562    W40 278  278  82.3  40.2  12  1.03  1.81  20500  521    W40 264  264  77.4  40  11.9  0.96  1.73  19400  493    W40 235  235  69.1  39.7  11.9  0.83  1.58  17400  444    W40 211  211  62.1  39.4  11.8  0.75  1.42  15500  390    W40 183  183  53.3  39  11.8  0.65  1.2  13200  331    W40 167  167  49.3  38.6  11.8  0.65  1.03  11600  283    W40 149  149  43.8  38.2  11.8  0.63  0.83  9800  229    W36 925  925  272  43.1  18.6  3.02  4.53  73000  4940    W36 853  853  251  43.1  18.2  2.52  4.53  70000  4600    W36 802  802  236  42.6  18  2.38  4.29  64800  4210    W36 723  723  213  41.8  17.8  2.17  3.9  57300  3700    W36 652  652  192  41.1  17.6  1.97  3.54  50600  3230    W36 529  529  156  39.8  17.2  1.61  2.91  39600  2490    W36 487  487  143  39.3  17.1  1.5  2.68  36000  2250    W36 441  441  130  38.9  17  1.36  2.44  32100  1990    W36 395  395  116  38.4  16.8  1.22  2.2  28500  1750    W36 361  361  106  38  16.7  1.12  2.01  25700  1570    W36 330  330  96.9  37.7  16.6  1.02  1.85  23300  1420    W36 302  302  89  37.3  16.7  0.945  1.68  21100  1300    W36 282  282  82.9  37.1  16.6  0.885  1.57  19600  1200    W36 262  262  77.2  36.9  16.6  0.84  1.44  17900  1090    W36 247  247  72.5  36.7  16.5  0.8  1.35  16700  1010    W36 231  231  68.2  36.5  16.5  0.76  1.26  15600  940    W36 256  256  75.3  37.4  12.2  0.96  1.73  16800  528    W36 232  232  68  37.1  12.1  0.87  1.57  15000  468    W36 210  210  61.9  36.7  12.2  0.83  1.36  13200  411       Wide Flange Section-SI       Description                                      W1100 499  499  63500  1120  404  26.2  45  12900  499    W1100 433  433  55100  1110  401  22  40.1  11200  433    W1100 390  390  49800  1100  401  19.9  36.1  10000  384    W1100 343  343  43700  1090  401  18  31  8660  331    W1000 976  975  125000  1110  429  50  89.9  23500  1190    W1000 883  883  112000  1090  424  45.5  82  21000  1050    W1000 748  748  95500  1070  417  39.1  70.1  17300  849    W1000 642  642  81900  1050  411  34  59.9  14500  703    W1000 591  591  75500  1040  409  31  55.9  13300  641    W1000 554  554  71000  1030  409  29.5  52.1  12300  591    W1000 539  539  68400  1030  406  28.4  51.1  12000  574    W1000 483  483  61500  1020  404  25.4  46  10700  508    W1000 443  443  56300  1010  401  23.6  41.9  9660  454    W1000 412  412  52600  1010  401  21.1  40.1  9120  433    W1000 371  371  47400  1000  401  19.1  36.1  8160  385    W1000 321  321  41000  991  401  16.5  31  6950  334    W1000 296  296  37900  983  401  16.5  27.2  6200  289    W1000 584  584  74800  1060  315  36.1  64  12400  334    W1000 494  494  63000  1040  310  31  54.1  10300  268    W1000 486  486  61900  1040  307  30  54.1  10200  266    W1000 438  438  55600  1030  305  26.9  49  9120  234    W1000 415  415  53100  1020  305  26.2  46  8530  217    W1000 393  393  49900  1020  302  24.4  43.9  8070  205    W1000 350  350  44600  1010  302  21.1  40.1  7240  185    W1000 314  314  40100  1000  300  19.1  36.1  6450  162    W1000 272  272  34400  991  300  16.5  30.5  5490  138    W1000 249  249  31800  980  300  16.5  26.2  4830  118    W1000 222  222  28300  970  300  16  21.1  4080  95.3    W920 1377  1380  175000  1090  472  76.7  115  30400  2060    W920 1269  1270  162000  1090  462  64  115  29100  1910    W920 1194  1190  152000  1080  457  60.5  109  27000  1750    W920 1077  1080  137000  1060  452  55.1  99.1  23800  1540    W920 970  970  124000  1040  447  50  89.9  21100  1340    W920 787  787  101000  1010  437  40.9  73.9  16500  1040    W920 725  725  92300  998  434  38.1  68.1  15000  937    W920 656  656  83900  988  432  34.5  62  13400  828    W920 588  588  74800  975  427  31  55.9  11900  728    W920 537  537  68400  965  424  28.4  51.1  10700  653    W920 491  491  62500  958  422  25.9  47  9700  591    W920 449  449  57400  947  424  24  42.7  8780  541    W920 420  420  53500  942  422  22.5  39.9  8160  499    W920 390  390  49800  937  422  21.3  36.6  7450  454    W920 368  368  46800  932  419  20.3  34.3  6950  420    W920 344  344  44000  927  419  19.3  32  6490  391    W920 381  381  48600  951  310  24.4  43.9  6990  220    W920 345  345  43900  943  307  22.1  39.9  6240  195    W920 313  313  39900  932  310  21.1  34.5  5490  171    W920 289  289  36800  927  307  19.4  32  5040  156    W920 271  271  34600  922  307  18.4  30  4700  144      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
