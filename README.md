# TTT React App

This **React App** was created first in the VS Code and then was optimized for deployment using

    npm run build
The app was then deployed on Vercel. It can be found [here](terribly-tiny-tales-oqjf.vercel.app).
The URL is `https://terribly-tiny-tales-oqjf.vercel.app/
`
# GitHub Repository
The **build** folder contains the optimized code for the **React app**.
The other folders contain the original code which was written on the local machine. Since the **node_modules** folder take up a lot of storage *(around 330 MB)*, the folder has not been uploaded on **GitHub**.
Other than that the **public** folder contains the *index.html* file. The **src** folder contains the *App.js* and *index.js* files.

## Components

There is just one main component which is the **App** component. Other than that there are several other components which have been imported from the **recharts** library. These are:
 - BarChart
-   Bar
-   XAxis
-   YAxis
-   CartesianGrid
-   Tooltip
-   Legend
We use these components within **App** component to create the bar chart.

## Libraries

Other than using **React** which in itself is a **JavaScript** library, only **recharts** library has been used. **React** is used to import **useState** hook which is used to manage the states in the code. **recharts** provide all necessary components to create the bar chart.

## Dependencies

The dependencies used are provided in the **package.json**. The following dependencies have been used:

 - react
 - recharts
 - react-dom
 - react-scripts

## Plugins

No plugins have been used in the code. The components from the **recharts** library were enough to obtain the desired result.


## Code explanation

The code develops a front-end which that gets data from the mentioned URL and then as per the word frequencies displays the top 20 words as a bar chart using the **recharts** library. It also provides an option to export the data as a CSV file.
First of all we define a React component **App** and then import all necessary dependencies. Then within the main component we define two states using the **useState** hook. The **data** state stores the word frequencies for the chart and the **isLoading** state shows whether the data is being fetched. **isLoading** is initialized to *false* as the data is only fetched when submit is clicked. The data is fetched using the **fetchData** function. It fetches data from the provided URL, extracts words from the text file obtained. It then calculates their frequencies, sorts them, and updates the **data** state with the top 20 words and their frequencies. The **handleExport** function is used to export the chart data as a .csv file. Additionally the various components from the **recharts** library are used to create the required chart.
