


class LaythButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
        };
    }
    render() {
        return (<button onClick={() => this.setState({ liked: true })}>

            {this.state.liked ? 'liked' : 'nope'}</button>);
    }

}
ReactDOM.render(
    <LaythButton />,
    document.getElementById('root2')
);



class Greeting extends React.Component {
    render() {
        return (<button>Hello l world</button>);
    }
}
ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);

function QuizEvent(word) {
    return (<h3>{word.value}</h3>);

}

function AnsEvent(num) {

    if (num.value === 0) {

        return (<form>
            <select id="choiceEvent">
                <optgroup label="Events">
                    <option value="selectcard" selected="selected">--- Please select ---</option>
                    <option value="wedding">wedding </option>
                    <option value="graduation">graduation</option>
                    <option value="kid shower">kid shower</option>
                    <option value="party">party</option>
                </optgroup>
            </select>
        </form>);


    }
    else if (num.value === 1) {

        return (<div>
            <label for="start">Start date:</label>
            <input type="date" id="start" name="trip-start" min="2018-01-01" max="2018-12-31" />
            <label for="start">end date:</label>
            <input type="date" id="end" name="trip-end" min="2018-01-01" max="2018-12-31" />


        </div>);
    }
    else if (num.value === 2) {

        return (<form>

            <input id="sp" type="radio" name="choice" value="hall" /> hall
            <input id="sp1" type="radio" name="choice" value="food" /> food
            <input id="sp2" type="radio" name="choice" value="clothes" /> clothes
            <input id="sp3" type="radio" name="choice" value="flowers" /> flowers
        </form>);




    }




}

class EventQs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>

                <QuizEvent
                    value="what kind of event are you holding?"
                />
                <AnsEvent
                    value={0}
                />

                <QuizEvent
                    value="when are you holding your event?"
                />
                <AnsEvent
                    value={1}
                />

                <QuizEvent
                    value="what are you looking to book?"
                />
                <AnsEvent
                    value={2}
                />

                <br></br>

                <button onClick={() => this.valdaite()}>submit</button>

            </div>


        );


    }

    valdaite() {
        var val = false;
        var msg = "";
        var ddl = document.getElementById("choiceEvent");
        var selectedValue = ddl.options[ddl.selectedIndex].value;
        if (selectedValue == "selectcard") {
            val = true;
            msg = "Please select the event";

        }

        var test1 = document.getElementById("start");
        var test2 = document.getElementById("end");

        if (!test1.value || !test2.value) {
            if (val === true) {
                msg = msg + " and select the duration";
            }


            else if (val === false) {
                val = true;
                msg = 'Please select the duration';
            }

        }

        var op1 = document.getElementById('sp').checked;
        var op2 = document.getElementById('sp1').checked;
        var op3 = document.getElementById('sp2').checked;
        var op4 = document.getElementById('sp3').checked;

        if (!op1 && !op2 && !op3 && !op4) {
            if (val === true) {
                msg = msg + " and select what you want book";
            }
            else if (val === false) {
                val = true;
                msg = "Please select what you want book";
            }
            // alert("Please select what you want book");
        }
        if (val === true) {
            alert(msg);
        }
        else {
            var checkValue;
            if (op1)
                checkValue = document.getElementById('sp').value;
            else if (op2)
                checkValue = document.getElementById('sp1').value;
            else if (op3)
                checkValue = document.getElementById('sp2').value;
            else
                checkValue = document.getElementById('sp3').value;




            // reqInfo(selectedValue, test1.value, test2.value, checkValue);

            let temp = "so you are looking for " + checkValue + " for a " + selectedValue + "-Yes-No"

            ReactDOM.render(

                <PopupWindow
                    value={temp}
                />,

                document.getElementById('root5')
            );


        }


    }


}


//  onClick={(i) => this.handleClick(i)}


function reqInfo(q1, q2, q3, q4) {
    var cHome = document.querySelector('.containerHome');
    var homeDisplay = document.createElement('h1');
    homeDisplay.setAttribute('class', 'homeDisplay');
    homeDisplay.textContent = q1 + q2 + q3 + q4;
    cHome.appendChild(homeDisplay);


}

class PopupWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            value: props.value


        };
    }

    render() {
        var head = this.state.value.split('-')[0];
        var yBtn = this.state.value.split('-')[1];
        var nBtn = this.state.value.split('-')[2];
        return (
            <div id = "popWindow">
                <h1>{head}</h1>
                <button> <a class="home__class__btn__page"
                            href="page2.html"> {yBtn}</a>

                   

                </button>
                <button onClick={() => closeLayth(popWindow)}>

                    {nBtn}
                </button>




            </div>
        );
        // {this.state.string.split('-')[0]}






    }





}
function closeLayth(props){
    var div = document.getElementById('popWindow');
    div.parentNode.removeChild(div);

}
// function newPage() {

//     <div class="home__class__btn"><button><a class="home__class__btn__page"
//                             href="page2.html">Soccer</a></button>
//                 </div>
//     // var opened = window.open("");
//     // opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
//     // var homeDisplayPara = document.createElement('p');
//     // homeDisplayPara.setAttribute('class', 'homeDisplayPa');
//     // homeDisplayPara.textContent = "hello";
//     // document.body.appendChild(homeDisplayPara);



// }



ReactDOM.render(
    <EventQs />,
    document.getElementById('root3')
);

// ReactDOM.render(

//     <PopupWindow
//     value = "ghg-headhggh"
//     />,

//     document.getElementById('root5')
// );









