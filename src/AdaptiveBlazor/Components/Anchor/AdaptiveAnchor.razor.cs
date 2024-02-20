using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

/// <summary>
/// An anchor is a piece of text which marks the beginning and/or the end of a hypertext link.
/// </summary>
public partial class AdaptiveAnchor
{
    /// <summary>
    /// The default slot for anchor content
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }

    /// <summary>
    /// Content which can be provided before the anchor content
    /// </summary>
    [Parameter, Slot("start")] public RenderFragment? StartSlot { get; set; }

    /// <summary>
    /// Content which can be provided after the anchor content
    /// </summary>
    [Parameter, Slot("end")] public RenderFragment? EndSlot { get; set; }

    /// <summary>
    /// Prompts the user to save the linked URL. <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">see a element</see> for more information.
    /// HTML Attribute: download
    /// </summary>
    [Parameter] public string? Download { get; set; }

    /// <summary>
    /// The URL the hyperlink references. <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">see a element</see> for more information.
    /// HTML Attribute: href
    /// </summary>
    [Parameter] public string? Href { get; set; }

    /// <summary>
    /// Hints at the language of the referenced resource. <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">see a element</see> for more information.
    /// HTML Attribute: hreflang
    /// </summary>
    [Parameter] public string? Hreflang { get; set; }

    /// <summary>
    /// <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">see a element</see> for more information.
    /// HTML Attribute: ping
    /// </summary>    
    [Parameter] public string? Ping { get; set; }

    /// <summary>
    /// <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">see a element</see> for more information.
    /// HTML Attribute: referrerpolicy
    /// </summary>    
    [Parameter] public string? Referrerpolicy { get; set; }

    /// <summary>
    /// <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">see a element</see> for more information.
    /// HTML Attribute: rel
    /// </summary>    
    [Parameter] public string? Rel { get; set; }

    /// <summary>
    /// <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">see a element</see> for more information.
    /// HTML Attribute: target
    /// </summary>    
    [Parameter] public AnchorTarget? Target { get; set; } = AnchorTarget.Self;

    /// <summary>
    /// <see href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">see a element</see> for more information.
    /// HTML Attribute: type
    /// </summary>    
    [Parameter] public string? Type { get; set; }

    // Aria
    [Parameter] public bool AriaAtomic { get; set; }
    [Parameter] public bool AriaBusy { get; set; }
    [Parameter] public string? AriaControls { get; set; }
    [Parameter] public string? AriaCurrent { get; set; }
    [Parameter] public string? AriaDescribedby { get; set; }
    [Parameter] public string? AriaDetails { get; set; }
    [Parameter] public string? AriaDisabled { get; set; }
    [Parameter] public string? AriaErrormessage { get; set; }
    [Parameter] public string? AriaExpanded { get; set; }
    [Parameter] public string? AriaFlowto { get; set; }
    [Parameter] public bool AriaHaspopup { get; set; }
    [Parameter] public bool AriaHidden { get; set; }
    [Parameter] public string? AriaInvalid { get; set; }
    [Parameter] public string? AriaKeyshortcuts { get; set; }
    [Parameter] public string? AriaLabel { get; set; }
    [Parameter] public string? AriaLabelledby { get; set; }
    [Parameter] public string? AriaLive { get; set; }
    [Parameter] public string? AriaOwns { get; set; }
    [Parameter] public string? AriaRelevant { get; set; }
    [Parameter] public string? AriaRoledescription { get; set; }
}
