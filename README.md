# Saved Search to JSON
This is a proof of concept for rendering the output of a Click Portal custom search
as JSON. It renders an Array of Objects where each Object represents a row in the
results set and the Object Keys are the display heading names.

### Usage

Add this code as a PerType method to CustomUtils.
```javascript
  var results = CustomUtils.savedSearchToJSON("GB Test Search"); // GB Test Search is the display name of a custom search.
  //=> [{"First Name": "Greg", "Last Name": "Barozzi"}]
```


### Potential Applications For This
I see potential for exposing this via a CustomRemoteMethod call to create a secure
endpoint (_CustomRemoteMethods require auth and CustomSearch filters by Read Security_)
for displaying tables and graphs outside of the Click interface.

### Potential Problems
This method essentially runs a query and then iterates over the
result set retrieving data row by row. This is not a speedy process and I'd only
suggest using it to return smaller sets of data.

### License: MIT

Copyright 2017 Gregory Barozzi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
