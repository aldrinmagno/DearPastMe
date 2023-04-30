import React from "react";
import Link from "next/link";
import Head from "next/head";

const ComingSoon = () => {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime:any = new Date("June 15, 2023 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now:any = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days:any = Math.floor(timeLeft / 86400);
    let hours:any = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes:any = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds:any = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };
  return (
    <>
    <Head>
        <title>
          DearPast.me will be available soon!
        </title>
        <meta
          name="description"
          content="DearPast.me is a platform that allows users to write letters to their past selves and share them with a community of people who are also looking to heal and reflect on their past. It is a safe and private space for self-discovery, reflection, gratitude, inspiration, and healing. It aims to provide users with a tool to process and understand their past experiences, find closure and move forward. It also allows users to read and gain inspiration from other's letters, which can help them with their journey of self-discovery and healing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
       </Head>
    <div className="coming-soon-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="coming-soon-content">
            <Link href="/" className="logo">
                <img src="/images/logo.png" alt="image" />
            </Link>

            <h2>Will be available soon!</h2>

            <div id="timer" className="flex-wrap d-flex justify-content-center">
              <div
                id="days"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {days} <span>Days</span>
              </div>
              <div
                id="hours"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {hours} <span>Hours</span>
              </div>
              <div
                id="minutes"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {minutes} <span>Minutes</span>
              </div>
              <div
                id="seconds"
                className="align-items-center flex-column d-flex justify-content-center"
              >
                {seconds} <span>Seconds</span>
              </div>
            </div>

            
            <div className="container">
              <div className="subscribe-content">
                <p>If you would like to be notified when your app is live, Please subscribe to our mailing list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ComingSoon;
