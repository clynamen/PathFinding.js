/**
 * @namespace PF.Cost
 * @description A collection of cost functions.
 */
module.exports = {

  /**
   * Null slope cost function. Can be used as default
   * @return {number} 0
   */
  nullCost: function(currentHeight, nextHeight) {
      return  0;
  },

  /**
   * Simple height difference
   * @param {number} currentHeight - height of the current node
   * @param {number} nextHeight - height of the next node
   * @return {number} nextHeight - currentHeight
   */
  slope: function(currentHeight, nextHeight) {
      return  nextHeight - currentHeight;
  }

};
