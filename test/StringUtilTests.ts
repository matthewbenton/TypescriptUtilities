var assert = require('assert');
import StringUtil = require("../src/StringUtil");

describe('StringUtil', function() {
  describe('#isNull', function() {
    it('should return true when null argument is passed', function() {    
        assert.equal(true, StringUtil.IsNull(null));
    });
  });

  describe('#isUndefined', function() {
    it('should return true when undefined argument is passed', function() {    
        assert.equal(true, StringUtil.IsNull(undefined));
    });
  });

});