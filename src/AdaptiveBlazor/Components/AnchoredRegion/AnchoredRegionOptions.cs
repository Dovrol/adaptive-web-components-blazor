using System.ComponentModel;

namespace AdaptiveBlazor.Components;

/// <summary>
/// Defines if the component updates its position automatically. Calling update() always provokes an update.
/// anchor - the component only updates its position when the anchor resizes (default)
/// auto - the component updates its position when:
/// - update() is called
/// - the anchor resizes
/// - the window resizes
/// - the viewport resizes
/// - any scroll event in the document
/// </summary>
public enum AutoUpdateMode
{
    [Description("auto")]
    Auto,
    [Description("anchor")]
    Anchor,
}

/// <summary>
/// Values for the vertical positioning options for an anchored region
/// </summary>
public enum VerticalPosition
{
    [Description("top")]
    Top,
    [Description("bottom")]
    Bottom,
    [Description("center")]
    Center,
    [Description("unset")]
    Unset
}

/// <summary>
/// Values to define the scaling behavior of an anchored region on a particular axis
/// </summary>
public enum AxisScalingMode
{
    [Description("anchor")]
    Anchor,
    [Description("content")]
    Content,
    [Description("fill")]
    Fill
}


/// <summary>
/// Values for the horizontal positioning options for an anchored region
/// </summary>
public enum HorizontalPosition
{
    [Description("start")]
    Start,
    [Description("end")]
    End,
    [Description("left")]
    Left,
    [Description("right")]
    Right,
    [Description("center")]
    Center,
    [Description("unset")]
    Unset
}


/// <summary>
/// Values to define the base behavior of an anchored region on a particular axis
/// </summary>
public enum AxisPositioningMode
{
    [Description("uncontrolled")]
    Uncontrolled,
    [Description("locktodefault")]
    Locktodefault,
    [Description("dynamic")]
    Dynamic
}