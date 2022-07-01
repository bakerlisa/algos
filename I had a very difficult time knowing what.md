I had a very difficult time knowing what they wanted in this problem. So it took me a bit to figure out what was going on.

Time complexity is definitely an issue with this one because its checking each pair with each pair. I'm not sure if there's an eaiser way to do it, because we need to check all the pairs to find the best front and backend

I looped through the foregroundAppList and compared it to every value in the backgroundAppList. If either were bigger then the device memory, we skipped over that pair. While I was doing that I also wanted to find the closest values to deviceCapacity, so that was running in the loop as well. At the end, as long as there were values in the mating array we returned that, else we'd return 