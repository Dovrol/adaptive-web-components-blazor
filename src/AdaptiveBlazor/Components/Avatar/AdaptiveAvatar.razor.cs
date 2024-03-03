using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

/// <summary>
/// An avatar is a graphical representation of a user or object.
/// A common use case would be to display an image or text (usually initials) of a user or an object, such as in a user profile.
/// </summary>
public partial class AdaptiveAvatar
{
    /// <summary>
    /// The default slot for avatar text, commonly a name or initials
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }
    /// <summary>
    /// Used for media such as an image
    /// </summary>
    [Parameter, Slot("media")] public RenderFragment? MediaSlot { get; set; }
    /// <summary>
    /// Used to provide a badge, such as a status badge
    /// </summary>
    [Parameter, Slot("badge")] public RenderFragment? BadgeSlot { get; set; }
}
