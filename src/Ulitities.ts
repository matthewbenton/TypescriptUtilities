class StringUtil
{
    public static IsNull(str: string)
    {
        if(str == undefined || str == null)
        {
            return true;
        }

        return false;
    }
}