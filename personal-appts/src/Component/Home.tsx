import * as React from "react";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="Home-Page">
      <h1>!Thoughts of karthick!</h1>
      <div className="Yooo">
        <h2>Yooo Welcome...</h2>
        <p>
          Hi this is karthick. Welcome to my page. Here iam doing nothing just
          to show off my skills in React.JS.Hope you like this page that i
          develop for nothing. Dont know what to add in this page. So i randomly
          type something that doesn't make any sense.
        </p>
        <h2>Here it comes...</h2>
        <div className="quote">
          <q>
            I don’t know what the dream is that you have. I don’t care how
            far-fetched it might appear to be. I don’t care how disappointing it
            might have been as you’ve been working toward that dream. But here’s
            what I know. That dream that you’re holding in your mind, that it’s
            possible. What if all of us took that attitude after we face a
            rejection and a no, or we have a meeting and no one shows up? Or
            somebody says, “You can count on me.” And they don’t come through.
            What if we had that kind of attitude? The car’s repossessed.{" "}
            <span>
              Nobody believes in you. You’ve lost again, and again, and again.
              The lights are cut off, but you still are looking at your dream,
              reviewing it every day and say to yourself, It’s not over until I
              win.
            </span>
          </q>
        </div>
      </div>
    </div>
  );
};

export default Home;
