using System.ComponentModel;

namespace AdaptiveBlazor.Extensions;

public static class EnumExtensions
{
    public static string ToAttribute(this Enum value)
    {
        var description = value.ToString();
        var field = value.GetType().GetField(description);
        
        if (field is not null && Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) is DescriptionAttribute attribute)
        {
            description = attribute.Description;
        }
        
        return description;
    }
}
