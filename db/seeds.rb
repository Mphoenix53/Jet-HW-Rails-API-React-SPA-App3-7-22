# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Jet.destroy_all

Jet.create(name:'F-14', age:52, topspeed:1544)
Jet.create(name:'F-15', age:50, topspeed:1875)
Jet.create(name:'F-16', age:46, topspeed:1534)
Jet.create(name:'F-17', age:19, topspeed:1227)
Jet.create(name:'F-18', age:44, topspeed:1190)

puts "seeded jet size: #{Jet.all.size}"