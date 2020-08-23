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

router.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});
router.post("/form", ensureAuthenticated, function (req, res, next) {
  req.user.firstName = req.body.firstName;
  req.user.middleName = req.body.middleName;
  req.user.lastName = req.body.lastName;
  req.user.suitNo = req.body.suitNo;
  req.user.address = req.body.address;
  req.user.streetAddress = req.body.streetAddress;
  req.user.country = req.body.country;
  req.user.province = req.body.province;
  req.user.city = req.body.city;
  req.user.occupation = req.body.occupation;
  req.user.differentMailingAddress = req.body.differentMailingAddress;
  req.user.martial_status = req.body.martial_status;
  req.user.tele_num = req.body.tele_num;
  req.user.depandents = req.body.depandents;
  req.user.trusted_person = req.body.trusted_person;
  req.user.trustedPersonPhone = req.body.trustedPersonPhone;
  req.user.trustedPersonState = req.body.trustedPersonState;
  req.user.trustedPersonCountry = req.body.trustedPersonCountry;
  req.user.trustedPersonCity = req.body.trustedPersonCity;
  req.user.trustedPersonStreet = req.body.trustedPersonStreet;
  req.user.trustedPersonZip = req.body.trustedPersonZip;
  req.user.trustedPersonRelation = req.body.trustedPersonRelation;
  req.user.employee = req.body.employee;
  req.user.exp_date = req.body.exp_date;
  req.user.zipcode = req.body.zipcode;
  req.user.emplyername = req.body.emplyername;
  req.user.yearsemploye = req.body.yearsemploye;
  req.user.employee_country = req.body.employee_country;
  req.user.employee_states = req.body.employee_states;
  req.user.employee_zip = req.body.employee_zip;
  req.user.trustedPersonEmail = req.body.trustedPersonEmail;
  req.user.employee_city = req.body.employee_city;
  req.user.employee_phone = req.body.employee_phone;
  req.user.trustedPersonStreet = req.body.trustedPersonStreet;
  req.user.employee_fax = req.body.employee_fax;
  req.user.id_type = req.body.id_type;
  req.user.issue_date = req.body.issue_date;
  req.user.date_of_birth = req.body.date_of_birth;
  req.user.employee_aptsuite = req.body.employee_aptsuite;
  req.user.name_of_id = req.body.name_of_id;
  req.user.licenseExp = req.body.licenseExp;
  req.user.place_country = req.body.place_country;
  req.user.employeerphoneNumber = req.body.employeerphoneNumber;
  req.user.employeerFax = req.body.employeerFax;
  req.user.mailingCountry = req.body.mailingCountry;
  req.user.mailingProvince = req.body.mailingProvince;
  req.user.mailingZipcode = req.body.mailingZipcode;
  req.user.tax_residance = req.body.tax_residance;
  req.user.anual_income = req.body.anual_income;
  req.user.net_worth = req.body.net_worth;
  req.user.liquid_net_worth = req.body.liquid_net_worth;
  req.user.tax_rate = req.body.tax_rate;
  req.user.retir_saving = req.body.retir_saving;
  req.user.indi_account = req.body.indi_account;
  req.user.another_acc = req.body.another_acc;
  req.user.gift = req.body.gift;
  req.user.business_prop = req.body.business_prop;
  req.user.inheritnce = req.body.inheritnce;
  req.user.secu_bnefit = req.body.secu_bnefit;
  req.user.other_input = req.body.other_input;
  req.user.bank_funding = req.body.bank_funding;
  req.user.routing = req.body.routing;
  req.user.acc_num = req.body.acc_num;
  req.user.account_risk = req.body.account_risk;
  req.user.expenses = req.body.expenses;
  req.user.special_exp = req.body.special_exp;
  req.user.liquidity_exp = req.body.liquidity_exp;
  req.user.financialgoal = req.body.financialgoal;
  req.user.Stocks = req.body.Stocks;
  req.user.Option = req.body.Option;
  req.user.Bond = req.body.Bond;
  req.user.Future = req.body.Future;
  req.user.stock_opt = req.body.stock_opt;
  req.user.future_opt = req.body.future_opt;
  req.user.bond_opt = req.body.bond_opt;
  req.user.options_opt = req.body.future_opt;
  req.user.stock_check = req.body.stock_check;
  req.user.bond_check = req.body.bond_check;
  req.user.option_check = req.body.option_check;
  req.user.future_check = req.body.future_check;
  req.user.broker_account = req.body.broker_account;
  req.user.beneficial = req.body.beneficial;
  req.user.shareholder = req.body.shareholder;
  req.user.immediate = req.body.immediate;
  req.user.securities = req.body.securities;
  req.user.institution = req.body.institution;
  req.user.tax_witholding = req.body.tax_witholding;
  req.user.under_us = req.body.under_us;
  req.user.under_us_2 = req.body.under_us_2;
  req.user.tax_witholding_2 = req.body.tax_witholding_2;
  req.user.senior_politician = req.body.senior_politician;
  req.user.household = req.body.household;
  req.user.municipal = req.body.municipal;
  req.user.compny_name = req.body.compny_name;
  req.user.affi_adre = req.body.affi_adre;
  req.user.affi_entity_name = req.body.affi_entity_name;
  req.user.affi_city = req.body.affi_city;
  req.user.affi_state = req.body.affi_state;
  req.user.affi_zip = req.body.affi_zip;
  req.user.agrem = req.body.agrem;
  req.user.save();
  req.flash("info", "User has been successfully saved");
  res.redirect("/login");
});
router.get("/", function (req, res, next) {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/",
    failureFlash: true,
  })
);
router.get("/form", ensureAuthenticated, function (req, res) {
  res.render("form");
});
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

router.post(
  "/signup",
  function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const registerationType = req.body.RegisterationType;
    const productToTrade = req.body.ProductToTrade;
    const referer = req.body.referer;

    User.findOne({ email: email }, function (err, user) {
      if (err) {
        return next(err);
      }
      if (user) {
        req.flash("error", "User already exists");
        return res.redirect("/signup");
      }

      var newUser = new User({
        email: email,
        password: password,
        registerationType,
        productToTrade,
        referer,
      });
      newUser.save(next);
    });
  },
  passport.authenticate("login", {
    successRedirect: "/form",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

module.exports = router;
