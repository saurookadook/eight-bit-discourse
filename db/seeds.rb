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

post2 = user1.posts.build(title: "LOLZ MINECRAFT IS THE GREATEST GAME EVAR", game: "Minecraft", discussion: "THERE WILL NEVER BE A BETTER GAME EVER CREATED. EVERYTHING ABOUT MINECRAFT IS THE PINNACLE OF VIDEO GAME DEVELOPMENT, SO THERE'S NO POINT IN PLAYING ANY OTHER GAME. IF YOU DO, THEN YOU'RE A LOOOOOOOOOOSSSSSEEEEEEERRRRRRRR", rating: "10", user_id: 1)
post2.save

post3 = user3.posts.build(title: "The Importance of Aloy", game: "Horizon: Zero Dawn", discussion: "Aloy is perhaps the greatest female protagonist I have ever experienced in an video game. Between her demeanor, personality, and overall design, there can be no denying that she's an incredibly well-developed character. Additionally, her creation seems to be an effort by the developers to inject the gaming community with feminism, something sorely lacking therein.", rating: "9", user_id: 3)
post3.save

# post4 = user2.posts.build(title: "", game: "", discussion: "", rating: "", user_id: "")
# post4.save

comment1 = post1.comments.build(user_id: 2, content: "NO WAY IT WAS THE GREATEST GAME EVAR MADE!!!!!!")
comment1.save

comment2 = post1.comments.build(user_id: 3, content: "Go home; you're drunk.")
comment2.save

comment3 = post2.comments.build(user_id: 2, content: "what are you smokin, man?")
comment3.save

comment4 = post2.comments.build(user_id: 3, content: "^ bumped")
comment4.save

comment5 = post2.comments.build(user_id: 1, content: "SMOKIN MINECRAFT. ALL DAY, EVERY DAY")
comment5.save

comment6 = post2.comments.build(user_id: 2, content: "....i think you might need help")
comment6.save

comment7 = post3.comments.build(user_id: 1, content: "NOPE, MINECRAFT IS STILL THE BEST")
comment7.save

comment8 = post3.comments.build(user_id: 3, content: "Whatever you say, bub....")
comment8.save

comment9 = post3.comments.build(user_id: 1, content: "YEAH, I DID SAY IT WHICH MEANS IT'S TRUE")
comment9.save

comment10 = post3.comments.build(user_id: 2, content: "just STOP. TALKING.")
comment9.save
