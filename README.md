# Coinmania

- This project is a React.js application developed to allow users to track cryptocurrency prices. Through the application, users can browse the prices of existing coins, see the past price changes of a particular coin and examine its detailed information.

- The chart.js library was used to show the past prices of coins on the chart.

- - Model:

- Contains a data structure for coin data, price

- It is used to update and store coin data.

- Pulls current data by communicating with the Coincap API.

- - View:

- It contains React components that make up the user interface.

- It consists of parts such as an interface for the coin list, a component for displaying a price graph, a separate component for detailed information.

- Kullanıcının seçtiği coinin verilerini görüntüler.

- - Controller:

- Manages user interactions.Detects the user's coin selection and initiates API requests to update the Model.

- Updates the user interface by passing current data from the Model to the View.

## Libraries

- react-router-dom

- formic

- yup

- axios

- bootstrap

- millify

- sass

- uuid

- chart.js

- react-chartjs-2

- react-icons

## Source

- Coincap API:https://docs.coincap.io/

## Gif

<img src="./public/screen.gif" />
