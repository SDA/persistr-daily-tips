---
title: "Event-sourcing on paper"
date: 2019-01-18T06:00:00-08:00
---

This is a story about event-sourcing but it is entirely non-digital. There are no computers in this story. Just pen and paper.

Every summer I spend time at our family cottage a couple hours out of town. It's a nice quiet place, great for summer fun like swimming in the lake or relaxing by a firepit with a drink in hand.

We're not the only family who likes getting out there. Weekends can get very busy. There is one intersection with a traffic light that can cause a mile-long line up of cars. It was a somewhat frequent occurrence in the summer time. One time it took us a couple hours just to get through this one intersection.

As it turned out, the local transit authority noticed this as well. One day an engineering crew showed up. They posted a person to sit at the intersection, all day, every day, and keep a traffic journal. The engineer would write in the journal the time of day, how busy the intersection was, how many cars got through on a green light, and how often a car turning left would block the entire lane.

I imagine their journal looked something like this:

> *12:10pm* **Light turned green**
>
> *12:10pm-12:11pm* **3 cars got through**
>
> *12:11pm* **Left-turning car is blocking lane**
>
> *12:13pm* **Light turned red, left turning car finally turned**
>
> ...

It's a timestamped journal of notable events that happened at the intersection. A journal is the backbone of an eventsourced database.

What could we do with a journal like this?

Suppose you wanted to know how many cars passed through the intersection per hour. You could scan the journal, oldest to newest, and count the number of cars based on the time logged in the journal. Sum up the numbers and plot them on a histogram.

What if you wanted to know how many cars get through a green light? Along with some useful statistics like average, standard deviation, or median? Since the journal contains times when the light turned green or red, you could scan the journal in chronological order to count the number of cars that got through each green light.

The journal is the database. By scanning the journal, we can create any number of reports. We don't need to keep the reports since they can be recreated at any time. We just need to ensure that the journal is safe and secure.

It's about as simple as event-sourcing gets.

And what happened to the intersection? A couple years later, it was replaced with a traffic circle. Long lineups have disappeared. Traffic flows much faster now.

Event-sourcing saved the day, even if it was only done with pen and paper.
