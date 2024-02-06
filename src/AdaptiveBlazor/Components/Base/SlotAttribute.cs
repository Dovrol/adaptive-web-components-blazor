namespace AdaptiveBlazor.Components;

[AttributeUsage(AttributeTargets.Property)]
public class SlotAttribute(string slot) : Attribute
{
    public string Value { get; } = slot;
}
