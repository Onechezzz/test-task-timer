The task was: to update the database when closing a tab or browser.
Stopwatches can work in parallel on a computer and a mobile device.
It was not possible to implement sending when the tab is closed.
So I will briefly tell you about what was used in the process to solve this problem.
The function of identifying the input device, due to the fact that only the desktop was used, turned out to be useless.
An attempt to transmit data immediately before the tab is closed (first through addEventListener in useEffect, through localStorage, window.onbeforeunload, through data transmission after each timer tick, passing data to the useEffect array, creating a second useEffect with its own data, and solving problems with asynchrony "setState" via custom hook).
Here is the actual device detection function itself, which was not useful, since the application only works on the desktop:

const getDeviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
          console.log("tablet")
          return "tablet";
        }
        if (
          /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
          )
        ) {
          console.log("mobile")
          return "mobile";
        }
        console.log("desktop")
        return "desktop";
      };

I'd love to know how to update the database on shutdown. I hope you will like it=)
