import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      uname: "",
      pwd: "",
      guardianType: "",
      guardianName: "",
      address: "",
      citizenship: "",
      state: "",
      country: "",
      email: "",
      gender: "",
      maritalStatus: "",
      contactNo: "",
      dob: "",
      registrationDate: "",
      accType: "",
      branchName: "",
      citizenStatus: "",
      depositAmount: {
        saving: "",
        salary: "",
      },
      proofType: "",
      documentNo: "",
      holderName: "",
      holderAccountNumber: "",
      holderAddress: "",
      errors: {},
    };
  }

  validate = (e) => {
    if (e.target.name === "name") {
      var regex = /^[a-zA-Z ]*$/;
      if (regex.test(e.target.value) === true) {
        if (e.target.value === "") {
          this.setState({
            errors: {
              [e.target.name]: "Name Cannot be Blank",
            },
          });
        } else {
          this.setState({
            errors: {
              [e.target.name]: "",
            },
          });
          return true;
        }
      } else {
        this.setState({
          errors: {
            [e.target.name]: "Please Enter Valid Name",
          },
        });
        return false;
      }
    }
    if (
      e.target.name === "uname" ||
      e.target.name === "pwd" ||
      e.target.name === "guardianType" ||
      e.target.name === "guardianName" ||
      e.target.name === "address" ||
      e.target.name === "citizenship" ||
      e.target.name === "state" ||
      e.target.name === "country"
    ) {
      if (e.target.value === "") {
        this.setState({
          errors: {
            [e.target.name]: `${e.target.id} Cannot be Blank`,
          },
        });
      } else {
        this.setState({
          errors: {
            [e.target.name]: "",
          },
        });
        return true;
      }
    }

    if (e.target.name === "email") {
      var regex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
      if (regex.test(e.target.value) === true) {
        if (e.target.value === "") {
          this.setState({
            errors: {
              [e.target.name]: "Email Cannot be Blank",
            },
          });
        } else {
          this.setState({
            errors: {
              [e.target.name]: "",
            },
          });
          return true;
        }
      } else {
        this.setState({
          errors: {
            [e.target.name]: "Please Enter Valid Email",
          },
        });
        return false;
      }
    }

    if (e.target.name === "documentNo") {
      var regex = /^[A-Z0-9]{12}$/;
      if (regex.test(e.target.value) === true) {
        if (e.target.value === "") {
          this.setState({
            errors: {
              [e.target.name]: "PAN Number Cannot be Blank",
            },
          });
          return false;
        } else {
          this.setState({
            errors: {
              [e.target.name]: "",
            },
          });
          return true;
        }
      } else {
        this.setState({
          errors: {
            [e.target.name]: "Please Enter Valid Pan Number",
          },
        });
        return false;
      }
    }
    if (e.target.name === "contactNo") {
      var regex = /^[0-9]{10}$/;
      if (regex.test(e.target.value) === true) {
        if (e.target.value === "") {
          this.setState({
            errors: {
              [e.target.name]: "Contact Number Cannot be Blank",
            },
          });
          return false;
        } else {
          this.setState({
            errors: {
              [e.target.name]: "",
            },
          });
          return true;
        }
      } else {
        this.setState({
          errors: {
            [e.target.name]: "Please Enter Valid Contact Number",
          },
        });
        return false;
      }
    }
  };

  handleChange = (e) => {
    const isValid = this.validate(e);
    if (isValid) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState({
        [e.target.name]: "",
      });
    }
  };

  handleChangeNested = (e) => {
    this.setState({
      [e.target.name]: {
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //   const isValid = this.validate()
  };

  render() {
    const x = Object.values(this.state);
    console.log(x);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            Name:
            <input
              type="text"
              id="name"
              placeholder="Nick"
              name="name"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.name}</div>
            <br />
          </div>
          <div className="form-group">
            Username:
            <input
              type="text"
              id="username"
              placeholder="UserName"
              name="uname"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.uname}</div>
            <br />
          </div>
          <div className="form-group">
            Password:
            <input
              type="password"
              id="Password"
              placeholder="Password"
              name="pwd"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.pwd}</div>
            <br />
          </div>
          <div className="form-group">
            Guardian Type:
            <input
              type="text"
              id="guardianType"
              placeholder="Guardian Type"
              name="guardianType"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.guardianType}</div>
            <br />
          </div>
          <div className="form-group">
            Guardian Name:
            <input
              type="text"
              id="guardianName"
              placeholder="Guardian Name"
              name="guardianName"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.guardianName}</div>
            <br />
          </div>
          <div className="form-group">
            Address:
            <input
              type="text"
              id="address"
              placeholder="Address"
              name="address"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.address}</div>
            <br />
          </div>
          <div className="form-group">
            Citizenship:
            <input
              type="text"
              id="citizenship"
              placeholder="Citizenship"
              name="citizenship"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.citizenship}</div>
            <br />
          </div>
          <div className="form-group">
            State:
            <input
              type="text"
              id="state"
              placeholder="State"
              name="state"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.state}</div>
            <br />
          </div>
          <div className="form-group">
            Country:
            <input
              type="text"
              id="country"
              placeholder="Country"
              name="country"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.country}</div>
            <br />
          </div>
          <div className="form-group">
            Email Address:
            <input
              type="text"
              id="emailAddress"
              placeholder="abc@xyz.com"
              name="email"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.email}</div>
            <br />
          </div>
          <div className="radio">
            Gender:
            <input
              type="radio"
              id="male"
              name="gender"
              className="radio-btn-group"
              onChange={this.handleChange.bind(this)}
              value="male"
              required
            />
            Male
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="radio-btn-group"
              onChange={this.handleChange.bind(this)}
              required
            />
            Female
            <div className="text-danger">{this.state.errors.gender}</div>
            <br />
          </div>
          <div className="form-group">
            Marital Status:
            <select
              name="maritalStatus"
              onChange={this.handleChange.bind(this)}
              required
            >
              <option value="">Please Select from below</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
            <div className="text-danger">{this.state.errors.maritalStatus}</div>
            <br />
          </div>
          <div className="form-group">
            Contact Number:
            <input
              type="text"
              id="contactNo"
              placeholder="9876543210"
              name="contactNo"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.contactNo}</div>
            <br />
          </div>
          <div className="form-group">
            Date of Birth:
            <input
              type="date"
              id="dateOfBirth"
              placeholder="Date of Birth"
              name="dob"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.dob}</div>
            <br />
          </div>
          <div className="form-group">
            Registration Date:
            <input type="date" name="registrationDate" />
            <br />
            <div></div>
          </div>
          <div className="form-group">
            Account Type:
            <input
              type="text"
              id="accType"
              placeholder="Account Type"
              name="accType"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.accType}</div>
            <br />
          </div>
          <div className="form-group">
            Branch Name:
            <input
              type="text"
              id="branchName"
              placeholder="Branch Name"
              name="branchName"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.branchName}</div>
            <br />
          </div>
          <div className="form-group">
            Citizen Status:
            <input
              type="text"
              name="citizenStatus"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.citizenStatus}</div>
            <br />
          </div>
          <div className="form-group">
            Initial Deposit Amount:
            <input
              type="radio"
              id="saving"
              name="depositAmount"
              onChange={this.handleChangeNested.bind(this)}
              value="5000"
              required
            />
            Savings
            <input
              type="radio"
              id="salary"
              name="depositAmount"
              value="0"
              onChange={this.handleChangeNested.bind(this)}
            />
            Salary
            <div className="text-danger">{this.state.errors.depositAmount}</div>
            <br />
          </div>
          <div className="form-group">
            Proof Type:
            <select
              name="proofType"
              onChange={this.handleChange.bind(this)}
              required
            >
              <option value="">Please Select from below</option>
              <option value="Aadhar">Aadhar Card</option>
              <option value="Driving">Driving License</option>
              <option value="Pan Card">Pan Card</option>
            </select>
            <div className="text-danger">{this.state.errors.proofType}</div>
            <br />
          </div>
          <div className="form-group">
            Document Number:
            <input
              type="text"
              id="document"
              name="documentNo"
              placeholder="R123456"
              className=" form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.documentNo}</div>
            <br />
          </div>
          <div className="form-group">
            Account Holder Name:
            <input
              type="text"
              id="account"
              name="holderName"
              placeholder="ABC"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.holderName}</div>
            <br />
          </div>
          <div className="form-group">
            Account Number:
            <input
              type="text"
              id="accountNumber"
              name="holderAccountNumber"
              placeholder="Account Number"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">
              {this.state.errors.holderAccountNumber}
            </div>
            <br />
          </div>
          <div className="form-group">
            Holder Address:
            <input
              type="text"
              id="holderAddress"
              name="holderAddress"
              placeholder="Adderss"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
            <div className="text-danger">{this.state.errors.holderAddress}</div>
            <br />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
