---
title: "Brand promises and event-sourcing"
date: 2019-01-23T05:00:00-08:00
---

I had the pleasure of spending some time in Japan a number of years ago. I have many memories from that time but one that sticks out is the punctuality of their railway system.

Where I live now, in the Pacific Northwest, our metro trains are advertised to run every 3-4 minutes during peak hours. Late at night, the frequency is reduced to one train every 8-10 minutes.

Contrast this to Japan where trains are not only accurate to the minute but where such exact train departures are widely advertised in the form of printed brochures that you can take with you. It is common for families to refer to these paper schedules to plan out their daily transit travel, the same way I look at Google Maps here before leaving for work every morning.

Except their paper train schedules are far more accurate than anything I can pull up on my smartphone.

If the Kyushu rail company says that it takes 11 minutes to get from Fukuoka airport to Tenjin shopping district then you can be sure it will take 11 minutes; not 10 and not 12.

In fact, timing is so precise that it makes news when a train doesn't arrive or depart on time.

> _Apology after Japanese train departs 20 seconds early: Management on the Tsukuba Express line between Tokyo and the city of Tsukuba say they "sincerely apologise for the inconvenience" caused. In a statement, the company said the train had been scheduled to leave at 9:44:40 local time but left at 9:44:20._

That particular train departed a whole 20 seconds early. This is real, you can Google it.

I'm not sure what's more impressive about this story. That the rail company issued an apology for such an insignificant, by my Pacific Northwest standards, early departure; that their schedules are so accurate as to take seconds into account; that the company kept detailed and accurate records of all arrivals and departures; or that they acted immediately on a broken brand promise. I don't actually know what their brand promise is but I assume being punctual is a big part of it.

Let's think about this from a technology point of view for a moment.

What kind of technology might support them in monitoring how punctual they are?

They could use a traditional relational SQL database. They'd probably have tables and relationships for trains, stations, lines, schedules, actual arrival and departure times, and lots more I'm sure. They might run a nightly batch job to produce reports for management in the morning, like many businesses do. It would work.

But it wouldn't be nearly as good as an event-sourced solution...

Where you would document each real-life event in the system journal. You would have an event for "Kuko line train arrived at Tenjin station at 9:11:20am on such-and-such a date", followed by "Kuko line train departed Tenjin station at 9:12:40am".

Of course, you wouldn't use natural language. All of the relevant bits of information would be encoded in distinct machine-readable data structures and fields.

What's important is that you can apply constraints to the event stream.

> _A train departure from any station should never occur earlier than scheduled._

If a constraint is violated, you would record the violation as another entry in the journal. And you can then act on it immediately. No need for a batch process to run overnight. You can take corrective action in real-time.

Event-sourcing allows us to build systems that can act not only on physical events, as they occur, but also on constraints, as they are violated, in real-time.

What's more, anyone from an intern that just joined the company to senior management can understand that a brand promise was violated by simply reading the event journal. The violation would be clearly visible.

Something as important as a brand promise violation deserves to be easily detected.

_Have you run into any timing or sequencing constraints in current or past projects that you needed to detect or enforce?_
