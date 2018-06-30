# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "trollerz", email: "lolerskatez@me.com", password: "iLoVeC4Mp1nG")
user2 = User.create(username: "herpderp", email: "fallsonface@yahoo.com", password: "imbasically65")
user3 = User.create(username: "saurookadook", email: "maskiella@gmail.com", password: "lolnotmypw")

post1 = user3.posts.build(title: "Destiny is the worst", game: "Destiny", discussion: "Literally the biggest disappointment in gaming since Duke Nukem. A ton of hype about an amazing concept that was ultimately a dismal failure.", rating: "0", user_id: 3)
post1.save

comment1 = post1.comments.build(user_id: 2, content: "NO WAY IT WAS THE GREATEST GAME EVAR MADE!!!!!!")
comment1.save
