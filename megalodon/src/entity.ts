import * as account from './entities/account'
import * as activity from './entities/activity'
import * as announcement from './entities/announcement'
import * as application from './entities/application'
import * as async_attachment from './entities/async_attachment'
import * as attachment from './entities/attachment'
import * as card from './entities/card'
import * as context from './entities/context'
import * as conversation from './entities/conversation'
import * as emoji from './entities/emoji'
import * as featured_tag from './entities/featured_tag'
import * as field from './entities/field'
import * as filter from './entities/filter'
import * as follow_request from './entities/follow_request'
import * as history from './entities/history'
import * as identity_proof from './entities/identity_proof'
import * as instance from './entities/instance'
import * as list from './entities/list'
import * as marker from './entities/marker'
import * as mention from './entities/mention'
import * as notification from './entities/notification'
import * as poll from './entities/poll'
import * as preferences from './entities/preferences'
import * as push_subscription from './entities/push_subscription'
import * as reaction from './entities/reaction'
import * as relationship from './entities/relationship'
import * as report from './entities/report'
import * as results from './entities/results'
import * as role from './entities/role'
import * as scheduled_status from './entities/scheduled_status'
import * as source from './entities/source'
import * as stats from './entities/stats'
import * as status from './entities/status'
import * as status_params from './entities/status_params'
import * as status_source from './entities/status_source'
import * as tag from './entities/tag'
import * as token from './entities/token'
import * as urls from './entities/urls'

export namespace Entity {
  export type Account = account.Account
  export type Activity = activity.Activity
  export type Announcement = announcement.Announcement
  export type AnnouncementAccount = announcement.AnnouncementAccount
  export type AnnouncementStatus = announcement.AnnouncementStatus
  export type AnnouncementReaction = announcement.AnnouncementReaction
  export type Application = application.Application
  export type AsyncAttachment = async_attachment.AsyncAttachment
  export type Attachment = attachment.Attachment
  export type Sub = attachment.Sub
  export type Focus = attachment.Focus
  export type Meta = attachment.Meta
  export type Card = card.Card
  export type Context = context.Context
  export type Conversation = conversation.Conversation
  export type Emoji = emoji.Emoji
  export type FeaturedTag = featured_tag.FeaturedTag
  export type Field = field.Field
  export type Filter = filter.Filter
  export type FilterContext = filter.FilterContext
  export type FollowRequest = follow_request.FollowRequest
  export type History = history.History
  export type IdentityProof = identity_proof.IdentityProof
  export type Instance = instance.Instance
  export type InstanceRule = instance.InstanceRule
  export type List = list.List
  export type RepliesPolicy = list.RepliesPolicy
  export type Marker = marker.Marker
  export type Mention = mention.Mention
  export type Notification = notification.Notification
  export type NotificationType = notification.NotificationType
  export type Poll = poll.Poll
  export type PollOption = poll.PollOption
  export type Preferences = preferences.Preferences
  export type Alerts = push_subscription.Alerts
  export type PushSubscription = push_subscription.PushSubscription
  export type Reaction = reaction.Reaction
  export type Relationship = relationship.Relationship
  export type Report = report.Report
  export type Category = report.Category
  export type Results = results.Results
  export type Role = role.Role
  export type ScheduledStatus = scheduled_status.ScheduledStatus
  export type Source = source.Source
  export type Stats = stats.Stats
  export type Status = status.Status
  export type StatusTag = status.StatusTag
  export type StatusParams = status_params.StatusParams
  export type StatusSource = status_source.StatusSource
  export type Tag = tag.Tag
  export type Token = token.Token
  export type URLs = urls.URLs
}

export default Entity
