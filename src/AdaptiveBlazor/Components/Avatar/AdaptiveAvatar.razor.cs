using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

/// <summary>
/// An avatar is a graphical representation of a user or object.
/// A common use case would be to display an image or text (usually initials) of a user or an object, such as in a user profile.
/// </summary>
public partial class AdaptiveAvatar
{
    /// <summary>
    /// The default slot for the content
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }
}
