// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.Collection;
import java.util.Collection;
import java.util.Collections;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;
import java.util.TreeMap;
import java.util.Map;
import java.util.Iterator;
import java.util.Set;
import java.lang.Math;
import java.lang.Integer;
import java.lang.Number;

public final class FindMeetingQuery {
    public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
      
        Collection<String> attendees = request.getAttendees();
        TreeMap<Integer, Integer> eventHash = new TreeMap<>();
        int lastEnd = 0;
        int curStart = 0;
        int curEnd = 0;

        //Loop through all everts and make a hashmap with the events that has the request attendees
        //If we have N events, that is O(N) of time complexity and O(N) of space complexity
        for(Iterator iterator = events.iterator(); iterator.hasNext();) {
            Event curEvent = (Event) iterator.next();
            Collection<String> curAttendees = curEvent.getAttendees();
            if(Collections.disjoint(curAttendees, attendees)) {
                //None of the attendees will go to the event
                continue;
            }
            curStart = Integer.valueOf(curEvent.getWhen().start());
            curEnd = Integer.valueOf(curEvent.getWhen().end());
            if(lastEnd > curStart) {
                //In case the events overlap
                if(curEnd < lastEnd) {
                    //Total overlap
                    continue;
                } else {
                    //Not total overlap
                    curStart = lastEnd;
                }

            }  
            lastEnd = curEnd;
            System.out.println(curStart + " " + curEnd); 
            eventHash.put(curStart, curEnd);
        } 

      //Loop through time ranges of the relevant meetings and check for time gaps.
      //If we have N events the time and space complexity is 0(N). 
        Iterator hashIterator = eventHash.entrySet().iterator(); 
        int lastFinish = 0;
        int duration = (int) Math.ceil(request.getDuration());
        Collection<TimeRange> timeRanges = new ArrayList<TimeRange>();

        while (hashIterator.hasNext()) {
            Map.Entry mapElement = (Map.Entry)hashIterator.next(); 
            int integerKey = Integer.valueOf((Integer)mapElement.getKey());
            int newDuration = integerKey - lastFinish;
            if(newDuration >= duration) {
                TimeRange newTimeRange = new TimeRange(lastFinish, newDuration);
                timeRanges.add(newTimeRange);
            }
            int integerValue = Integer.valueOf((Integer) mapElement.getValue());
            lastFinish = integerValue;
        }

      //Now we need to fill the spaces from the ending of the last event until the end
      //of the day
        int endOfTheDay = TimeRange.getTimeInMinutes(23, 59);
        int timeUltilEnd = endOfTheDay - lastFinish;
        if(timeUltilEnd >= duration) {
            TimeRange newTimeRange = new TimeRange(lastFinish, timeUltilEnd + 1);
            timeRanges.add(newTimeRange);
        }
      return timeRanges;
  }
}
