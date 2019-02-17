---
title: "The problem of connectivity"
date: 2019-02-02T05:00:00-08:00
---

I want to tell you a story about Chris. But it really could be about any of us. I myself was in Chris' shoes, too, and that's why I know this story well.

Chris is a senior software developer, working in a well-known company in the retail space. He's in a small-ish team of a half-dozen developers. They're tasked with creating an online shopping app for their customers. That includes not just a web app but also mobile apps for iOS and Android.

Chris designs a traditional system architecture with an SQL database, a REST API layer, and mobile apps that make various API calls.

After a lot of hard work, they've done it. They have the first feature-complete version of the entire system ready to go. Everyone is feeling great. Everything is looking great.

They are looking forward to trialing the product with a few select early-adopters willing to provide feedback.

Then... bug reports start coming in.

_"It doesn't work"_  
_"It's unusable"_  
_"Why did you give me a broken build"_

Senior management is not happy. Pressure is mounting on Chris and his team to deliver a working app.

Except Chris is bewildered. How could this be? When _Chris_ tested, everything worked well.

So Chris does the sensible thing and calls up one of the customers. A couple of questions in and the customer says the words that immediately send chills through Chris' veins:

> I was using the app on my way to work. I opened it up after I parked my car in an underground garage and then kept using it in and out of the elevator, before I got to my desk. We have spotty reception in the building.

Sh\*\*! Spotty reception! It's the network connectivity! Chris' team never paid much attention to the customer experience if the network were to cut out while in the middle of several server-intensive operations!

Operations like browsing products, adding products to the shopping cart, signing up as a customer, and checking out.

Operations that would make customers wait 30 seconds before giving up and putting up a scary _"Server can't be reached. Try again later"_ message.

Shopping carts would be lost, forcing customers to go back to the product catalog (potentially causing more 30-second timeouts). Customer sign-ups would not go through. Accounts would not get created. App would get stuck on screens without any back buttons (because errors weren't expected to happen).

No wonder customers are saying _it's broken._

Chris now understands what's wrong so he can get to work fixing the problem - loss of network connectivity. But how to fix it?

A traditional system would rely heavily on the back-end. If the back-end was unreachable, for any reason, tough luck! The operation would fail. Perhaps caching some data on the mobile app side might help speed things up. But what to do about adding items to shopping cart, creating customer account, and checking-out? What if the customer tried to make the same order from both the mobile app and the web app? Handling all the different edge cases can easily result in hacks upon hacks, turning the code into a ball of mud.

Could this problem be resolved more easily if Chris had used event-sourcing to build the system?

_I'd love to hear your experiences. Let me know what you think Chris could do or should have done. I'll provide my own answer to this next time._
