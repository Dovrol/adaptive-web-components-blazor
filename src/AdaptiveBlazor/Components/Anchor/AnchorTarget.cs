using System.ComponentModel;
namespace AdaptiveBlazor.Components;

public enum AnchorTarget
{
    [Description("_self")]
    Self,
    [Description("_blank")]
    Blank,
    [Description("_parent")]
    Parent,
    [Description("_top")]
    Top
}
