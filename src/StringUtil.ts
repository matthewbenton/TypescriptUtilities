class StringUtil
{
    public static Empty = "";

    public static IsNull(str: string)
    {
        if(str == undefined || str == null)
        {
            return true;
        }

        return false;
    }

    public static IsNullOrWhiteSpace(str: string)
    {
        if(StringUtil.IsNull(str))
        {
            return true;
        }

        if(str == StringUtil.Empty || StringUtil.IsWhiteSpace(str))
        {
            return true;
        }

        return false;
    }

    public static IsWhiteSpace(str: string)
    {
    }
}
export = StringUtil;