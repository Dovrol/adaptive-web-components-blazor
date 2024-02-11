
using Microsoft.AspNetCore.Components;

namespace AdaptiveBlazor.Components;

/// <summary>
/// An accordion is a vertically stacked set of interactive headings that each contain a title, 
/// content snippet, or thumbnail representing a section of content. The headings function as controls 
/// that enable users to reveal or hide their associated sections of content. Accordions are commonly 
/// used to reduce the need to scroll when presenting multiple sections of content on a single page.
/// </summary>
public partial class AdaptiveAccordion
{
    /// <summary>
    /// Controls the expand mode of the Accordion, either allowing single or multiple item expansion.
    /// </summary>
    [Parameter] public AccordionExpandMode ExpandMode { get; set; } = AccordionExpandMode.Multi;

    /// <summary>
    /// The slot for the accordion items
    /// </summary>
    [Parameter] public RenderFragment? ChildContent { get; set; }
    
    /// <summary>
    /// Fires a event callback with `AdaptiveAccordionItem` as parameter when the active item changes
    /// </summary>
    [Parameter] public EventCallback<AdaptiveAccordionItem> OnChange { get; set; }

    private readonly List<AdaptiveAccordionItem> items = [];
    internal void Additem(AdaptiveAccordionItem item)
    {
        items.Add(item);
    }

    private async Task HandleAccordionChange(AccordionChangeEventArgs args)
    {
        var item = items.FirstOrDefault(x => x.Id == args.ActiveId);
        if (item is not null)
        {
            await OnChange.InvokeAsync(item);
        }
    }
}
