// array of cereals w/ variables (fiber, sugar and 1= h/ 2= less h/ 3= unhealthy)

var cerealTest = [
{
    fiber: 20,
    sugar: 6,
    score: 1
},
{
    fiber: 6.25,
    sugar: 3.45,
    score: 1
},
{
    fiber: 6.25,
    sugar: 5.75,
    score: 1
},
{
    fiber: 3.75,
    sugar: 4.67,
    score: 1
},
{
    fiber: 6.25,
    sugar: 5.6,
    score: 1
},
{
    fiber: 3,
    sugar: 1,
    score: 1
},
{
    fiber: 3,
    sugar: 6,
    score: 1
},
{
    fiber: 7.5,
    sugar: 5.75,
    score: 1
},
{
    fiber: 28,
    sugar: 0,
    score: 1
},
{
    fiber: 11.25,
    sugar: 6,
    score: 1
},
{
    fiber: 12.5,
    sugar: 3.75,
    score: 1
},
{
    fiber: 5,
    sugar: 4.5,
    score: 1
},
{
    fiber: 2.25,
    sugar: 2.25,
    score: 1
},
{
    fiber: 2.25,
    sugar: 4.5,
    score: 1
},
{
    fiber: 8,
    sugar: 2,
    score: 1
},
{
    fiber: 6,
    sugar: 0,
    score: 1
},
{
    fiber: 6.25,
    sugar: 6,
    score: 1
},
{
    fiber: 13.5,
    sugar: 6,
    score: 1
},
{
    fiber: 10,
    sugar: 0,
    score: 1
},
{
    fiber: 3.75,
    sugar: 5.3,
    score: 1
},
{
    fiber: 2.7,
    sugar: 12,
    score: 2
},
{
    fiber: 2,
    sugar: 3,
    score: 2
},
{
    fiber: 1,
    sugar: 2,
    score: 2
},
{
    fiber: 2.7,
    sugar: 12,
    score: 2
},
{
    fiber: 1,
    sugar: 3,
    score: 2
},
{
    fiber: 3,
    sugar: 9,
    score: 2
},
{
    fiber: 0.75,
    sugar: 3,
    score: 2
},
{
    fiber: 10,
    sugar: 9,
    score: 2
},
{
    fiber: 4,
    sugar: 9.33,
    score: 2
},
{
    fiber: 2.7,
    sugar: 8,
    score: 2
},
{
    fiber: 10,
    sugar: 9,
    score: 2
},
{
    fiber: 1.6,
    sugar: 5.6,
    score: 2
},
{
    fiber: 2.7,
    sugar: 8,
    score: 2
},
{
    fiber: 2.7,
    sugar: 10.7,
    score: 2
},
{
    fiber: 5,
    sugar: 9,
    score: 2
},
{
    fiber: 0,
    sugar: 2.4,
    score: 2
},
{
    fiber: 0,
    sugar: 4,
    score: 2
},
{
    fiber: 4,
    sugar: 12,
    score: 2
},
{
    fiber: 4,
    sugar: 9.33,
    score: 2
},
{
    fiber: 3,
    sugar: 9,
    score: 2
},
{
    fiber: 2.7,
    sugar: 9.33,
    score: 2
},
{
    fiber: 8,
    sugar: 12,
    score: 2
},
{
    fiber: 3,
    sugar: 12,
    score: 3
},
{
    fiber: 4,
    sugar: 16,
    score: 3
},
{
    fiber: 2.7,
    sugar: 13.33,
    score: 3
},
{
    fiber: 3.2,
    sugar: 13.6,
    score: 3
},
{
    fiber: 0,
    sugar: 13.33,
    score: 3
},
{
    fiber: 4,
    sugar: 14.67,
    score: 3
},
{
    fiber: 5,
    sugar: 16,
    score: 3
},
{
    fiber: 3,
    sugar: 12,
    score: 3
},
{
    fiber: 1,
    sugar: 13.33,
    score: 3
},
{
    fiber: 0,
    sugar: 12,
    score: 3
},
{
    fiber: 10,
    sugar: 20,
    score: 3
},
{
    fiber: 4,
    sugar: 14.67,
    score: 3
},
{
    fiber: .67,
    sugar: 6.67,
    score: 3
},
{
    fiber: 4,
    sugar: 20,
    score: 3
},
{
    fiber: 4,
    sugar: 14.67,
    score: 3
},
{
    fiber: 2.67,
    sugar: 13.33,
    score: 3
},
{
    fiber: 4,
    sugar: 19,
    score: 3
},
{
    fiber: 7,
    sugar: 18,
    score: 3
},
{
    fiber: 4,
    sugar: 16,
    score: 3
},
{
    fiber: 6.67,
    sugar: 20,
    score: 3
},
{
    fiber: 8,
    sugar: 12,
    score: 3
},
{
    fiber: 10,
    sugar: 15,
    score: 3
},
{
    fiber: 1,
    sugar: 10,
    score: 3
}];

