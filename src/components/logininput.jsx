import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { userLogin} from '../services/user.services'
import MailIcon from '@material-ui/icons/Mail';

class LoginInput extends Component {
    state = {
        email: '',
        password: '',
        showPassword: false,
        open: false,
        errormsg: '',

    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };
    handleregister = event => {
        event.preventDefault();
        this.props.props.history.push("/register");

    }
    handleforgetpasssword = event => {
        event.preventDefault();

        this.props.props.history.push("/forgetpassword");

    }
    handlelogin = event => {
        event.preventDefault();
        var Emailverfy = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email);
        if (this.state.email === '' || !Emailverfy) {

            this.setState({ open: true, errormsg: "Please Enter valid Email" });
        }
        else if (this.state.password === '' || this.state.password.length < 6) {
            this.setState({ open: true, errormsg: "Please Enter valid Password" });
        }
        else {
            var data = {
                email: this.state.email,
                password: this.state.password
            }
            console.log("data in login page==>", data);

            userLogin(data)
                .then((res) => {
                    console.log(this.state.email);
                    this.setState({ open: true, errormsg: "Login sucessfull!!!!" });
                    window.location.href = '/dashBoard';
                    //this.props.props.history.push("/dashBoard")
                }).catch((err) => {
                    console.log("err", err);
                    this.setState({ open: true, errormsg: "Login Unsucessfull" });
                })




        }
    }
    handleClose = () => {

        this.setState({ open: false });
    };

    render() {

        return (
            <div>

                <div className="form-wrapper1">
                    <p id="fundooname">
                        <b> <span id="f">F</span>
                            <span id="u">u</span>
                            <span id="n">n</span>
                            <span id="d">d</span>
                            <span id="o">o</span>
                            <span id="o1">o</span>
                        </b>
                    </p>
                    <div id="signintext">
                        <h1 ><b>Sign in</b></h1>
                        <p> with your Fundoo Account</p>
                    </div>
                    <div id="emaillogin">
                        <TextField
                            id="emailtextalign"
                            label="Email"
                            margin="dense"
                            variant="outlined"
                            onChange={this.handleChange('email')}
                            InputProps={{
                                endAdornment: (
                                    <IconButton color="inherit">
                                            <MailIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>

                    <div id="password-div1">
                        <TextField
                            id="outlined-dense3"
                            // className={classNames(classes.margin, classes.textField)}
                            variant="outlined"
                            type={this.state.showPassword ? 'text' : 'password'}
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div>
                        <Button id="forgotpassword" onClick={this.handleforgetpasssword}  >
                            <b>Forgotpassword?</b>
                        </Button>
                    </div>
                    <div id="login-div">
                        <Button id="signinbutton1" onClick={this.handleregister}  >
                            <b>Create account</b>
                        </Button>
                        <span id="login-div1" >
                            <Button variant="contained" color="primary" id="registerbutton"
                                onClick={this.handlelogin}>
                                Signin
                               </Button>
                        </span>
                    </div>

                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    onClose={this.handleClose}
                    autoHideDuration={6000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">
                        {this.state.errormsg}</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                            UNDO
                              </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            //  className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />

            </div>
        )

    }
}
export default LoginInput;