using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

public class AccordionChangeEventArgs : EventArgs
{
    public string? ActiveId { get; set; }
}


[EventHandler("onaccordionchange", typeof(AccordionChangeEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
public static partial class EventHandlers {}