//shuffle function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};  

//make data function
//test variables start with arbitraty data to stop error message from tensor function below
var test_x = [];
var test_y = [];
var test_start_y = [];
var train_x = [];
var train_y = [];
var train_start_y = [];



//function for sorting the data into test and train data
function makeData(){         
    shuffle(cerealTest);
    for (var i = 0; i < cerealTest.length; i++){
        //this selects 7 random items for test data feel free to pick another number
        if (i <= 7){
            test_x.push(cerealTest[i].fiber);
            test_x.push(cerealTest[i].sugar);            
            test_start_y.push(cerealTest[i].score); 
        //this puts the items into the training data for the model    
        } else if (i > 7){
            train_x.push(cerealTest[i].fiber);
            train_x.push(cerealTest[i].sugar); 
            train_start_y.push(cerealTest[i].score);        
        } else {
            console.log("error in data creation");
        }

    };

};


//this builds your training outputs that the model uses to adjust the weights
//currently there are only three possible options but you can add as many as necessary
function build_train_y(){
    for (var i = 0; i < train_start_y.length; i++){
    if (train_start_y[i] === 1){
        //to add more y possibilities push as many numbers as possiblities all 0 aside from correct answer
        train_y.push(1,0,0);
    } else if (train_start_y[i] === 2){
        train_y.push(0,1,0);
    } else if (train_start_y[i] === 3){
        //then add as many else ifs as necessary
        train_y.push(0,0,1);
    }; 
};

};


//same thing applies for test y that you will use for the predict() function when the training is complete
function build_test_y(){
    for (var i = 0; i < test_start_y.length; i++){
    if (test_start_y[i] === 1){
        test_y.push([1,0,0]);
    } else if (test_start_y[i] === 2){
        test_y.push([0,1,0]);
    } else if (test_start_y[i] === 3){
        test_y.push([0,0,1]);
    }; 
};

};

//this is the function that runs when the browser starts. It implements all the functions above so the data is ready for the model
function start(){
    makeData();
    build_test_y();
    build_train_y();
};

start();

//build tensors function
//tensorflow.js works by doing complex matrix math on a specific kind of array called a tensor
//this function below takes the arrays of training and test data and makes thm into tensors for the model
//if you are adapting this template for other predictive modeling scenarios I encourage you look into uint8 and see if it fits your needs


const tf_test_xs = tf.tensor2d(Uint8Array.from(test_x), [8, 2]);
const tf_train_xs = tf.tensor2d(Uint8Array.from(train_x), [57, 2]);
const tf_train_ys = tf.tensor2d(Uint8Array.from(train_y), [57, 3]);

// //----------------model---------------------
//the model design is very important as well as customizable
const model = tf.sequential();

//the current model has three layers the first two are declared below in the hidden1

const hidden1 = tf.layers.dense({
    //input shape tells tensorflow.js the number of nodes in the input layer
    inputShape: [2],
    //units determines the number of nodes in the hidden layer
    units: 3,
    //I encourage anyone adjusting this template to look into what activation functions are best for what scenarios
    activation: 'relu'

});

//the output layer is the third and final layer of the model
const output = tf.layers.dense({
    //input shape is the amount of nodes in the hidden layer 
    inputShape: [3],
    //units is the amount of nodes in the output layer
    units: 3,
    //again look into what activation function works best for your predicitve modeling scenario
    activation: 'sigmoid'

});

//this function adds the layers to the model if you want more hidden layers simply declare them above and add them right here
model.add(hidden1);
model.add(output);

//this model uses stochastic gradient descent as the loss function but again if you are adapting the model
//I encourage you to look into what optimization function best fits your predictive modeling scenario
const opt = tf.train.sgd(0.1);

//this section compiles the model for use
model.compile({
    //state that you are using the optimizer declared above
    optimizer: opt,
    //once again I encourage you to look into what loss function best fits your predictive modeling scenario
    loss: 'meanSquaredError'
});

//finally the config variable says how many epochs should the model train for
const config = {
    epochs: 100
};

//The train function uses the compiled model to fit the train x's to train ys and log the diminishing loss as it goes
async function train(){
    for(var i = 0; i <= 50; i++){
        const response = await model.fit(tf_train_xs, tf_train_ys, config);
        console.log(response.history.loss[0]);        
    }
};

//finally we call the train function so it starts training when we open the browser
train().then(() => console.log("training complete"));


//the predict function feeds the randomly selected test xs into the model and allows us to compare the models predictions to the correct
//answers in the javascript console!!!
function predict(){
    let outputs = model.predict(tf_test_xs);
    console.log("predictions");
    outputs.print();
    console.log("answers");
    console.log(test_y);
};













