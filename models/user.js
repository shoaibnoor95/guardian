var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");

var SALT_FACTOR = 10;
var userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  phoneNo: { type: String },
  address: { type: String },
  differentMailingAddress: { type: Boolean, default: false },
  streetAddress: { type: String },
  country: { type: String },
  province: { type: String },
  mailingZipcode: String,
  mailingProvince: { type: String },
  addressemploye: String,
  zipcode: String,
  trusted_person: Boolean,
  trustedPersonName: String,
  occupation: String,
  tele_num: { type: String },
  city: { type: String },
  yearsemploye: { type: String },
  employee_states: { type: String },
  employee_city: { type: String },
  employee_zip: { type: String },
  employee_aptsuite: { type: String },
  date: { type: Date },
  employeerphoneNumber: { type: String },
  relationshipAccountHoler: { type: String },
  registerationType: { type: String },
  productToTrade: { type: String },
  referer: { type: String },
  employee_country: { type: String },
  martial_status: { type: String },
  employee_phone: { type: String },
  depandents: { type: Number },
  trustedPersonPhone: String,
  trustedPersonStreet: String,
  trustedPersonZip: String,
  trustedPersonRelation: String,
  employee: { type: String },
  emplyername: { type: String },
  bussinessname: { type: String },
  companyType: { type: String },
  yearsofbusiness: { type: Number },
  bussinessPHONE: { type: Number },
  trustedPersonState: String,
  trustedPersonStreet: { type: String },
  fac: { type: Number },
  suitNo: { type: String },
  date_of_birth: { type: Date },
  id_type: { type: String },
  exp_date: { type: Date },
  mailingCountry: { type: String },
  issue_date: { type: Date },
  name_of_id: { type: String },
  anual_income: { type: String },
  net_worth: { type: String },
  licenseExp: Date,
  liquid_net_worth: { type: String },
  funding: { type: String },
  nAMEOFBANK: { type: String },
  accountNo: { type: String },
  baSwift: { type: String },
  taxStatus: { type: String },
  financialgoal: { type: String },
  investment: { type: String },
  retir_saving: { type: Boolean },
  indi_account: { type: Boolean },
  tax_rate: { type: String },
  tax_residance: { type: String },
  inheritnce: Boolean,
  secu_bnefit: Boolean,
  bank_funding: String,
  broker_account: String,
  affi_zip: String,
  optradio: String,
  affi_entity_name: String,
  affi_adre: String,
  affi_city: String,
  affi_state: String,
  option_check: String,
  future_check: String,
  bond_check: String,
  senior_politician: String,
  beneficial: String,
  shareholder: String,
  household: String,
  securities: String,
  under_us_2: String,
  tax_witholding_2: String,
  compny_name: String,
  municipal: String,
  under_us: String,
  tax_witholding: String,
  institution: String,
  immediate: String,
  stock_check: String,
  bond_opt: String,
  options_opt: String,
  future_opt: String,
  account_risk: String,
  routing: String,
  acc_num: String,
  Stocks: Boolean,
  Bond: Boolean,
  options: Boolean,
  Future: Boolean,
  stock_opt: String,
  agrem: String,
  liquidity_exp: String,
  special_exp: String,
  expenses: String,
  other_input: Boolean,
  another_acc: Boolean,
  place_country: String,
  business_prop: Boolean,
  knowledge: { type: String },
  brokerage: { type: Boolean },
  accountatVelocityClearingLLC: { type: Boolean },
  securitiesexchange: { type: Boolean },
  financial: { type: Boolean },
  withholding: { type: Boolean },
  relativeseniorpoliticalfigure: { type: Boolean },
  sec: { type: Boolean },
  companyName: { type: String },
  symbolCUSIP: { type: String },
  initialbalance: { type: String },
});

var noop = function () {};

userSchema.pre("save", function (done) {
  var user = this;

  if (!user.isModified("password")) {
    return done();
  }

  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) {
      return done(err);
    }
    bcrypt.hash(user.password, salt, noop, function (err, hashedPassword) {
      if (err) {
        return done(err);
      }
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = function (guess, done) {
  bcrypt.compare(guess, this.password, function (err, isMatch) {
    done(err, isMatch);
  });
};

userSchema.methods.name = function () {
  return this.displayName || this.username;
};

var User = mongoose.model("User", userSchema);

module.exports = User;
