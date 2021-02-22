require 'json'


aisc = File.read('../aisc-shapes-database-v15.0.json')

DESC = "L"  # W, S, C, L
units = 0  # 0 US, 1 SI

rows = JSON.parse(aisc)['root']['row'].select {|r| r['Type'] == DESC}
L =
    [['EDI_Std_Nomenclature', 'Description', '<m>d \\times \\,b \\times \\,t</m>', '<m>d \\times \\,b \\times \\,t</m>'],
     ['W', '<m>W</m>', 'lb/ft', 'kg/m'], ['A', '<m>A</m>', '<m>\text{in}^2</m>', '<m>\\text{mm}^2</m>'],
     ['b', '<m>b</m>', 'in', 'mm'], 
     ['d', '<m>d</m>', 'in', 'mm'],
     ['t', '<m>t</m>', 'in', 'mm'],
     ['x', '<m>\\bar{x}</m>', 'in', 'mm'],
     ['y', '<m>\\bar{y}</m>', 'in', 'mm'],
     ['Ix', '<m>\\bar{I}_{xx}</m>', '<m>\\text{in}^4</m>', '<m>10^6 \\text{ mm}^4</m>'],
     ['Iy', '<m>\\bar{I}_{yy}</m>', '<m>\\text{in}^4</m>', '<m>10^6 \\text{ mm}^4</m>']]

C = [['EDI_Std_Nomenclature', 'Description', '<m>d \\times \\,W</m>', '<m>d\\times \\,W</m>'],
     ['W', '<m>W</m>', 'lb/ft', 'kg/m'],
     ['A', '<m>A</m>', '<m>\text{in}^2</m>', '<m>\\text{mm}^2</m>'],
     ['d', '<m>d</m>', 'in', 'mm'],
     ['bf', '<m>b_f</m>', 'in', 'mm'],
     ['tw', '<m>t_w</m>', 'in', 'mm'],
     ['tf', '<m>t_f</m>', 'in', 'mm'],
     ['x', '<m>\\bar{x}</m>', 'in', 'mm'],
     ['Ix', '<m>\\bar{I}_{xx}</m>', '<m>\\text{in}^4</m>', '<m>10^6 \\text{ mm}^4</m>'],
     ['Iy', '<m>\\bar{I}_{yy}</m>', '<m>\\text{in}^4</m>', '<m>10^6 \\text{ mm}^4</m>']]

WS = [['EDI_Std_Nomenclature', 'Description', '{d}  \\times \\, {W}', '{d} \\times \\, {W}'],
      ['W', '<m>W</m>', 'lb/ft', 'kg/m'],
      ['A', '<m>A</m>', '<m>\text{in}^2</m>', '<m>\\text{mm}^2</m>'],
      ['d', '<m>d</m>', 'in', 'mm'],
      ['bf', '<m>b_f</m>', 'in', 'mm'],
      ['tw', '<m>t_w</m>','in', 'mm'],
      ['tf', '<m>t_f</m>','in', 'mm'],
      ['Ix', '<m>\\bar{I}_{xx}</m>',  '<m>\\text{in}^4</m>', '<m>10^6 \\text{ mm}^4</m>'],
      ['Iy', '<m>\\bar{I}_{yy}</m>',  '<m>\\text{in}^4</m>', '<m>10^6 \\text{ mm}^4</m>']]



columns = C
puts "<table>\r"
puts "<tabular>\r"
puts '<row bottom="medium">'
columns.each do |col|
  puts "<cell halign='center'><line>#{col[1]}</line><line>#{col[2 + units]}</line></cell>"
end
puts "</row>\r"
rows.each do |r|
  puts '<row>'
  columns.each do |c|
    puts "<cell>#{r[c[0]][units]}</cell>"
  end
  puts "</row>\r"
end
puts "</tabular>"
puts "</table>"

