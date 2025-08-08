// scripts/fix-timestamps.js
const { createClient } = require('@libsql/client');
require('dotenv').config({ path: '.env.local' });

const dbClient = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

async function fixTimestamps() {
  try {
    console.log('Updating existing timestamps to correct timezone...');
    
    // Get all contacts
    const contacts = await dbClient.execute('SELECT id, created_at FROM contacts');
    
    for (const contact of contacts.rows) {
      const currentTime = new Date(contact.created_at);
      console.log(`Contact ${contact.id} current time:`, contact.created_at);
      
      // Since the time is showing 3 hours behind, we need to adjust the stored time
      // Subtract 3 hours from the stored time so when we add 3 hours for display, it shows correctly
      const correctedTime = new Date(currentTime.getTime() - (3 * 60 * 60 * 1000));
      
      await dbClient.execute({
        sql: 'UPDATE contacts SET created_at = ? WHERE id = ?',
        args: [correctedTime.toISOString(), contact.id]
      });
      
      console.log(`Updated contact ${contact.id}: ${contact.created_at} -> ${correctedTime.toISOString()}`);
    }
    
    console.log('✅ All timestamps updated successfully!');
    console.log('Now the display time should be correct when adding 3 hours for Kenya timezone.');
  } catch (error) {
    console.error('❌ Error updating timestamps:', error);
  }
}

fixTimestamps();