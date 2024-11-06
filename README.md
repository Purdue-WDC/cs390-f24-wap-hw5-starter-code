# HW5: React + Express

## Objective
To practice building full-stack applications, in this assignment, you will be expanding upon HW4 to add user signup, login, and game logging.

The frontend folder has already been set up for React. However, if you choose another framework, feel free to delete the files in that folder and follow its getting started guide.

Note: 
- You do not need to choose the same game you made for HW2, HW3, and HW4. Feel free to choose any game from the list provided in HW2.
- This assignment, meeting game-specific requirements is optional and will not be graded for.

## Running Both Apps
To run both the React and Express apps, simply open 2 terminal and follow the guides given in each folder's `README.md` file.

## Template Code Explained

### React Template
Here, I have provided a very basic template for building a React app. It includes page routing via the React Router library in `frontend/src/App.jsx` and a context for passing data, such as the user data of whom we are logged into, throughout the entire application in `frontend/src/contexts/GlobalContext.jsx`. I recommend going through each file and reading the comments to better understand the code and my intention with it.

Note: Feel free to use this template for hackathons like BoilerMake if you like.

## Instructions/Requirements

### Signup (10 points)
- Create a signup form in `frontend/src/pages/Signup.jsx` (2 points, 2 per bullet). It should:
  - Include at least a username and password.
- Create a `/signup` HTTP POST request handler in `backend/index.jsx` (4 points, 1 per bullet). It should:
  - Read a username and password from the request body (and any other data you might have users sign up with).
  - Respond with an error message and 409 Conflict status code if a user with the same username already exists in `user_data`.
  - Save the new user's data to `user_data`. Consider using the username as the key.
  - Respond with any user information and a 200 status code upon success.
- Make a HTTP POST request to `localhost:3000/signup` from `frontend/src/pages/Signup.jsx` (4 points, 1 per bullet). It should:
  - Make the request upon form submission.
  - Upon success, set the user state passed by GlobalContext with the user information returned by the HTTP request. 
  - Upon success, navigate the user to the `/game` page upon success. Use React Router's useNavigate hook to accomplish this.
  - Upon failure, throw an alert containing an error message.

### Login (4 points)
- Create a login form in `frontend/src/pages/Login.jsx` (0.5 points, 0.5 per bullet). It should:
  - Include at least a username and password.
- Create a `/login` HTTP POST request handler in `backend/index.jsx` (1.5 points, 0.5 per bullet). It should:
  - Take a username and password from the request body (and any other data you might have users log in with).
  - Respond with user data and a 200 status code if a matching user is found in `user_data`.
  - Respond with an error message and 401 Unauthorized status code if no user with that username and password combination exists.
- Make a HTTP POST request to `localhost:3000/login` from `frontend/src/pages/Login.jsx` (2 points, 0.5 per bullet). It should:
  - Make the request upon form submission.
  - Upon success, set the user state passed by GlobalContext with the user information returned by the HTTP request. 
  - Upon success, navigate the user to the `/game` page upon success.
  - Upon failure, throw an alert containing an error message.
Note that because this section only deviates slightly from Signup, point values have been reduced.

### Game (4 points)
- Copy your game code from HW4 to `frontend/src/pages/Game.jsx`.
- Create a `/log-game-result` HTTP POST request handler in `backend/index.jsx` (4 points, 1 per bullet). It should:
  - Take a score and board state (the board array) from the request body.
  - Copy the request body object and add a timestamp (ex. `body_copy.timestamp = Date.now()`) forming our game log object.
  - Append the game log object to `game_logs` and call `console.log(game_logs)`.
  - Respond with a 200 status code upon success, or a 500 status code upon failure (which should not happen).

### Code Readability (2 points)
- Proper indentation (1 point)
- Meaningful variable names (1 point)

### Extra Features (5-10 bonus points)
For this assignment, live data will be counted as extra credit. This might include:
- Multiplayer: Have each player be able to see when others players move in real time.
- Live leaderboard: Have each player see a live leaderboard that updates when other players finish the game.
- Anything else involving live data.

To accomplish this, I advise using one of the methods described in lecture 22:
- Short polling (5 bonus points): Have each JS client send requests periodically to the Express server checking for updates.
- Long polling (5 bonus points): Have each React client send requests that the Express server only responds to once an update is detected.
- WebSockets (10 bonus points): Establish a WebSocket connection between the React app and the Express server. Have the Express server send relevant updates each client connected to it. Because Express.js was not made for managing web socket connections, I advise using the `express-ws` npm library as shown in lecture.
Because integrating WebSockets is far more involved than short or long polling, it will count for twice as many bonus points.

## Submission Guidelines

Your repository should include:
1. All files necessary to run your application.
2. An `answers.txt` file containing your answers to the specified questions.

Please do NOT push `node_modules` to your repository. To avoid this, do NOT delete, or remove `node_modules` from, `.gitignore`.