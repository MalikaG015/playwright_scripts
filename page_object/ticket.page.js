const BasePage = require('./base_actions.page')

/**
 * Represents the functionalities related to ticket management.
 */
class TicketPage extends BasePage {

  /**
   * Accesses the ticket channel.
   * @returns {Promise<void>}
   */
  async accessTicketChannel() {
    await page.click('[id="channel-tickets-connection-toggle"]')

  }
}
module.exports = { TicketPage }