using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

public abstract partial class AdaptiveComponentBase : ComponentBase
{
    protected readonly RenderFragment Slots;
    public AdaptiveComponentBase()
    {
        Slots = RenderSlots;
    }

    [Parameter]
    public virtual string? Id { get; set; }

    [Parameter]
    public virtual string? Class { get; set; }

    [Parameter]
    public virtual string? Style { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public virtual IReadOnlyDictionary<string, object>? AdditionalAttributes { get; set; }
}
