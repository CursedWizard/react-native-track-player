/**
 * Define how the audio playback should behave to removing the app from recents (killing it). Default is `ContinuePlayback`.
 */
export enum AppKilledPlaybackBehavior {
  /**
   * This option will continue playing audio in the background when the app is removed from recents, **as long as something is actively playing**. The notification remains. This is the default.
   *
   * If nothing is playing (e.g. the queue is empty or playback is paused) when the app is removed from recents, the service is stopped and the notification is removed, since there would be nothing to continue.
   */
  ContinuePlayback = 'continue-playback',

  /**
   * This option will pause playing audio in the background when the app is removed from recents. The notification remains and can be used to resume playback.
   *
   * If there is nothing queued to resume, the service is stopped and the notification is removed instead.
   */
  PausePlayback = 'pause-playback',

  /**
   * This option will stop playing audio in the background when the app is removed from recents. The notification is removed and can't be used to resume playback. Users would need to open the app again to start playing audio.
   */
  StopPlaybackAndRemoveNotification = 'stop-playback-and-remove-notification',
}
