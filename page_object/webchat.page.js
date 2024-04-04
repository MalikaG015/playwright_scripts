const BasePage = require('./base_actions.page')

/**
 * Represents the functionalities related to ticket management.
 */
class WebchatPage extends BasePage {
  /**
   * Accesses the webchat channel.
   * @returns {Promise<void>}
   */

  async accessWebchatChannel() {
    await page.click('#channel-webchat-connection-toggle')
  }
}

module.exports = { WebchatPage }