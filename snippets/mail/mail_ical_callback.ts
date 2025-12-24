import { DateTime } from 'luxon'

await mail.send((message) => {
  message.icalEvent((calendar) => {
    calendar.createEvent({
      summary: 'Meeting',
      start: DateTime.local().plus({ minutes: 30 }),
      end: DateTime.local().plus({ minutes: 60 }),
    })
  }, {
    method: 'PUBLISH',
    filename: 'invite.ics',
  })
})
