var express = require("express");
var passport = require("passport");

var User = require("./models/user");
var router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.flash("info", "You must be logged in to see this page.");
    res.redirect("/login");
  }
}

router.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});


router.get("/", function(req, res) {
  res.render("login");
});

router.post("/login", passport.authenticate("login", {
  successRedirect: "/",
  failureRedirect: "/",
  failureFlash: true
}));

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/register", function(req, res) {
  res.render("signup");
});

router.get("/form",ensureAuthenticated, function(req, res) {
  res.render("form");
});

router.post('/form',ensureAuthenticated,(req,res,next)=>{
  req.user.firstName=req.body.firstName
  req.user.country=req.body.country

  req.user.middleName=req.body.middleName
  req.user.lastName=req.body.lastName
  req.user.address=req.body.address
  req.user.apt=req.body.apt
  req.user.state=req.body.state
  req.user.city=req.body.city
  req.user.zipCode=req.body.zipCode
  req.user.diffentMailingAddress=req.body.diffentMailingAddress

  req.user.mailingAddress=req.body.mailingAddress
  req.user.mailingApt=req.body.mailingApt
  req.user.mailingCountry=req.body.mailingCountry
  req.user.mailingState=req.body.mailingState
  req.user.mailingCity=req.body.mailingCity
  req.user.mailingZipCode=req.body.mailingZipCode
  req.user.martialStatus=req.body.martialStatus
  
  req.user.telephoneNumber=req.body.telephoneNumber

  
  req.user.numberDependents=req.body.numberDependents
  req.user.trustedPerson=req.body.trustedPerson
  req.user.trustedName=req.body.trustedName
  req.user.trustedPhonenumber=req.body.trustedPhonenumber
  req.user.trustedEmail=req.body.trustedEmail

  req.user.trustedAddress=req.body.trustedAddress
  
  req.user.trustedState=req.body.trustedState

  req.user.trustedCountry=req.body.trustedCountry
  req.user.trustedCity=req.body.trustedCity

  req.user.trustedZipCode=req.body.trustedZipCode

  req.user.trustedRelation=req.body.trustedRelation
  
//2NDF
req.user.areYouCurrently=req.body.areYouCurrently

req.user.employeeName=req.body.employeeName

req.user.occupation=req.body.occupation

req.user.addressOfEmployee=req.body.addressOfEmployee

req.user.yersOfEmployee=req.body.yersOfEmployee
req.user.employeeState=req.body.employeeState
req.user.employeeZipCode=req.body.employeeZipCode
req.user.employeeCity=req.body.employeeCity

req.user.employeePhoneNumber=req.body.employeePhoneNumber


req.user.employeeApt=req.body.employeeApt


req.user.employeeFax=req.body.employeeFax




req.user.employeeCountry=req.body.employeeCountry





//3f
req.user.customerDatebirth=req.body.customerDatebirth

req.user.customerIdtype=req.body.customerIdtype
req.user.customerIdnumber=req.body.customerIdnumber

req.user.customerExpiration=req.body.customerExpiration
req.user.customerPlace=req.body.customerPlace

req.user.customerIssueDate=req.body.customerIssueDate

req.user.customerTaxResidence=req.body.customerTaxResidence

 //4F
 

 req.user.annualIncome=req.body.annualIncome
 req.user.netWorth=req.body.netWorth


 req.user.liquidNet=req.body.liquidNet

 req.user.tax=req.body.tax


 //5F
 req.user.income=req.body.income
 req.user.pension=req.body.pension

 
 req.user.funds=req.body.funds
 req.user.gift=req.body.gift


 req.user.inheritance=req.body.inheritance

  req.user.other=req.body.other
  req.user.others=req.body.others

 req.user.social=req.body.social

 
 req.user.nameofTheBank=req.body.nameofTheBank 
 req.user.abaSwift=req.body.abaSwift
 req.user.accountNumber=req.body.accountNumber


 

 //6f


 
 req.user.riskAcceptance=req.body.riskAcceptance
 req.user.annualExpence=req.body.annualExpence


 req.user.specialExpence=req.body.specialExpence
 req.user.liquidityNeeds=req.body.liquidityNeeds
 expectedPeriod
 req.user.expectedPeriod=req.body.expectedPeriod

 
 //7F
 req.user.Stocks=req.body.Stocks

 req.user.Stocks=req.body.Bond
 req.user.Options=req.body.Options
 req.user.Future=req.body.Future
 req.user.stock_opt=req.body.stock_opt

 req.user. bond_opt =req.body. bond_opt

 
 req.user. options_opt =req.body. options_opt
 
 
 req.user. future_opt =req.body. future_opt
 
 req.user. stock_check =req.body. stock_check
 
 req.user. bond_check =req.body. bond_check

 
 req.user. option_check =req.body. option_check

 req.user. broker_account =req.body. broker_account
 req.user. future_check =req.body. future_check

 req.user. beneficial =req.body. beneficial

 req.user. finra =req.body. finra

 req.user. institution =req.body. institution
 req.user. under_us =req.body. under_us
 
 req.user. tax_witholding =req.body. tax_witholding



 req.user. seniorOfficer =req.body. seniorOfficer


 

 
//F8
req.user. senior =req.body. senior
req.user. household=req.body. household
req.user. disclosuresCompanyname=req.body. disclosuresCompanyname

municipal
req.user. municipal =req.body. municipal
req.user. symbol =req.body. symbol
req.user. disclosureCompanyname =req.body. disclosureCompanyname
req.user. disclosureAddress =req.body. disclosureAddress

req.user. disclosureCity =req.body. disclosureCity


req.user. disclosureState =req.body. disclosureState

req.user. disclosureZipCode =req.body. disclosureZipCode

req.user. disclosureclient =req.body. disclosureclient

req.user. agrem =req.body. agrem



req.user. penny =req.body. penny

req.user. online_risj =req.body. online_risj

req.user. anti_money =req.body. anti_money

req.user. margin_disc =req.body. margin_disc

req.user. petren =req.body. petren



req.user. confirmed_electronic =req.body. confirmed_electronic

req.flash("info", "Form Submitted!");
res.redirect("/");

})

router.post("/signup", function(req, res, next) {

  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email }, function(err, user) {

    if (err) { return next(err); }
    if (user) {
      req.flash("error", "User already exists");
      return res.redirect("/register");
    }

    var newUser = new User({
      email: email,
      password: password
    });
    newUser.save(next);

  });
}, passport.authenticate("login", {
  successRedirect: "/form",
  failureRedirect: "/register",
  failureFlash: true
}));


module.exports = router;
